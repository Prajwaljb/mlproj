"use client";

interface ModalProps {
  image: string;
  onClose: () => void;
}

export default function Modal({ image, onClose }: ModalProps) {
  return (
    <div className="modal">
      <div className="modal-content">
        <img src={image} alt="Selected" className="modal-image" />
        <button onClick={onClose} className="close-button">Close</button>
      </div>
      <style jsx>{`
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .modal-content {
          position: relative;
          max-width: 90%;
          max-height: 90%;
          background: #ffffff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }
        .modal-image {
          max-width: 100%;
          max-height: 80vh;
          border-radius: 8px;
        }
        .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          background: #0033cc; /* Cobalt blue background */
          color: white;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
          font-size: 16px;
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          transition: background-color 0.3s;
        }
        .close-button:hover {
          background: #002a8c; /* Darker cobalt blue */
        }
      `}</style>
    </div>
  );
}
