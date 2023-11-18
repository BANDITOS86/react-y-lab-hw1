import { useState } from "react";
import { useForm } from "react-hook-form";
import { loginAction } from "./apiActions";
import { TIME_HIDE_SUCCESS, answerTypes } from "./constans";

const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [authError, setAuthError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSucces = () => {
    setAuthError(null);
    reset();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
    }, TIME_HIDE_SUCCESS);
  };

  const onSubmit = async (data) => {
    const response = await loginAction(data);
    
    if (response.type === answerTypes.succes) {
      onSucces();
      console.log(response.token); // выводим token для примера
    } else {
      setAuthError(response.message);
      console.log(response.message); // выводим error для примера
    }
  };

  return { handleSubmit: handleSubmit(onSubmit), register, errors, authError, isSuccess };
};

export default useLoginForm;
