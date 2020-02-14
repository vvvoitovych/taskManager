export class User {
  [key: string]: any;

  constructor (
    public email: string,
    public password: string,
    public name: string,
    public id?: number
  ) {}
}
