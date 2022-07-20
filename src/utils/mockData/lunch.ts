import {v4 as uuid} from 'uuid';
import { IMenuItem } from "../interfaces/lunch.interface";

export const MENU_LIST: IMenuItem[] = [
  {
    menuItem_id: uuid(),
    name: 'Biryani',
    available: true,
    quantity: 0,
    price: 170,
    category: 'Main Course',
  },
  {
    menuItem_id: uuid(),
    name: 'Pulao',
    available: true,
    quantity: 0,
    price: 170,
    category: 'Main Course',
  },
];