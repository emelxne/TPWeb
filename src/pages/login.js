import { Form, Button, Card, Alert } from 'react-bootstrap'
import React, { useRef } from 'react'
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { useState } from 'react'

export default function Signup(){

    const emailRef=useRef()
    const mdpRef=useRef()
    const mdpCheckRef=useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    // on vérifie que les mdp sont égaux, sinon erreur
    async function handleSubmit(e) {
        e.preventDefault()

        if (mdpRef.current.value !== mdpCheckRef.current.value){
            return setError("Les mots de passe sont différents")
        }
        try {
            setError ("")
            setLoading(true)
            await signup(emailRef.current.value, mdpRef.current.value)
        } catch {
            setError("création de compte impossible")
        }
        setLoading(false)
      }

//on importe un évènement 


    return(
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb_4"> Sign Up</h2>
                    {error && <Alert variant = "danger">{error} </Alert>}
                    <Form onSubmit = {handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>
                                Email
                            </Form.Label>
                            <Form.Control type="email" ref ={emailRef} required>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group id="mdp">
                            <Form.Label>
                                Mot de passe
                            </Form.Label>
                            <Form.Control type="mdp" ref ={mdpRef} required>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group id="confirmation">
                            <Form.Label>
                                Confirmation du mot de passe
                            </Form.Label>
                            <Form.Control type="mdp" ref ={mdpCheckRef} required>
                            </Form.Control>
                        </Form.Group>
                        <Button className="w-100 mt-4 mb-4" type="inscrire">
                            S'inscrire
                        </Button>
                        <Button disabled={loading} className="w-100" type="connecter">
                            Se Connecter
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Vous avez déjà un compte ? Log In
            </div>
        </>
    )
}
