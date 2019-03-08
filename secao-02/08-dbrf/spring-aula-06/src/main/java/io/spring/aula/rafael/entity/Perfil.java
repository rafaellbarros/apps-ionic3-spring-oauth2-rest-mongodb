package io.spring.aula.rafael.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document
public class Perfil {
	
    @Id
    private String id;

    private String nome;

}
