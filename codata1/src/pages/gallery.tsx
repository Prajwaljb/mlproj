"use client";

import { useState } from 'react';
import Modal from './modal';

const images: string[] = [
  '/images/breathing problem.png',
  '/images/covid yes vs no.png',
  '/images/dbscan.png',
  '/images/dry cough.png',
  '/images/ensemble.png',
  '/images/fever.png',
  '/images/heatmap of all diseases.png',
  '/images/olls.png',
  '/images/rocknn.png',
  '/images/travelab.png',
  // Add more image paths as needed
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      <h1>Visualisation</h1>
      <div className="gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            className="gallery-image"
            onClick={() => openModal(image)}
          />
        ))}
      </div>
      {selectedImage && (
        <Modal image={selectedImage} onClose={closeModal} />
      )}
      <style jsx>{`
        .gallery-container {
          padding: 40px;
          background: url('/images/background.jpg') no-repeat center center;
          background-size: cover; /* Ensure background image covers the container */
          min-height: 100vh;
        }
        h1 {
          text-align: center;
          margin-bottom: 40px;
          font-size: 2.5rem;
          font-weight: bold;
          color: #0033cc; /* Cobalt blue */
        }
        .gallery {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
        }
        .gallery-image {
          width: 250px;
          height: 250px;
          object-fit: cover;
          cursor: pointer;
          transition: transform 0.3s, box-shadow 0.3s;
          border-radius: 8px;
          border: 3px solid #0033cc; /* Cobalt blue border */
        }
        .gallery-image:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.6);
        }
      `}</style>
    </div>
  );
}
