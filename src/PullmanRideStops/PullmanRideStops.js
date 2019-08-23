import React from 'react'
import cssModule from './PullmanRideStops.module.css'

const PullmanRideStops = ({ path, stops = {} }) => {

    const [from, to] = path
    let beginWasFound = false;
    let endWasFound = false;

    return (
        <div className={cssModule.pullmanRideStops}>
            {Object.keys(stops).map(time => {
                if (stops[time] === from) {
                    beginWasFound = true
                }

                const classes = [cssModule.stop]
                if (beginWasFound && !endWasFound) classes.push(cssModule.found)
                if (stops[time] === to) {
                    endWasFound = true
                }

                return <div className={classes.join(' ')} key={time}>{time} - {stops[time]}</div>
            }
            )}
        </div>
    )
}

export default PullmanRideStops
