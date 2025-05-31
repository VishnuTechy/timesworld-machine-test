import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup
} from 'react-bootstrap';
import './Login.css'; // for custom styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validatePassword = (pwd) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return regex.test(pwd);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('All fields are required');
      return;
    }

    if (!validatePassword(password)) {
      setError(
        'Password must be at least 8 characters, include 1 capital letter, 1 number, and 1 symbol.'
      );
      return;
    }

    // Simulate login
    setError('');
    navigate('/home');
  };

  return (
    <Container fluid className="login-container">
      <Row className="min-vh-100">
        <Col md={6} className="d-flex align-items-center justify-content-center">
          <div className="login-form">
            <h2 className="mb-3 fw-bold">Sign In</h2>
            <p>
              New user?{' '}
              <span className="text-primary" style={{ cursor: 'pointer' }}>
                Create an account
              </span>
            </p>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Username or email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3 d-flex align-items-center">
                <Form.Check
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="me-2"
                />
                <Form.Label htmlFor="remember" className="mb-0">
                  Keep me signed in
                </Form.Label>
              </Form.Group>

              {error && <p className="text-danger">{error}</p>}

              <Button type="submit" className="w-100" variant="dark">
                Sign In
              </Button>
            </Form>

            <div className="divider my-4 text-center">
              <span className="text-muted">Or Sign In With</span>
            </div>

            <div className="d-flex justify-content-center gap-3 social-icons">
              <span className="icon-circle">G</span>
              <span className="icon-circle">f</span>
              <span className="icon-circle">in</span>
              <span className="icon-circle">t</span>
            </div>
          </div>
        </Col>

        <Col
          md={6}
          className="d-none d-md-flex align-items-center justify-content-center bg-light"
        >
          <img
            src="https://www.figma.com/design/tlDhpxrsaByrWlURwcSSLZ/Machine-Test?node-id=1-224&t=MKJaypkH8XQ2jIaT-4"
            alt="Login Illustration"
            className="img-fluid"
            style={{ maxHeight: '70%' }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
