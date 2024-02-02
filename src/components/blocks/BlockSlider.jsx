import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './BlockSlider.css'
import axiosClient from '../utils/axios';
export const BlockSlider = () => {
    const [windowSize, setWindowSize] = useState(false);
    const [brandsAll, setBrandsAll] = useState([])

    const axiosRes = () => {
        axiosClient.get('/api/slider')
            .then(function (response) {
                const brands = response.data;
                setBrandsAll(brands)
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        if (width < 450) {
            setWindowSize(true)
        }
        return {
            width,
            height
        };
    }
    useEffect(() => {
        getWindowDimensions();
        axiosRes();
    }, [])

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12' style={{ padding: 0 }}>
                    <div className='homepage-slider'>
                        <Carousel showIndicators={false} showThumbs={false} showStatus={false} >
                            {brandsAll.map((e) => (
                                <a href={e.link} style={{ width: "100%", height: "100%" }}>
                                    <div>
                                        <img src={windowSize ? `${e.mobile_image}` : `${e.image}`} />
                                    </div>
                                </a>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}
