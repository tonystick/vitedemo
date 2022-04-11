export interface RootModel<T> {
  status: number;
  message: string;
  data: T;
}

export interface Person {
  name: string;
  age: number;
}
