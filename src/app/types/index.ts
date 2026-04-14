export type Service = {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
};

export type Booking = {
  id: string;
  user_id: string;
  service: string;
  date: string;
  location: string;
  phone: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  created_at: string;
};

export type BookingFormData = {
  service: string;
  date: string;
  location: string;
  phone: string;
};