//React, ReactDOM
import {Fragment} from "react";
import {createPortal} from "react-dom";
//Styles
import styles from './Modal.module.css'

//Component
const Backdrop = (prop) => {
    return <div className={styles.backdrop} onClick={prop.onClose}></div>
}

const ModalOverlay = (prop) => {
    return <div className={styles.modal}>
        <div className={styles.content}>
            {prop.children}
        </div>
    </div>
}

export const Modal = (prop) => {
     return <Fragment>
         {createPortal(<Backdrop onClose={prop.onClose}/>,
         document.getElementById('modal-root'))}
         {createPortal(<ModalOverlay>{prop.children}</ModalOverlay>,
         document.getElementById('modal-root'))}
     </Fragment>
}