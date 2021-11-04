import React from 'react'
import { useState, useEffect } from 'react';

function Alaune() {
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


export default Alaune