import React, {useState, useEffect} from 'react';


function Home() {
    console.log("helloworld")
    useEffect(() => {
        fetchItems();
    },[]);

    const [items , setItems] = useState();
// initialiser à null 
    const fetchItems = async () => {
        const data = await fetch('https://transit.router.hereapi.com/v8/routes?apiKey=pLZT2rwUsCpXPdLgqbzN6Vz4e_ZOVuNebLlfsm0mqM8&origin=41.79457,12.25473&destination=48.8534,2.3488&maxPerTransport=1');
//https://transit.router.hereapi.com/v8/routes?apiKey=pLZT2rwUsCpXPdLgqbzN6Vz4e_ZOVuNebLlfsm0mqM8&origin=41.79457,12.25473&destination=41.90096,12.50243
        const items = await data.json();
        console.log(items)
        setItems(items)
    }
    console.log("helloworld")
    return (
        <div>
            <h1>home</h1>
            <p>
                {items && items.routes[0].id}
            </p>
            <p>
                {items && items.routes[0].sections[0].id}
            </p>
            <p>
                {items && items.routes[0].sections[0].type}
            </p>
        </div>
    )
}

export default Home
