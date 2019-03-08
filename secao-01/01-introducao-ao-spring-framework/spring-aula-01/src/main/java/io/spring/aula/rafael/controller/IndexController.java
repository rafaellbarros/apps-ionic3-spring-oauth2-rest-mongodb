package io.spring.aula.rafael.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import io.spring.aula.rafael.entity.Usuario;

@RestController
public class IndexController {

	@GetMapping
	public String getTexto() {
		return "Olá pessoal";
	}
	
	@GetMapping("/{nome}")
	public String getNome(@PathVariable String nome) {
		return "Olá pessoal eu sou o " + nome;
	}
	
	@GetMapping("/nome-usuario/{nome}")
	public Usuario getNomeUsuario(@PathVariable String nome) {
		return  new Usuario(nome);
	}
}
