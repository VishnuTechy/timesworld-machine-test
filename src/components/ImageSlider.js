// src/components/ImageSlider.js
import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ImageSlider = () => {
  return (
    <Row className="mb-4">
      <Col md={8} sm={12} className="mb-3 mb-md-0">
        <div
          style={{
            backgroundColor: '#e0e0e0',
            height: '280px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '8px',
          }}
        >
          <span style={{ color: '#3D3D3D', fontSize: '1.25rem' }}>Image</span>
        </div>
      </Col>
      <Col md={4} sm={12}>
        <div
          style={{
            backgroundColor: '#e0e0e0',
            height: '280px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '8px',
          }}
        >
          <span style={{ color: '#3D3D3D', fontSize: '1.25rem' }}>Frame</span>
        </div>
      </Col>
    </Row>
  );
};

export default ImageSlider;
