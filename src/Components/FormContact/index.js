import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './form.scss'


const FormContact = (props) => {

    return (
        <Form className="form">
            <h4 className="text-center mb-4" style={{color: "white"}}>Sinon, remplissez le formulaire suivant</h4>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label id="not-name">Votre Prénom</Form.Label>
                <Form.Control 
                    type="input" 
                    as="input"
                    placeholder="Mr Smith" 
                    onChange={e => props.setName(e.target.value)}
                    value={props.name}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label id="not-email">Votre email</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="smith@example.com" 
                    onChange={e => props.setEmail(e.target.value)}
                    value={props.email}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label id="not-message">Votre Message</Form.Label>
                <Form.Control 
                    as="textarea" 
                    rows={3} 
                    onChange={e => props.setMessage(e.target.value)}
                    value={props.message}
                />
            </Form.Group>
            <div className="btn">
            <Button onClick={props.submit} className="button-form" variant="outline-primary">Envoyer</Button>
            </div>  
        </Form>
    )
}

export default FormContact; 
