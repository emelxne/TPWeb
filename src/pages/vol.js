import React from "react";
import styled from "styled-components";
import { useState, useEffect } from 'react';
import '../../src/components/vol.css';

function Vol() {
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
    /*
    <p>
                    {items && items.routes[0].id}
                </p>
                <p>
                    {items && items.routes[0].sections[0].id}
                </p>
                <p>
                    {items && items.routes[0].sections[0].type}
                </p>
                <p>
                    {items && items.routes[0].sections[0].departure.time}
                </p>
                <p>
                    {items && items.routes[0].sections[1].id}
                </p>
                <p>
                    {items && items.routes[0].sections[1].transport.mode}
                </p>
                <p>
                    {items && items.routes[0].sections[2].id}
                </p>
                <p>
                    {items && items.routes[0].sections[2].transport.mode}
                </p>
                <p>
                    {items && items.routes[0].sections[2].arrival.time}
                </p>
    */

    const [latitudeA, setlatitudeA] = useState([41.3032, 35.5493, 40.0789, 37.460191, 36.8458, 45.4656])
    const [longitudeA, setlongitudeA] = useState([2.0771, 139.7798, 116.5934, 126.440696, 10.219, -73.7454])
    const activateVol = async () => {
        //const data = await fetch(`https://transit.router.hereapi.com/v8/routes?apiKey=pLZT2rwUsCpXPdLgqbzN6Vz4e_ZOVuNebLlfsm0mqM8&origin=49.009691,2.547925&destination=41.3032,2.0771&maxPerTransport=1`);
        //const items = await data.json();
        //console.log(items)
        //setItems(items)
    }

    return (
        <div>
            <Destinations>
                <h3>Nous proposons differentes destinations <br /> pour découvrir le monde !</h3>
                <Destinationsgroup>
                    <div>
                        <Destinationitem>

                            <div className="barcelona">

                                <div>
                                    <span className="prix">Dès 80€</span>
                                    <span className="nom">Barcelone</span>
                                </div>

                                <button onClick={activateVol()}>voir +</button>
                            </div>
                        </Destinationitem>
                        <Destinationitem>
                            <div className="japon">

                                <div>
                                    <span className="prix">Dès 300€</span>
                                    <span className="nom">Japon</span>
                                </div>

                                <button onClick={activateVol()}>voir +</button>
                            </div>
                        </Destinationitem>
                        <Destinationitem>
                            <div className="pekin">

                                <div>
                                    <span className="prix">Dès 1200€</span>
                                    <span className="nom">Pékin</span>
                                </div>

                                <button onClick={activateVol()}>voir +</button>
                            </div>
                        </Destinationitem>
                        <Destinationitem>
                            <div className="coree">

                                <div>
                                    <span className="prix">Dès 55€</span>
                                    <span className="nom">Corée</span>
                                </div>

                                <button onClick={activateVol()}>voir +</button>
                            </div>
                        </Destinationitem>
                        <Destinationitem>
                            <div className="tunis">

                                <div>
                                    <span className="prix">Dès 90€</span>
                                    <span className="nom">Tunis</span>
                                </div>

                                <button onClick={activateVol()}>voir +</button>
                            </div>
                        </Destinationitem>
                        <Destinationitem>
                            <div className="montreal">

                                <div>
                                    <span className="prix">Dès 65€</span>
                                    <span className="nom">Montréal</span>
                                </div>

                                <button onClick={activateVol()}>voir +</button>
                            </div>
                        </Destinationitem>
                    </div>
                </Destinationsgroup>
                <div className="alaune">
                    <p> depart de à {items && items.routes[0].sections[0].departure.time} pour une arrivee à {items && items.routes[0].sections[items.routes[0].sections.length - 1].arrival.time}</p>
                    <p> mode de transport : {items && items.routes[0].sections[0].type}, {items && items.routes[0].sections[1].transport.mode}, {items && items.routes[0].sections[items.routes[0].sections.length - 1].transport.mode}</p>

                </div>
            </Destinations>

        </div>
    )
}

export default Vol


const Destinations = styled.div`
margin: 0px 20% 0 20%;
text-align:center;
`

const Destinationsgroup = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`

const Destinationitem = styled.div`
color: #373737;
margin: 15px;
position: relative;
flex: 1 0 29%;
background-repeat: no-repeat;
background-size: 100%;
`

