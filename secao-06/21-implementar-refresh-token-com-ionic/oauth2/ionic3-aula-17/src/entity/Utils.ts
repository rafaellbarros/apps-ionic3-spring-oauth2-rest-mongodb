export class Utils {
    static get urlBackEnd() { 
        return 'https://spring-aula-16.herokuapp.com';
        //return 'http://localhost:8080';
    }

    static json = (obj: any) => JSON.parse(JSON.stringify(obj));
}