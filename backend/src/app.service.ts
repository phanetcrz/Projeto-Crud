// eslint-disable-next-line prettier/prettier
import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): string {
    return 'Conectado...';
  }
}
