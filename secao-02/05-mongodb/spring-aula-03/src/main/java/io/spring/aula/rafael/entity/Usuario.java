package io.spring.aula.rafael.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document
public class Usuario {

	@Id
	private String id;
	private String nome;
	private int idade;
	private String email;
	
	public Usuario(String nome, int idade, String email) {
		this.nome = nome;
		this.idade = idade;
		this.email = email;
	}

}
