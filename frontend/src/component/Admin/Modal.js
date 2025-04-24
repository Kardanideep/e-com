// Modal.jsx
import "./modal.css"; // add styling here if you want

export default function Modal({ product, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>{product.name}</h2>
        <p><strong>ID:</strong> {product._id}</p>
        <p><strong>Price:</strong> ₹{product.price}</p>
        <p><strong>Stock:</strong> {product.stock}</p>
        <p><strong>Description:</strong> {product.description}</p>
      </div>
    </div>
  );
}
