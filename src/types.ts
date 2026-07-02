export interface Location {
  id: string;
  name: string;
  address: string;
  imageUrl: string;
  planIds: string[];
  mapsUrl?: string;
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
  locationId: string;
  description?: string;
}

export interface Service {
  name: string;
  icon: any; // Lucide icon component
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'dotlottie-player': any;
    }
  }
}
