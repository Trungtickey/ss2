import React from "react";
import { AlertCircle } from "lucide-react";
import "";

const Bai5: React.FC = () => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="icon-wrapper">
          <AlertCircle size={24} color="#e11d48" />
        </div>
        <h2>Delete blog post</h2>
        <p>
          Are you sure you want to delete this post? This action cannot be
          undone.
        </p>
        <div className="button-group">
          <button className="cancel-button">Cancel</button>
          <button className="delete-button">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Bai5;