import React from "react";

const from = (props) => {
        return (
            <form onSubmit={props.getWeather}>
                <input type="text" name="city" placeholder="City..."/>            
                <input type="text" name="countery" placeholder="Countery..." />
                <button>Get Weather</button>            
            </form>
        )
}

export default from