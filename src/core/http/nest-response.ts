export class NestResponse {
  constructor(response: NestResponse) {
    Object.assign(this, response);
  }
  status: number;
  headers: object;
  body: object;
}
