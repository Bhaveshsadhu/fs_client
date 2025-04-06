import { useState } from "react";

const handleOnChange = ({ e, form, setForm }) => {
  const { name, value } = e.target;
  setForm({
    ...form,
    [name]: value,
  });
};
const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);
  // console.log(form);
  return {
    form,
    setForm,
    handleOnChange: (e) => handleOnChange({ e, form, setForm }),
    // handleOnChange: function (e) {
    //   return handleOnChange({ e, form, setForm });
    // },
  };
};
export default useForm;
