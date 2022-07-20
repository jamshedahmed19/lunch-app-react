export interface IUser {
    _id?: string;
    user_id?: string;
    first_name: string;
    last_name: string;
    email: string;
    isLoggedIn: boolean;
}