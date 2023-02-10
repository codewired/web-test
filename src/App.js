//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useScript } from './hooks/useScript';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


function App() {
  useScript("https://interview-slow-frontend.vercel.synthesis.is/api/messaging");
  const [inputs, setInputs] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    window.Synthesis.event("Wait List", inputs.email)
    console.log(`The Full names are : ${inputs.fullname}`)
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value

    setInputs(values => ({...values, [name]: value}))
  }

  return (
    <div className="NameForm">
      <form onSubmit={handleSubmit}>
        <Form.Group size="lg">
          <Form.Label> Enter Email Address: </Form.Label>
          <Form.Control type="text" name="email" value={inputs.email || ""} onChange={handleChange} />
        </Form.Group>
        <Form.Group size="lg">
          <Form.Label> Enter Full Names: </Form.Label>
          <Form.Control type="text" name="fullname" value={inputs.fullname || ""} onChange={handleChange} />       
        </Form.Group>
        <Button type="submit" size="lg">
          Send Info
        </Button>
      </form>
    </div>
  );
}

export default App;
