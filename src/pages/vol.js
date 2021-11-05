import React from "react";
import styled from "styled-components";
import Hereapivol from '../Api/hereapi'; 
import '../../src/components/vol.css';

function Vol() {
    
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

                                <button onClick={Hereapivol(0)}>voir +</button>
                            </div>
                        </Destinationitem>
                        <Destinationitem>
                            <div className="italie">

                                <div>
                                    <span className="prix">Dès 90€</span>
                                    <span className="nom">Italie</span>
                                </div>

                                <button onClick={Hereapivol(1)}>voir +</button>
                            </div>
                        </Destinationitem>
                    </div>
                </Destinationsgroup>
                <Hereapivol/>
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

