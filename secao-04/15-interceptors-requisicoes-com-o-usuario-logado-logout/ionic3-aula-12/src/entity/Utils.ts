export class Utils {
    static get urlBackEnd() { 
        return 'http://localhost:8080';
    }

    static json = (obj: any) => JSON.parse(JSON.stringify(obj));
}