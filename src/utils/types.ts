export interface CardholderDetails {
	cardNumber: string;
	cardName: string;
	expDate?: number | null | string;
	cvc?: number | null | string;
}