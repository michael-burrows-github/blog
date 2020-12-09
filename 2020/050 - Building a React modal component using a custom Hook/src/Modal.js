import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ visible, toggle }) => visible ? ReactDOM.createPortal(
  <div className="modal">
    <div className="modal-pop" role="dialog" aria-modal="true">
      <h3>Hello World</h3>
      <p>Et sit saepe velit tenetur et consequatur in. Nihil doloribus nulla nulla rem. Soluta illo et asperiores numquam earum nesciunt. Vero odio voluptatem sunt sunt laboriosam.</p>
      <button type="button" onClick={toggle}>Close</button>
    </div>  
    <div className="modal-overlay"></div>    
  </div>, document.body
) : null;

export default Modal;