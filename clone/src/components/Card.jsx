import React from "react";
import starImage from '../images/star.png';
import coverImg1 from '../images/katie-zaferes.png';
import coverImg2 from '../images/mountain-bike.png';
import coverImg3 from '../images/wedding-photography.png';

const imageMap = {
    'katie-zaferes.png': coverImg1,
    'mountain-bike.png': coverImg2,
    'wedding-photography.png': coverImg3,
};

export default function Card(props) {
    let badgeText = "";
    
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.location === "Online") {
        badgeText = "ONLINE";
    }
    
    return (
        <div className="card">
            {badgeText && (
                <div className="card--badge">{badgeText}</div>
            )}
            <img
                src={imageMap[props.coverImg]}
                className="card--image"
                alt={props.title} // Add alt text for accessibility
            />
            <div className="card--stats">
                <img src={starImage} className="card--star" alt="Star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price">
                <span className="bold">From ${props.price}</span> / person
            </p>
        </div>
    );
}
