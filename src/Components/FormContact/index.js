import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './form.scss';

const FormContact = () => {
    return (
        <Form className="form">
            <h4 className="text-center mb-4" style={{color: "white"}}>Sinon, remplissez le formulaire suivant</h4>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Votre Nom</Form.Label>
                <Form.Control type="input" placeholder="Mr Smith" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Votre Email</Form.Label>
                <Form.Control type="email" placeholder="smith@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Votre Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <div className="btn">
            <Button Button className="button-form" variant="outline-primary">Envoyer</Button>
            </div>
        </Form>
    )
}

export default FormContact; 