import React from "react";

import './card-style.css'

const Card =props =>{
    return(
        <div className="card text-center">
            <div className="overflow">
                <img src={props.imgsrc} alt="img1" className="card-img-top" />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nihil architecto consectetur. Sed hic quaerat natus excepturi laborum rerum numquam qui volupta
                </p>
                <a href="#" className="btn btn-outline-success">Go Anywhere</a>
            </div>
        </div>
    );
}

export default Card;