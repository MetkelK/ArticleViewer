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
    } else {
      setOpen(false);
    }
  }, [search]);

  if (open) {
    return (
      <div className="modal">
        <div className="modal-content">
          <button onClick={handleClose}>&times;</button>
          {children}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Modal;
