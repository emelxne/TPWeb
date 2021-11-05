import React, { useState} from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Hereapihome from '../Api/hereapi';

function Home() {
    const [depart, setDepart] = useState();
    const [items, setItems] = useState();
    const [adult, setAdult] = useState(1);
    const [enfant, setEnfant] = useState(1);
    const { handleSubmit, register, control, formState: { errors } } = useForm();

    const ChangeAdult = (event) => {
        setAdult(event.target.value)
        console.log(adult);
    }

    const ChangeEnfant = (event) => {
        setEnfant(event.target.value)
        console.log(enfant);
    }

    //const onSubmit = values => console.log(values)
    const onSubmit = data => {
        console.log(data)
        setDepart(data.depart)
    }
    return (
        <div>
            <Destinations>
                <h1>Efreix</h1>
                <h3>" tête en l'air ✈ "</h3>
                <div className="search-form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Formgroup>
                            <div >
                                <label htmlFor="provenance">Ville de provenance </label>
                                <input type="text" name="provenance" placeholder="Paris, Berlin, New York ..." {...register("provenance",
                                    {
                                        required: "Required",
                                        pattern:
                                        {
                                            message: "invalid provenance"
                                        }
                                    })}
                                />
                                {errors.provenance && errors.provenance.message}


                                <label htmlFor="arrivee">Ville d'arrivée</label>
                                <input type="text" name="arrivee" id="arrivee" placeholder="Paris, Berlin, New York ..."{...register("arrivee",
                                    {
                                        required: "Required",
                                        pattern:
                                        {
                                            message: "invalid arrivee"
                                        }
                                    })}
                                />
                                {errors.arivee && errors.arivee.message}
                            </div>
                        </Formgroup>
                        <Formgroup>
                            <div >
                                <label htmlFor="depart">Date de départ </label>
                                <input type="date" name="depart" id="depart" defaultValue={"2021/12/04"} control={control}
                                    {...register("depart",
                                        {
                                            required: "Required",
                                            pattern:
                                            {
                                                message: "invalid arrivee"
                                            }
                                        })}
                                />
                                {errors.depart && errors.depart.message}

                                <label htmlFor="retour">Date de Retour </label>
                                <input type="date" name="retour" id="retour" defaultValue={"2022/02/07"} control={control}
                                    {...register("retour",
                                        {
                                            required: "Required",
                                            pattern:
                                            {
                                                message: "invalid arrivee"
                                            }
                                        })}
                                />
                                {errors.retour && errors.retour.message}
                            </div>
                        </Formgroup>
                        <Formgroup>
                            <div >
                                <label htmlFor="adultes">Nombre d'adultes </label>
                                <select name="adultes" id="adultes" value={adult} onChange={ChangeAdult}>
                                    <option selected="selected" value={0}>0 Adulte</option>
                                    <option value={1}>1 Adulte</option>
                                    <option value={2}>2 Adultes</option>
                                    <option value={3}>3 Adultes</option>
                                    <option value={4}>4 Adultes</option>
                                    <option value={5}>5 Adultes</option>
                                </select>

                                <label htmlFor="enfants">Nombre d'enfants </label>
                                <select name="enfants" id="enfants" value={enfant} onChange={ChangeEnfant}>
                                    <option selected="selected" value={0}>0 Enfant</option>
                                    <option value={1}>1 Enfant</option>
                                    <option value={2}>2 Enfants</option>
                                    <option value={3}>3 Enfants</option>
                                    <option value={4}>4 Enfants</option>
                                    <option value={5}>5 Enfants</option>
                                </select>

                                <label htmlFor="type">Categorie </label>
                                <select name="type" id="type">
                                    <option selected="selected">classe Economique </option>
                                    <option>classe Affaires</option>
                                </select>
                            </div>
                        </Formgroup>
                        <div>
                            <Boutton>
                                <button type="submit" value="Lancer la recherche" name="recherche" id="recherche"> lancer la recherche </button>
                            </Boutton>
                        </div>
                    </form>
                </div>
                <Hereapihome />
            </Destinations>
        </div>
    )
}

export default Home

const Boutton = styled.div`
border: none;
color: #DBDBD9;
font-size: 25px;
margin-top: 15px;
`

const Destinations = styled.div`
margin: 0px 20% 0 20%;
text-align:center;
`

const Formgroup = styled.div`
color: #75573B;
display: flex;
justify-content: center;
flex-direction: row;
margin: 10px;
`
