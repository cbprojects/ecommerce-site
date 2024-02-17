export interface SubscriptionModel {
    _id: any;
    currency: string;
    value: number;
    type: number;
    userId: string;
    userName: string;
    userEmail: string;
    status: number;
    expirationDate: any;
    registerDate: any;

    active: boolean;
    createUser: string;
    updateUser: string;
    createDate: any;
    updateDate: any;
}