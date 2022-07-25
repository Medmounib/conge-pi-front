export interface AuthResponse {
  user: {
    _id: string,
    firstName: string,
    lastName: string,
    address: string,
    email: string,
    createdAt: Date,
    updatedAt: Date
  };
  token: string;
}
