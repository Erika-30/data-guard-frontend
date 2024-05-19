import { useContext, useState, useEffect } from "react";
import Modal from "react-modal";
import { SignupContext } from "../../../../contexts/SignupContext";
import styles from "./SuccessModal.module.css";
import { useNavigate } from "react-router-dom";

Modal.setAppElement("#root");

function SignupSuccessModal() {
  const navigate = useNavigate();
  const { signupData, resetSignupState } = useContext(SignupContext);
  const [isOpen, setIsOpen] = useState(!!signupData);

  useEffect(() => {
    setIsOpen(!!signupData);
  }, [signupData]);

  const handleClose = () => {
    setIsOpen(false);
    resetSignupState();
    navigate("/login");
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel="Registro exitoso"
      className={styles.modalContent}
    >
      <div>
        <h2 className={styles.modalHeader}>Registro exitoso</h2>
        <p className={styles.modalBody}>
          Los datos se han registrado correctamente
        </p>
        <button onClick={handleClose} className={styles.modalButton}>
          Cerrar
        </button>
      </div>
    </Modal>
  );
}

export default SignupSuccessModal;
