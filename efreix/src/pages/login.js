import { Form, Button, Card } from 'react-bootstrap'
import React, { useRef } from 'react'
//import { useAuth } from "../contexts/AuthContext"
//import { Link, useHistory } from "react-router-dom"

export default function Signup(){

    const emailRef=useRef()
    const mdpRef=useRef()
    const mdpCheckRef=useRef()
   /* const { signup } = useAuth()

    async function handleSubmit(e) {
        e.preventDefault()
    
        signup(emailRef.current.value, mdpRef.current.value)
      }
*/
//on importe un évènement 


    return(
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb_4"> Sign Up</h2>
                    <Form>
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
                        <Button className="w-100" type="connecter">
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
