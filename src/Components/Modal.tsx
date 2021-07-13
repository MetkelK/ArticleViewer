import React, { useState, useEffect } from "react";

const Modal = ({ children, setSearch, search }: any) => {
  const [open, setOpen] = useState<boolean | false>(false);

  const handleClose = () => {
    setOpen(false);
    setSearch(false);
  };

  useEffect(() => {
    if (search) {
      setOpen(true);
      document.body.style.overflow = "hidden";
    } else {
      setOpen(false);
      document.body.style.overflow = "scroll";
    }
  }, [search]);

  if (open) {
    return (
      <div className="modal">
        <div className="modal-content">
          <button className="close" onClick={handleClose}>
            &times;
          </button>
          {children}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Modal;
