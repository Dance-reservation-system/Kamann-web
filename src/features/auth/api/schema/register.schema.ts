export interface RegisterPayload {
  email: "string";
  password: "string";
  firstName: "string";
  lastName: "string";
  phone: "string";
}

export interface RegisterResponse extends RegisterPayload {
  id: number;
}
