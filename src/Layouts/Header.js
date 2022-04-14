import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import '../css/common.css'

export default function Header() {
  return (
    <>
        <div className="p-3" style={{backgroundColor:"#17202A"}}>{/* 
            <div className="container"> */}
                <Row>
                    <Col className="text-white" md={6} sm={4} xs={4}>
                        <Image className="text-center mt-3" width="120"src={require('../img/header.png')} alt={"Image Not Found"}/>
                    </Col>
                    <Col className="text-white d-flex justify-content-end k_fontfamily" md={6} sm={8} xs={8}>
                        <div>
                            <h5 className="fw-bolder lh-1 k_fontfamily k_color text-end">KKR SOLUTION MALHARGARH</h5>
                            <h6 className="ms-5 lh-1 k_fontfamily k_color text-end">Ward No 13 Char Bhuja Marg Malhargarh </h6>
                            <h6 className="ms-5 lh-1 k_fontfamily k_color text-end">Dist : Mandsaur Pin - 458339</h6>
                            <h6 className="ms-5 lh-1 k_fontfamily k_color text-end">Phone no.: 9300308230 </h6>
                            <h6 className="ms-5 lh-1 k_fontfamily k_color text-end">Email: malhargarh1@gmail.com </h6>
                            <h6 className="ms-5 lh-1 k_fontfamily k_color text-end">State: 23-Madhya Pradesh</h6>
                        </div>
                    </Col>
                </Row>{/* 
            </div> */}
        </div>
    </>
  )
}
