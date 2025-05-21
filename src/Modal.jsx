import React, { useEffect } from "react";
import "./Modal.css";

/**
 * Modal component
 * @param {boolean} isOpen - whether the modal is open
 * @param {function} onClose - function to call when modal should close
 * @param {boolean} [closeOnOverlayClick=true] - whether clicking outside closes modal
 * @param {boolean} [closeOnEscape=true] - whether pressing Escape closes modal
 * @param {boolean} [showCloseButton=true] - whether to show the "×" button
 * @param {ReactNode} children - modal content
 */
export default function Modal({
  isOpen,
  onClose,
  children,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  showCloseButton = true,
}) {
  useEffect(() => {
    if (!isOpen || !closeOnEscape) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeOnEscape, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={closeOnOverlayClick ? onClose : undefined}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {showCloseButton && (
          <button
            onClick={onClose}
            className="modal-close"
            aria-label="Close modal"
          >
            ×
          </button>
        )}
        {children}
      </div>
    </div>
  );
}
