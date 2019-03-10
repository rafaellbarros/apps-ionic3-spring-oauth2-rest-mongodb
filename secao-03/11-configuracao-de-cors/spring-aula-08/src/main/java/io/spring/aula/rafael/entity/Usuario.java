package io.spring.aula.rafael.entity;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document
public class Usuario {

    @Id
    private String id;

    private String nome;

    private List<Perfil> perfis;

    private int idade;

    private String email;
    
    private String senha;

    public Usuario() {
    }

    public Usuario(Usuario usuario) {
        this.nome = usuario.getNome();
        this.email = usuario.getEmail();
        this.senha = usuario.getSenha();
        this.perfis = usuario.getPerfis();
    }

    public Usuario(String nome, List<Perfil> perfis, String email, String senha) {
        this.nome = nome;
        this.perfis = perfis;
        this.email = email;
        this.senha = senha;
    }
}
