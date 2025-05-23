import Modal from "react-bootstrap/Modal";
import { useUser } from "../context/UserContext";
export const CustomeModal = ({ children }) => {
  const { show, toggleModal } = useUser();
  return (
    <Modal
      show={show}
      
      onHide={() => toggleModal(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};
