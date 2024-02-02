import React, { useEffect, useState } from 'react'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import axiosClient from '../utils/axios';
import './BiliyorMuydunuz.css';
export const BlockBiliyorMuydunuz = () => {

    const AutoplaySlider = withAutoplay(AwesomeSlider);

    const [knowledge, setKnowledge] = useState([])

    useEffect(() => {
        axiosClient.get('/api/knowledge')
            .then(function (response) {
                const know = response.data;
                setKnowledge(know)
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, [])

    return (
        <div className='container section-space--inner--120' style={{ paddingBottom: "0px" }}>
            <div className='row'>
                <div className="col-md-12">
                    <div>
                        <h2>Bunları Biliyor Muydunuz?</h2>
                    </div>
                    <div>
                        <AutoplaySlider
                            cancelOnInteraction={false} // should stop playing on user interaction
                            interval={3000}
                            bullets={false}
                        >
                            {knowledge.map((e) => (
                                <div style={{ backgroundColor: "white" }}>
                                    <div className="myCarousel d-flex align-items-center">
                                        <img src={`${e.image}`} className="myCarousel-img mobil-img-carousel" />
                                        <p>
                                            {e.content}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </AutoplaySlider>
                    </div>
                </div>
            </div>
        </div>
    )
}
