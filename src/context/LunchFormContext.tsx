import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import update from "immutability-helper";
import { v4 as uuid } from "uuid";
// * FUNCS IMPORT
import useValidation from "../utils/hooks/useValidation";
// * UTILS
import { ILunch, IMenuItem } from "../utils/interfaces/lunch.interface";
import { MENU_LIST } from "../utils/mockData/lunch";
import { paths } from "../routes/paths";

export interface IFormValues {
  [k: string]: string | number | null | Date | boolean | undefined;
  author: string;
  title: string;
  borrowed_by: string;
  date_of_borrow: string | null | Date;
  expected_date_of_return: string | null | Date;
  available: boolean;
}

export interface IFormErrors {
  title: string;
  author: string;
  borrowed_by: string;
  date_of_borrow: string;
  expected_date_of_return: string;
}

interface ILunchFormContextState {
  lunchData: ILunch | null;
  menuItem: IMenuItem | null;
  menuList: IMenuItem[] | null;
  isLoading: boolean;
  // values: IFormValues;
  errors: IFormErrors;
  resetForm: () => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDateInputChange: (
    newValue: Date | string | null | undefined,
    name: string
  ) => void;
  getLunchList: () => void;
  addLunch: () => void;
  getLunch: (id: string) => void;
  updateLunch: (id: string) => void;
  deleteLunch: (id: string | undefined) => void;
  decrementQuantity: (menuItemId: string) => void;
  incrementQuantity: (menuItemId: string) => void;
  handleFormSubmit: (formType: "Add" | "Edit", id: string | undefined) => void;
}

const defaultState: ILunchFormContextState = {
  isLoading: false,
  menuItem: null,
  menuList: MENU_LIST,
  lunchData: null,
  // values: {
  //   // lunch_id: "",
  //   // title: "",
  //   // author: "",
  //   // borrowed_by: "",
  //   // date_of_borrow: null,
  //   // expected_date_of_return: null,
  //   // available: false,
  // },

  errors: {
    title: "",
    author: "",
    borrowed_by: "",
    date_of_borrow: "",
    expected_date_of_return: "",
  },
  resetForm: () => {},
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
  handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
  handleDateInputChange: (
    newValue: Date | string | null | undefined,
    name: string
  ) => {},
  getLunchList: async () => {},
  addLunch: async () => {},
  getLunch: async (id: string) => {},
  updateLunch: async (id: string) => {},
  deleteLunch: async (id: string | undefined) => {},
  decrementQuantity: (menuItemId: string) => {},
  incrementQuantity: (menuItemId: string) => {},
  handleFormSubmit: (formType: "Add" | "Edit", id: string | undefined) => {},
};

export const LunchFormContext =
  createContext<ILunchFormContextState>(defaultState);

export const LunchFormContextProvider: React.FC<
  React.PropsWithChildren<{}>
