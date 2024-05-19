import { useContext } from "react";
import Modal from "react-modal";
import { SignupContext } from "../../contexts/SignupContext";

Modal.setAppElement("#root"); // Esto es necesario para la accesibilidad

function SignupErrorModal() {
  const { signupData } = useContext(SignupContext);

  return (
    <Modal
      isOpen={!!signupData}
      onRequestClose={() => {}}
      contentLabel="Registro exitoso"
    >
      <div>
        <h1>Sistema de carga de datos</h1>
        <div>
          <p>Los datos se han registrado correctamente</p>
        </div>
        <p>Los datos se han registrado correctamente</p>
        <button>Cerrar</button>
      </div>
    </Modal>
  );
}

export default SignupErrorModal;
