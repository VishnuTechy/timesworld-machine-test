// src/components/ImageSlider.js
import React from 'react';
import { Carousel } from 'react-bootstrap';

const ImageSlider = () => {
  const slides = [
    {
      id: 1,
      label: "Slide 1",
      imageUrl: "https://dummyimage.com/800x280/3d3d3d/3d3d3d" // hide text
    },
    {
      id: 2,
      label: "Slide 2",
      imageUrl: "https://dummyimage.com/800x280/3d3d3d/3d3d3d"
    },
    {
      id: 3,
      label: "Slide 3",
      imageUrl: "https://dummyimage.com/800x280/3d3d3d/3d3d3d"
    }
  ];

  return (
    <Carousel indicators={true} nextLabel="" prevLabel="">
      {slides.map((slide) => (
        <Carousel.Item key={slide.id}>
          <div style={{ position: 'relative' }}>
            <img
              src={slide.imageUrl}
              alt={slide.label}
              className="d-block w-100"
              style={{
                borderRadius: '8px',
                objectFit: 'cover',
                height: '280px',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: '#ffffff',
                fontSize: '0.9rem',
                fontWeight: 'bold',
              }}
            >
              {slide.label}
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageSlider;
