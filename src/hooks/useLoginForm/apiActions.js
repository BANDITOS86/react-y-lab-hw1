import { API_LOGIN, answerTypes, messages } from "./constans";

export const loginAction = async (data) => {
  try {
    const response = await fetch(API_LOGIN, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (result.error) {
      return {
        type: answerTypes.error,
        message: messages.wrongCredentials,
        token: null,
      };
    } else {
      return {
        type: answerTypes.succes,
        message: undefined,
        token: result.token,
      };
    }
  } catch (error) {
    return {
      type: answerTypes.error,
      message: messages.networkError,
      token: null,
    };
  }
};
