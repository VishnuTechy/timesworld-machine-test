// CountryList.js
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CountryCard from './CountryCard';

const CountryList = ({ countries }) => {
  return (
    <Row>
      {countries.map((country) => (
        <Col key={country.name} xs={12} sm={6} className="mb-4">
          <CountryCard country={country} />
        </Col>
      ))}
    </Row>
  );
};

export default CountryList;
