package io.spring.aula.rafael.entity;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document
public class Usuario {

	@Id
	private String id;
	private String nome;
	
	@DBRef
	private List<Perfil> perfis;
	
	private int idade;
	private String email;
	

}
