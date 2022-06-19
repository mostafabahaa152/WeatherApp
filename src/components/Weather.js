import React from "react";

const Weather = (props)=> {
    
        return (
            <div className="info">
                {
                    props.tempreature && <p className="info_key">tempreature: <span className="info_value">{props.tempreature}<sup>o</sup></span></p>
                }
                {
                    props.city && <p className="info_key">City: <span className="info_value">{props.city}</span></p>
                }
                {
                    props.countery && <p className="info_key">Countery: <span className="info_value">{props.countery}</span></p>
                }
                {
                    props.humidity && <p className="info_key">humidity: <span className="info_value">{props.humidity}</span></p>
                }
                {
                    props.describe && <p className="info_key">describe: <span className="info_value">{props.describe}</span></p>
                }
                {
                    props.error && <p className="info_key">Error: <span className="info_value">{props.error}</span></p>
                }
            </div>
        )
}

export default Weather;