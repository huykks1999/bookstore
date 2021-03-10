import { Customer } from './customer.model';

export class Order{
    id: number;
    createDate: Date;
    total_money: number;
    name: string;
    phone: string;
    address: string;
    id_customer: number;
    payment: string;
    status: string
}