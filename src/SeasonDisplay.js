import './SeasonDisplay.css';
import React from 'react';
import Clock from './Clock';


const seasonConfig = {
    summer: {
        text: "Let's hit the beach",
        iconName: 'sun'
    },
    winter: {
        text: 'Burr it is cold!',
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {

    if(month > 2 && month < 9) {

        return lat > 0 ? 'summer' : 'winter';

    } else {

        return lat > 0 ? 'winter' : 'summer';
    }

}


const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth);
    const {text, iconName} = seasonConfig[season];

    return (
        <div>
            <div className="clock"><Clock/></div>    
            <div className={`season-display ${season}`}>
                <i className={`icon-left massive ${iconName} icon`} />
                <div>Latitude rudi: {props.lat}</div>
                <div>Season: {season}</div>
                <div>{text}</div>
                <i className={`icon-right massive ${iconName} icon`}/>
            </div>
        </div>
        )
}

export default SeasonDisplay;