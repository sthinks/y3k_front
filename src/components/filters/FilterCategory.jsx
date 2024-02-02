// react
import React, { useEffect, useState } from 'react';
// third-party
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

// application
import axiosClient from '../utils/axios';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { ExpandMoreOutlined } from '@material-ui/icons';
import './FilterCategory.css';

function FilterCategory(props) {
    const [category, setCategory] = useState([]);
    const { slug } = useParams();
    const [expanded, setExpanded] = React.useState(slug);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    useEffect(() => {
        axiosClient.get('/api/categories')
            .then(function (response) {
                setCategory(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });

    }, [])

    useEffect(() => {
        handleChange();
    }, [])



    return (
        <div className="filter-categories">
            {category.map((e) => (
                <Accordion key={e.name}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreOutlined />}
                        aria-controls="panel1d-content"
                    >
                        <span className="filterlist-item_name">{e.name}</span>
                    </AccordionSummary>
                    {e.children.map((h) => (
                        <AccordionDetails key={h.name}>
                            <a style={{ textDecoration: "none" }} href={`urunler/${e.slug}/${h.slug}`}>
                                <Typography className='filterCagetory_hover'>
                                    {h.name}
                                </Typography>
                            </a>
                        </AccordionDetails>
                    ))}

                </Accordion>
            ))}
        </div>
    );
}

FilterCategory.propTypes = {
    /**
     * Filter object.
     */
    data: PropTypes.object,
};

export default FilterCategory;
