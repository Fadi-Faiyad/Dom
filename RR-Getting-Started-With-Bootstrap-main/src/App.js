import './App.css';


function App() {
  return (
    <div className="App">
      <nav
      activeKey ='/home'
      onSelect={key => alert(`Selected nav element is ${key}`)}
      >
        <Nav.Item>
        <Nav.Item href = '/home'>Home</Nav.Item>
        </Nav.Item>

        <Nav.Item>
        <Nav.Item eventKey = 'link-1'>link-1</Nav.Item>
        </Nav.Item>

        <Nav.Item>
        <Nav.Item evenKey = 'link-2'>link-2</Nav.Item>
        </Nav.Item>

      <form>
        <Form.Group controlId ='formBasicEmail'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control type ="email" placeHolder='enter ' />
          <Form.Text className ='Text-muted'>
            We Still all
          </Form.Text>
        </Form.Group>

      <Form.Group controlId="formBasicCheckbox">
        <Form.Label>Passowred</Form.Label>
        <Form.Control type='password' placeHolder='Password' />
      </Form.Group>
      
      <Form.Group controlId='formBasicCheckbox'>
        <Form.Check type='checkBox' label='rember' />
      </Form.Group>
      


      </form>

      </nav>
    </div>
  );
}

export default App;
