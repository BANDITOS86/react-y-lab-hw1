import { useState } from "react";
import { useForm } from "react-hook-form";

const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [authError, setAuthError] = useState(null);

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.error) {
        setAuthError(
          "Неверный email или пароль. Пожалуйста, попробуйте снова."
        );
      } else {
        setAuthError(null);
        reset();
      }

      console.log(result);
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  return { handleSubmit: handleSubmit(onSubmit), register, errors, authError };
};

export default useLoginForm;
