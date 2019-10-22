import React from 'react'

const Weather = (props) => {
    const sunrise = props.sunrise;
    const sunset = props.sunset;
    const date = new Date(sunrise * 1000);
    const date2 = new Date(sunset * 1000);
    const hours = date.getHours();
    const hours2 = date2.getHours();
    const minutes = '0' + date.getMinutes();
    const minutes2 = '0' + date2.getMinutes();

    const formatedTime = hours + ':' + minutes.substr(-2)
    const formatedTime2 = hours2 + ':' + minutes2.substr(-2)
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
                props.sunrise && <p className="weather__key"> Sunrise:
	 		<span className="weather__value"> {formatedTime} H</span>
                </p>
            }
            {
                props.sunset && <p className="weather__key"> Sunset:
	 		<span className="weather__value"> {formatedTime2} H</span>
                </p>
            }
            {
                props.description && <p className="weather__key"> Conditions:
	 		<span className="weather__value"> {props.description} </span>
                </p>
            }

            {
                props.wind && <p className="weather__key"> Wind:
	 		<span className="weather__value"> {props.wind} meter/sec</span>
                </p>
            }
            {
                props.error && <p className="weather__error">{props.error}</p>
            }
        </div>
    )
}

export default Weather
