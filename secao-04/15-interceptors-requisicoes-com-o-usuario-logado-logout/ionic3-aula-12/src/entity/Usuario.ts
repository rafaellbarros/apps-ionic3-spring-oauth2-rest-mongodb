import { Perfil } from "./Perfil";

export class Usuario {
    
    public id: string;
    public nome: string;
    public idade: number;
    public email: string;
    public senha: string;
    public perfis: Perfil[];

}