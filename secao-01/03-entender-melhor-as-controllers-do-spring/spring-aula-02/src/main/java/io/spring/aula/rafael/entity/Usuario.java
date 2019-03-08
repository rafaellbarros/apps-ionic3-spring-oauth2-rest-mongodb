package io.spring.aula.rafael.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Usuario {

	private String nome;
	private int idade;
	private String email;

}
