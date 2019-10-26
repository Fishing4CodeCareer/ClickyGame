import React from "react";
import "./style.css";

function StrainCard(props) {
    return (
        <div className="card">
            <div className="imp-container">
                <img alt={props.name} src={props.name} /> ]
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Name:</strong> {props.name}
                    </li>
                    <li>
                    <strong>type:</strong> {props.type}  
                    </li>
                    <li>
                    <strong>cbd:</strong> {props.cbd}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default StrainCard;

/////Create Strain Card placer card.////