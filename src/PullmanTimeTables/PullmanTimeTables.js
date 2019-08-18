import React, { useState, useEffect } from 'react'
import { getDepartureList, getDestinationList, findRides } from '../api';
import PullmanRideSelector from '../PullmanRideSelector/PullmanRideSelector';
import 'flatpickr/dist/themes/airbnb.css'
import { Italian } from 'flatpickr/dist/l10n/it'
import flatpickr from 'flatpickr'
import Flatpickr from 'react-flatpickr'
import PullmanRides from '../PullmanRides/PullmanRides';

flatpickr.localize(Italian)

const PullmanTimeTables = () => {

    const [departureList, setDepartureList] = useState([])
    const [departureIsLoading, setDepartureIsLoading] = useState(true)
    const [destinationList, setDestinationList] = useState([])
    const [destinationIsLoading, setDestinationIsLoading] = useState(false);
    const [rideDate, setRideDate] = useState();
    const [rides, setRides] = useState();

    const [loader, setLoader] = useState(false)


    const handleRideDates = evt => {
        console.log(evt)
        setRideDate(evt[0])
    }


    const onDepartureSelect = ({ currentTarget }) => {
        setDestinationIsLoading(true)
        getDestinationList({
            departureId: currentTarget.value
        }).then(r => {
            setDestinationList(r.stops)
            setDestinationIsLoading(false)
        })
    }

    /**
     * 
     * @param {React.FormEvent<HTMLFormElement>} evt 
     */
    const onSubmit = (evt) => {
        evt.preventDefault();
        const start = evt.currentTarget["start"].value
        const dest = evt.currentTarget["destination"].value
        const departureDate = evt.currentTarget["datetime"].value

        if (start && dest && rideDate) {



            setLoader(true)
            findRides({
                departureId: start,
                destinationId: dest,
                date: departureDate
            }).then(setRides).finally(() => setLoader(false))
        }

        else {
            // lol
        }

    }

    useEffect(() => {
        getDepartureList().then(r => {
            setDepartureIsLoading(false)
            setDepartureList(r.stops)
        })
    }, [setDepartureList]);



    return (
        <>
            <div>
                <section style={{ background: '#23125e' }} class="hero is-primary is-bold">
                    <div class="hero-body">
                        <div class="container">
                            <form onSubmit={onSubmit}>
                                <div
                                    // style={{ marginTop: "3rem", padding: '30px', background: '#23125e', borderRadius: '17px' }} 
                                    className="columns is-3">
                                    <div className="column is-2">
                                        <div className="control has-icons-left">
                                            <Flatpickr
                                                formTarget="DD/MM/YYYY"
                                                name="datetime"
                                                className="input is-medium"
                                                options={{ minDate: new Date(), dateFormat: 'd/m/Y' }} onChange={handleRideDates} />
                                            <span className="icon is-medium is-left">
                                                <i className="fas fa-calendar"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="column is-4">
                                        <PullmanRideSelector defaultValue="Partenza" name="start" isLoading={departureIsLoading} options={departureList} onChange={onDepartureSelect}></PullmanRideSelector>
                                    </div>
                                    <div className="column is-4">
                                        <PullmanRideSelector defaultValue="Arrivo" name="destination" isLoading={destinationIsLoading} options={destinationList} onChange={() => { }}></PullmanRideSelector>
                                    </div>
                                    <div className="column is-2">
                                        <input type="submit" value="Cerca" className="button is-medium is-fullwidth is-warning" />
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </section>

            </div>

            {loader === false ?
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <PullmanRides rides={rides}></PullmanRides>
                        </div>
                    </div>
                </div>
                : <progress className="progress is-danger is-radiusless" max="100">30%</progress>}
        </>
    )
}

export default PullmanTimeTables
