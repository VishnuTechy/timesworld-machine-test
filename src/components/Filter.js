// src/components/Filter.js
import React from 'react';
import { Form } from 'react-bootstrap';

const Filter = ({ region, onRegionChange }) => {
  const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  return (
    <Form.Group controlId="regionFilter" className="mb-4">
      <Form.Label>Filter by Region:</Form.Label>
      <Form.Control
        as="select"
        value={region}
        onChange={(e) => onRegionChange(e.target.value)}
      >
        {regions.map((reg) => (
          <option key={reg} value={reg}>
            {reg}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  );
};

export default Filter;
