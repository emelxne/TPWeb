import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Signup() {
  const emailRef = useRef()
  const mdpRef = useRef()
  const mdpConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (mdpRef.current.value !== mdpConfirmRef.current.value) {
      return setError("Les mots de passe sont différents")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, mdpRef.current.value)
      history.push("/")
    } catch {
      setError("Impossible de créer un compte")
    }

    setLoading(false)
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control type="password" ref={mdpRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Confirmation du mot de passe</Form.Label>
              <Form.Control className="mb-4" type="password" ref={mdpConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              S'inscrire
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Vous avez déjà un compte ? <Link to="/login">Se connecter</Link>
      </div>
    </>
  )
}