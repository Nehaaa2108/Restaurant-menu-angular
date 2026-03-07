import { MenuItem } from "./menu-item.model";

export interface Order {
  id:number;
  items:MenuItem[];
  total:number;
  customerName:string;
  address:string;
  payment:string;
}