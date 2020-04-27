import React from 'react';
import TransformacionDigital from './TransformacionDigital'
import Robotica from './Robotica'
import AI from './AI'

export const About = () => {
    return (
        <div>
            <div className="row">
            <div className="col-md-4">
                <AI/>
            </div>
            <div className="col-md-4">  
                <TransformacionDigital/>
            </div>
            <div className="col-md-4">  
                <Robotica/>
            </div>
        </div>
        </div>
    )
}

export default About;
