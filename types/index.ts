export interface iBlog {
  body: string;
  id: number;
  title: string;
  userId: number;
}
export interface iAuthor {
  name: string,
  job: string,
  age: number,
  hobbies: string[],
  contact: { phone: string, email: string }
}
