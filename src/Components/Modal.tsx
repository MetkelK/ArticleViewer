import React, { useState, useEffect } from "react";

const Modal = ({ children, setSearch, search }: any) => {
  const [open, setOpen] = useState<boolean | false>(false);

  const handleClose = (e: any) => {
    if (
      e.target.classList.contains("modal") ||
      e.target.classList.contains("close")
    ) {
      setOpen(false);
      setSearch(false);
      console.log(e);
    }
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
      <div className="modal" onClick={handleClose}>
        <div className="modal-content">
          <button className="close" onClick={handleClose}>
            <span aria-hidden="true">&times;</span>
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
