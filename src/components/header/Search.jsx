// react
import React, {
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';

// third-party
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';

// application
import shopApi from '../../api/shop';
import Suggestions from './Suggestions';
import { Cross20Svg, Search20Svg } from '../../svg';
import axiosClient from "../utils/axios";

function Search(props) {
    const {
        context,
        className,
        inputRef,
        onClose,
        location,
    } = props;
    const [cancelFn, setCancelFn] = useState(() => () => { });
    const [suggestionsOpen, setSuggestionsOpen] = useState(false);
    const [hasSuggestions, setHasSuggestions] = useState(false);
    const [suggestedProducts, setSuggestedProducts] = useState([]);
    const [category, setCategory] = useState('[all]');
    const wrapper = useRef(null);
    const [term, setTerm] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        {
            const search = async () => {
                setLoading(true)
                await axiosClient.get('/api/product_search/' + term)
                    .then(function (response) {
                        setData(response.data)
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
                    .finally(function () {
                        setLoading(false)
                    })
            }

            if (term && !data.length) {
                search();
            } else {
                const timeoutId = setTimeout(() => {
                    if (term) {
                        search();
                    }
                }, 2000)
                return () => {
                    clearTimeout(timeoutId);
                };
            }
        }
    }, [term])

    const close = useCallback(() => {
        if (onClose) {
            onClose();
        }

        setSuggestionsOpen(false);
    }, [onClose]);

    // Close suggestions when the location has been changed.
    useEffect(() => close(), [close, location]);

    // Close suggestions when a click has been made outside component.
    useEffect(() => {
        const onGlobalClick = (event) => {
            if (wrapper.current && !wrapper.current.contains(event.target)) {
                close();
            }
        };

        document.addEventListener('mousedown', onGlobalClick);

        return () => document.removeEventListener('mousedown', onGlobalClick);
    }, [close]);

    // Cancel previous typing.
    useEffect(() => () => cancelFn(), [cancelFn]);

    const handleFocus = () => {
        setSuggestionsOpen(true);
    };

    const handleChangeQuery = (event) => {
        let canceled = false;
        let timer;

        const newCancelFn = () => {
            canceled = true;
            clearTimeout(timer);
        };

        const term = event.target.value;

        setTerm(term);

        if (term === '') {
            setHasSuggestions(false);
        } else {
            timer = setTimeout(() => {
                const options = { limit: 5 };

                if (category !== '[all]') {
                    options.category = category;
                }

                shopApi.getSuggestions(term, options).then((products) => {
                    if (canceled) {
                        return;
                    }

                    setSuggestedProducts(products);
                    setHasSuggestions(term.length > 0);
                    setSuggestionsOpen(true);
                });
            }, 100);
        }

        setCancelFn(() => newCancelFn);
    };

    const handleBlur = () => {
        setTimeout(() => {
            if (!document.activeElement || document.activeElement === document.body) {
                return;
            }

            // Close suggestions if the focus received an external element.
            if (wrapper.current && !wrapper.current.contains(document.activeElement)) {
                close();
            }
        }, 10);
    };

    // Close suggestions when the Escape key has been pressed.
    const handleKeyDown = (event) => {
        // Escape.
        if (event.which === 27) {
            close();
        }
    };

    const rootClasses = classNames(`search search--location--${context}`, className, {
        'search--suggestions-open': suggestionsOpen,
        'search--has-suggestions': hasSuggestions,
    });

    const closeButton = context !== 'mobile-header' ? '' : (
        <button className="search__button search__button--type--close" type="button" onClick={close}>
            <Cross20Svg />
        </button>
    );


    return (
        <div className={rootClasses} ref={wrapper} onBlur={handleBlur}>
            <div className="search__body">
                <form className="search__form" action="">

                    <input
                        ref={inputRef}
                        onChange={handleChangeQuery}
                        onFocus={handleFocus}
                        onKeyDown={handleKeyDown}
                        value={term}
                        className="search__input"
                        name="search"
                        placeholder="Aradığınız ürünün kodunu giriniz."
                        aria-label="Site search"
                        type="text"
                        autoComplete="off"
                    />
                    <button className="search__button search__button--type--submit" type="submit">
                        <Search20Svg width="20" />
                    </button>
                    {closeButton}
                    <div className="search__border" />
                </form>
                <Suggestions className="search__suggestions" context={context} products={data} loading={loading} />
            </div>
        </div>
    );
}

export default withRouter(Search);
