package io.spring.aula.rafael.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.spring.aula.rafael.entity.Usuario;
import io.spring.aula.rafael.service.UsuarioService;

@RestController
@RequestMapping("usuario")
public class UsuarioController {

	@Autowired
	UsuarioService usuarioService;
	
	@GetMapping
	public List<Usuario> listUsuario(){
		return this.usuarioService.listUsers();
	}
	
	@PostMapping
	public List<Usuario> listUsuario(@RequestBody Usuario usuario){
		return this.usuarioService.listUsers(usuario);
	}
	
	
}
