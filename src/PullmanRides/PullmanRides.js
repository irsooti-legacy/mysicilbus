import React from 'react'
import PullmanRide from '../PullmanRide/PullmanRide';

const PullmanRides = (props) => {
    return (
        <div style={{ marginTop: '20px' }}>
            {props.rides ? props.rides.error ? <div className="hero is-medium">
                <div className="hero-body has-text-centered">
                    <div style={{ fontSize: '4em' }}><i class="fas fa-grin-beam-sweat"></i></div>
                    <div style={{ fontWeight: "bolder", fontSize: "xx-large" }}>Non ho trovato nessuna corsa!</div>
                    <div className="is-size-6"><small>Capita, non prendertela con me.</small></div>
                </div>
            </div> : props.rides.results.map((r, i) => <PullmanRide key={i} {...r} />) : null}
        </div >
    )
}

export default PullmanRides
