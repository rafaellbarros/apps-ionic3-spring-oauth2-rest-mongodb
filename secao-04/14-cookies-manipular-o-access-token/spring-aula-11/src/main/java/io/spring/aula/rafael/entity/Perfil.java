package io.spring.aula.rafael.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;

import lombok.Data;

@Data
@Document
public class Perfil implements GrantedAuthority {

    @Id
    private String id;

    private String nome;

    public Perfil() {
    }

    public Perfil(String nome) {
        this.nome = nome;
    }

    @Override
    public String getAuthority() {
        return nome;
    }

}