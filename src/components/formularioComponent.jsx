import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

const FormularioComponent = (props) => {
    
    const [mensaje, setMensaje] = useState("");
    const [size, setSize] = useState("200")

    const readDatos = () => {
      if (size != "size")
      props.ReturnDatos(size, mensaje);
  };

  const handleMessage = (event) => {
    setMensaje(event.target.value);
    console.log(mensaje)

  }

  const handleSize = (event) =>{
    setSize(event)
  }


  return (
    <>
    <Container>
    <Row className="justify-content-md-center">
    <Form.Label htmlFor="txtMensaje"> Escribe el texto a convertir</Form.Label>
      <Form.Control 
        id="txtMensaje"
        aria-describedby="passwordHelpBlock"
        placeholder="Escribe el mensaje"
        onChange = {handleMessage}
      />
    </Row>
    <Row className="justify-content-md-center">
    <Form.Label htmlFor="txtTamano"> Elige el tamano que quieres el QR</Form.Label>


    <DropdownButton
      title={ `${size} x ${size}`}
      id="dropdown-menu-align-right"
      onSelect={handleSize}
      value={size}
      
        >
              <Dropdown.Item eventKey = "200">200x200 </Dropdown.Item>
              <Dropdown.Item eventKey = "300">300X300 </Dropdown.Item>
              <Dropdown.Item eventKey = "500">500x500 </Dropdown.Item>
      </DropdownButton>

    </Row>
    <br></br>
    <Row className="justify-content-md-center">
    <Button bg="primary"  onClick={() => readDatos()}>
        Click
      </Button>
    </Row>
    </Container>
    </>
  );
};

export default FormularioComponent;
