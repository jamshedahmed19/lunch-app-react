export interface IMenuItem {
    menuItem_id?: string;
    name: string;
    available: boolean;
    quantity: number;
    price: number;
    category: string;
}

export interface ILunchItem {
    lunchItem_id?: string;
    selectedItem: IMenuItem;
    alternative?: boolean;
    alternativeItem?: IMenuItem;
    quantity: number;
}

export interface ILunch {
    lunch_id?: string;
    orderedBy: string;
    amountPaid: number;
    isPaid: boolean;
    remainingAmount: number;
    orderItems: ILunchItem[];
}
