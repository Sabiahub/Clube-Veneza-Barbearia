export interface Location {
  id: string;
  name: string;
  address: string;
  imageUrl: string;
  planIds: string[];
}

export interface Plan {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  imageUrl: string;
  checkoutUrl: string;
}

export interface Professional {
  name: string;
  imageUrl: string;
  description?: string;
}
