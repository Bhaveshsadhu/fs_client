import { createContext, useContext, useState } from "react";
import { getAllTranscation } from "../../axioHelper/axioHelper";
import { toast } from "react-toastify";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [transcations, setTranscations] = useState([]);
  const [show, setShow] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);


  const toggleModal = (value) => setShow(value);
  const getUsersTranscations = async () => {
    try {
      const token = localStorage.getItem("accessJWT");
      const allTranscations = await getAllTranscation(token);
      if (allTranscations?.status === "success") {
        setTranscations(allTranscations.result);
      } else {
        toast.error("Error while fetching transactions");
      }
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        transcations,
        getUsersTranscations,
        show,
        toggleModal,
        isSubmitting,
        setIsSubmitting
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => useContext(UserContext);
