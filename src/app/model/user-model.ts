export interface UserModel {
    _id: any;
    name: string;
    lastName: string;
    mail: string;
    password: string;
    receiveNewsletter: boolean;

    active: boolean;
    createUser: string;
    updateUser: string;
    createDate: any;
    updateDate: any;
}