import { API } from "./config";

/**
 * @typedef Stop
 * @property {string} id
 * @property {string} label
 * @returns {Promise<{description: string, stops: Stop[]}>}
 */
export function getDepartureList() {
    return fetch(API).then(r => r.json())
}

export function getDestinationList({ departureId, date = new Date() }) {
    // const body = new FormData();

    // body.append("start", departureId)
    // body.append("datetime", date.toISOString())
    return fetch(API, {
        method: 'post',
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
        body: JSON.stringify({
            start: departureId,
            datetime: date.toISOString()
        }),
    }).then(r => r.json())
}

export function findRides({ departureId, destinationId, date = new Date() }) {
    // const body = new FormData();

    // body.append("start", departureId)
    // body.append("datetime", date.toISOString())
    return fetch(API + '/find', {
        method: 'post',
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
        body: JSON.stringify({
            start: departureId,
            datetime: date,
            destination: destinationId
        }),
    }).then(r => r.json())
}