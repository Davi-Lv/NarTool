import { Injectable } from "@nestjs/common";
@Injectable()
export class AppService {
    getHello(): any {
        let objeto = {
            hello: "Hello, world!",
            nome: "davi",
            idade: 22
        }
        return objeto;
    }
}