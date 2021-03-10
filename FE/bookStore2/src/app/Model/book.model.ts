import { TypeBook } from './typeBook.model';

export class Book{
  id: number;
  name: string;
  image: string;
  description: string;
  nbx: string;
  quantity: number;
  price: number;
  sale_price: number;
  type_Book_Id: number;
  pages_number: number;
  author: string;
  enable: boolean;
  typeBook: TypeBook;
}