> = ({ children }) => {
  const navigate = useNavigate();

  // const [values, setValues] = useState<IFormValues>(defaultState.values);
  const [lunchData, setLunchData] = useState<ILunch | null>(
    defaultState.lunchData
  );
  const [lunchList, setLunchList] = useState<ILunch[] | null>(null);
  const [menuItem, setMenuItem] = useState<IMenuItem | null>(
    defaultState.menuItem
  );
  const [menuList, setMenuList] = useState<IMenuItem[] | null>(
    defaultState.menuList
  );
  const { errors, validate } = useValidation(defaultState.errors);
  const [isLoading, setIsLoading] = useState(defaultState.isLoading);

  //* to handle Input Change
  //* @param e: React.ChangeEvent<HTMLInputElement> - event
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // setValues({
    //   ...values,
    //   [name]: value,
    // });
    // validate({ [name]: value });
  };

  //* to handle Checkbox Change
  //* @param e: React.ChangeEvent<HTMLInputElement> - event
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    // setValues({
    //   ...values,
    //   [name]: checked,
    // });
  };

  //* to handle Date Input Change
  //* @param newValue: Date | string | null - new value
  //* @param name: string - name of the field
  const handleDateInputChange = (
    newValue: Date | string | null | undefined,
    name: string
  ) => {
    if (newValue) {
      // const newItems = { ...values };
      // newItems[name] = newValue;
      // setValues(newItems);
    }
  };

  const decrementQuantity = (menuItemId: string) => {
    if (menuList) {
      const index = menuList.findIndex(
        (menuItem: IMenuItem) => menuItem.menuItem_id === menuItemId
      );
      const updatedMenuList = [...menuList];
      if (updatedMenuList[index].quantity > 0) {
        updatedMenuList[index].quantity = updatedMenuList[index].quantity - 1;
        setMenuList(updatedMenuList);
      }
    }
  };

  const incrementQuantity = (menuItemId: string) => {
    if (menuList) {
      const index = menuList.findIndex(
        (menuItem: IMenuItem) => menuItem.menuItem_id === menuItemId
      );
      const updatedMenuList = [...menuList];
      updatedMenuList[index].quantity = updatedMenuList[index].quantity + 1;
      setMenuList(updatedMenuList);
    }
  };

  //* to reset the form
  const resetForm = () => {
    // setValues(defaultState.values);
  };

  const getLunchList = async () => {
    // setIsLoading(true);
    // setTimeout(() => {
    //   if (lunchList === null || lunchList.length === 0) {
    //     setLunchList(LUNCH_LIST);
    //   }
    //   setIsLoading(false);
    // }, 1000);
  };

  const getLunch = async (id: string) => {
    // setIsLoading(true);
    // let lunch: ILunch | undefined;
    // setTimeout(() => {
    // //   if (lunchList !== null) {
    // //     lunch = lunchList.find((lunch) => lunch.lunch_id === id);
    // //   } else {
    // //     lunch = LUNCH_LIST.find((lunch) => lunch.lunch_id === id);
    // //   }
    // //   setIsLoading(false);
    // //   if (lunch !== undefined) {
    // //     setLunchData(lunch);
    // //     const newValue = {
    // //       // author: lunch.author,
    // //       // borrowed_by: lunch.borrowed_by,
    // //       // date_of_borrow: lunch.date_of_borrow,
    // //       // expected_date_of_return: lunch.expected_date_of_return,
    // //       // available: lunch.available,
    // //     };
    // //     console.log('lunch', lunch);
    // //     // setValues(previousValues => {
    // //     //   return {
    // //     //     ...newValue,
    // //     //   };
    // //     // });
    // //   }
    // }, 1000);
  };

  const addLunch = async () => {
    // // setIsLoading(true);
    // setTimeout(() => {
    //   // setIsLoading(false);
    //   // const newValue: ILunch = {
    //   //   lunch_id: uuid(),
    //   //   title: values.title,
    //   //   author: values.author,
    //   //   borrowed_by: values.borrowed_by,
    //   //   date_of_borrow:
    //   //     values.date_of_borrow !== null ? values.date_of_borrow : null,
    //   //   expected_date_of_return:
    //   //     values.expected_date_of_return !== null
    //   //       ? values.expected_date_of_return
    //   //       : null,
    //   //   available: values.available,
    //   // };
    //   // if (lunchList) {
    //   //   setLunchList([...lunchList, newValue]);
    //   //   navigate(paths.lunch);
    //   // }
    // }, 1000);
  };

  const updateLunch = async (id: string) => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      // const updatedLunch: ILunch = {
      //   lunch_id: id,
      //   title: values.title,
      //   author: values.author,
      //   borrowed_by: values.borrowed_by,
      //   date_of_borrow:
      //     values.date_of_borrow !== null ? values.date_of_borrow : null,
      //   expected_date_of_return:
      //     values.expected_date_of_return !== null
      //       ? values.expected_date_of_return
      //       : null,
      //   available: values.available,
      // };

      // let index: number;
      // if (lunchList !== null) {
      //   index = lunchList.findIndex((lunch) => lunch.lunch_id === id);
      // } else {
      //   index = LUNCH_LIST.findIndex((lunch) => lunch.lunch_id === id);
      // }

      // const updatedLunchList = update(lunchList, {
      //   $splice: [[index, 1, updatedLunch]],
      // });

      // setLunchList(updatedLunchList);
      navigate(paths.lunchDetails + id);
    }, 1000);
  };

  const deleteLunch = async (id: string | undefined) => {
    // setIsLoading(true);
    // setTimeout(() => {
    //   setIsLoading(false);
    //   let index: number;
    //   if (lunchList !== null) {
    //     index = lunchList.findIndex((lunch) => lunch.lunch_id === id);
    //   } else {
    //     index = LUNCH_LIST.findIndex((lunch) => lunch.lunch_id === id);
    //   }
    //   let updateLunchList;
    //   if (lunchList !== null) {
    //     updateLunchList = [...lunchList];
    //   } else {
    //     updateLunchList = [...LUNCH_LIST];
    //   }
    //   if (index > -1) {
    //     updateLunchList.splice(index, 1); // * 2nd parameter means remove one item only
    //   }
    //   setLunchList(updateLunchList);
    //   // * navigate to the listing page
    //   navigate(paths.lunch);
    // }, 1000);
  };

  const handleFormSubmit = (
    formType: "Add" | "Edit",
    id: string | undefined
  ) => {
    // if (formType === "Add") {
    //   addLunch();
    // } else {
    //   if (id) {
    //     updateLunch(id);
    //   }
    // }
  };

  // useEffect(() => {

  //   console.log("values", values);
  // }, [values]);

  const formContextData = {
    // values,
    errors,
    isLoading,
    addLunch,
    getLunchList,
    getLunch,
    updateLunch,
    deleteLunch,
    lunchData,
    lunchList,
    menuItem,
    menuList,
    incrementQuantity,
    decrementQuantity,
    handleInputChange,
    resetForm,
    handleFormSubmit,
    handleCheckboxChange,
    handleDateInputChange,
  };

  return (
    <LunchFormContext.Provider value={formContextData}>
      {children}
    </LunchFormContext.Provider>
  );
};

export default LunchFormContextProvider;
