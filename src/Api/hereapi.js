import React, { useState, useEffect } from 'react';

export function Hereapivol() {
    useEffect(() => {
        fetchItems();
    }, []);
    const [items, setItems] = useState();

    const [latitudeA, setlatitudeA] = useState([41.3032,43.7229])
    const [longitudeA, setlongitudeA] = useState([2.0771,10.3965])
    const fetchItems = async () => {
        const data = await fetch(`https://transit.router.hereapi.com/v8/routes?apiKey=pLZT2rwUsCpXPdLgqbzN6Vz4e_ZOVuNebLlfsm0mqM8&origin=49.009691,2.547925&destination=${latitudeA[0]},${longitudeA[0]}`);
        const items = await data.json();
        console.log(items)
        setItems(items)
    }
    return (
        <div>
            <p> depart de à {items && items.routes[0].sections[0].departure.time} pour une arrivee à {items && items.routes[0].sections[items.routes[0].sections.length - 1].arrival.time}</p>
            <p> mode de transport : {items && items.routes[0].sections[0].type}, {items && items.routes[0].sections[1].transport.mode}, {items && items.routes[0].sections[items.routes[0].sections.length - 1].transport.mode}</p>
        </div>
    )
}
export default Hereapivol

export function Hereapihome() {
    useEffect(() => {
        fetchItems();
    }, []);
    

    const [items, setItems] = useState();

    const fetchItems = async () => {
        const data = await fetch(`https://transit.router.hereapi.com/v8/routes?apiKey=pLZT2rwUsCpXPdLgqbzN6Vz4e_ZOVuNebLlfsm0mqM8&origin=41.79457,12.25473&destination=41.90096,12.50243`);
        //https://transit.router.hereapi.com/v8/routes?apiKey=pLZT2rwUsCpXPdLgqbzN6Vz4e_ZOVuNebLlfsm0mqM8&origin=41.79457,12.25473&destination=41.90096,12.50243  'https://transit.router.hereapi.com/v8/routes?apiKey=pLZT2rwUsCpXPdLgqbzN6Vz4e_ZOVuNebLlfsm0mqM8&origin=41.79457,12.25473&destination=48.8534,2.3488&maxPerTransport=1'
        const items = await data.json();
        console.log(items)
        setItems(items)
    }
    return (
        <div>
            <p>
                {items && items.routes[0].id}
            </p>
            <p>
                {items && items.routes[0].sections[0].id}
                {items && items.routes[0].sections[1].id}
            </p>
            <p>
                {items && items.routes[0].sections[0].type}
            </p>
        </div>
    )
}

export function Hereapialaune() {
    useEffect(() => {
        fetchItems();
    }, []);
    const [items, setItems] = useState();

    const fetchItems = async () => {
        const data = await fetch(`https://transit.router.hereapi.com/v8/routes?apiKey=pLZT2rwUsCpXPdLgqbzN6Vz4e_ZOVuNebLlfsm0mqM8&origin=41.79457,12.25473&destination=41.90096,12.50243`);
        const items = await data.json();
        console.log(items)
        setItems(items)
    }

    return (
        <div className="alaune">
            <p> depart de à {items && items.routes[0].sections[0].departure.time} pour une arrivee à {items && items.routes[0].sections[items.routes[0].sections.length - 1].arrival.time}</p>
            <p> mode de transport : {items && items.routes[0].sections[0].type}, {items && items.routes[0].sections[1].transport.mode}, {items && items.routes[0].sections[items.routes[0].sections.length - 1].transport.mode}</p>
        </div>
    )
}
