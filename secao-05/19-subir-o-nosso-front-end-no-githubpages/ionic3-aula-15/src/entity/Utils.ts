export class Utils {
    static get urlBackEnd() { 
        return 'https://spring-aula-14.herokuapp.com';
    }

    static json = (obj: any) => JSON.parse(JSON.stringify(obj));
}