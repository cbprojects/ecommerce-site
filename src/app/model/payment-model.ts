import { SubscriptionModel } from "./subscription-model";

export interface PaymentModel {
    _id: any;
    currency: string;
    value: number;
    status: number;
    paymentDate: any;
    subscription: SubscriptionModel;

    active: boolean;
    createUser: string;
    updateUser: string;
    createDate: any;
    updateDate: any;
}