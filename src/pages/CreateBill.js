import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import Header from '../Layouts/Header'

export default function CreateBill() {
  return (
    <>
        <Header />
        <Row>
            <Col>
                <div className="d-flex justify-content-center mt-5">
                    <Form className=" bg-secondary p-3 rounded shadow-lg">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="text-light">Item Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Item Name" required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="text-light">Quantity</Form.Label>
                            <Form.Control type="text" placeholder="Enter Quantity" required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPrice">
                            <Form.Label className="text-light">Price/Unit</Form.Label>
                            <Form.Control type="text" placeholder="Enter Price/Unit" required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicAmount">
                            <Form.Label className="text-light">Amount</Form.Label>
                            <Form.Control type="text" placeholder="Enter Amount" required/>
                        </Form.Group>

                        <Button variant="secondary" type="submit" className="btn btn-light">
                            Submit
                        </Button>
                    </Form>
                </div>
            </Col>
        </Row>
        
    </>
  )
}
