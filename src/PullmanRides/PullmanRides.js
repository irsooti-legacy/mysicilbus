import React from 'react'
import PullmanRide from '../PullmanRide/PullmanRide';

const PullmanRides = (props) => {
    return (
        <div style={{ marginTop: '20px' }}>
            {props.rides ? props.rides.error ? <div className="hero is-size-1 is-medium">
                <div className="hero-body has-text-centered">
                    <div style={{ fontSize: '4em' }}><i class="fas fa-grin-beam-sweat"></i></div>
                    <div>Non ho trovato nessuna corsa!</div>
                    <div className="is-size-6"><small>Sicuro di aver compilato tutti i campi?</small></div>
                </div>
            </div> : props.rides.results.map((r, i) => <PullmanRide key={i} {...r} />) : null}
        </div >
    )
}

export default PullmanRides
