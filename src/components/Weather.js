import React from 'react'

const Weather = (props) => {
    return (
        <div className="weather__info">
            {
                props.city && props.country && <p className="weather__key"> Location:
	 		<span className="weather__value"> {props.city}, {props.country}</span>
                </p>
            }
            {
                props.temperature && <p className="weather__key"> Temperature:
                    <img width="50" src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="" />
                    <span className="weather__value">{Math.floor(props.temperature - 273.15)} &#8451;</span>
                </p>
            }
            {
                props.humidity && <p className="weather__key"> Humidity:
	 		<span className="weather__value"> {props.humidity} %</span>
                </p>
            }
            {
                props.description && <p className="weather__key"> Conditions:
	 		<span className="weather__value"> {props.description} </span>
                </p>
            }
            {
                props.error && <p className="weather__error">{props.error}</p>
            }
        </div>
    )
}

export default Weather
