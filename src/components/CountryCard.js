// src/components/CountryCard.js
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const CountryCard = ({ country }) => {
  return (
    <Card className="p-2 shadow-sm border mb-2">
      <Row className="align-items-center g-0">
        <Col xs={4}>
          <div
            style={{
              backgroundColor: '#e0e0e0',
              height: '80px',
              width: '70%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              borderRadius: '4px',
            }}
          >
            <img
              src={country.flag || 'https://via.placeholder.com/80x50'}
              alt={country.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        </Col>
        <Col xs={8}>
          <div style={{ paddingLeft: '10px' }}>
            <h6 className="mb-1">{country.name}</h6>
            <p className="mb-0 text-muted" style={{ fontSize: '0.85rem' }}>
              {country.region}
            </p>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default CountryCard;
