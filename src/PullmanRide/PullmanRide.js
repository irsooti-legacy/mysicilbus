import React from 'react'
import cssModule from './PullmanRide.module.css'
import PullmanRideStops from '../PullmanRideStops/PullmanRideStops';

const PullmanRide = ({ from, fromTime, destination, destinationTime, eta, price: { oneWay, twoWay }, operator, stops }) => {
    return (
        <div className={cssModule.pullmanRide}>
            <div className="columns">
                <div className="column is-half">
                    <strong>{operator}</strong>
                </div>
                <div className="column is-half">
                    Tempo stimato: <strong>{eta}</strong>
                </div>
            </div>

            <div className="columns">

                <div className="column is-3">
                    <div className="has-text-info has-text-weight-medium">{fromTime}</div>
                    <div className="has-text-weight-medium">{from}</div>
                </div>
                <div className="column is-3">
                    <div className="has-text-info has-text-weight-medium">{destinationTime}</div>
                    <div className="has-text-weight-medium">{destination}</div>
                </div>
                <div className="column is-6">
                    <div>Solo andata <strong className="has-text-danger">{oneWay}</strong></div>
                    <div>Andata e ritorno <strong className="has-text-danger">{twoWay || "Non disponibile"}</strong></div>
                </div>

            </div>

            <div className="columns">
                <div className="column">
                    <div className={cssModule.rideStops}>
                        <PullmanRideStops path={[from, destination]} stops={stops}></PullmanRideStops>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default PullmanRide
