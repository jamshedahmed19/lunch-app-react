import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
// * FUNCS IMPORT
import useValidation from "../utils/hooks/useValidation";
// * UTILS
import { paths } from "../routes/paths";
import { USERS_LIST } from "../utils/mockData/usersList";
import { IUser } from "../utils/interfaces/user.interface";

export interface IFormValues {
  [k: string]: string | number | boolean;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  isLoggedIn: boolean;
}

export interface IFormErrors {}

interface IAuthContextState {
  user: IUser | null;
  isLoading: boolean;
  values: IFormValues;
  resetForm: () => void;
  getToLogin: () => void;
  getToHome: () => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFormSubmit: () => void;
}

const defaultState: IAuthContextState = {
  user: {
    first_name: "",
    last_name: "",
    email: "",
    isLoggedIn: true,
  },
  isLoading: false,
  values: {
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    isLoggedIn: false,
  },
  resetForm: () => {},
  getToLogin: () => {},
  getToHome: () => {},
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
  handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
  handleFormSubmit: () => {},
};

export const AuthContext = createContext<IAuthContextState>(defaultState);

export const AuthContextProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser | null>(defaultState.user);
  const { validate } = useValidation(defaultState.values);
  const [values, setValues] = useState<IFormValues>(defaultState.values);

  const [isLoading, setIsLoading] = useState(defaultState.isLoading);

  const getToLogin = () => {
    navigate(paths.login);
  };
  const getToHome = () => {
    navigate(paths.dashboard);
  };

  //* to handle Input Change
  //* @param e: React.ChangeEvent<HTMLInputElement> - event
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
    validate({ [name]: value });
  };

  //* to handle Checkbox Change
  //* @param e: React.ChangeEvent<HTMLInputElement> - event
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    setValues({
      ...values,
      [name]: checked,
    });
  };

  //* to reset the form
  const resetForm = () => {};

  const handleFormSubmit = () => {};

  const formContextData = {
    user,
    isLoading,
    getToHome,
    getToLogin,
    values,
    handleInputChange,
    resetForm,
    handleFormSubmit,
    handleCheckboxChange,
  };

  return (
    <AuthContext.Provider value={formContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
