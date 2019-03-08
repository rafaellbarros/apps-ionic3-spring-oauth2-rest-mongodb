package io.spring.aula.rafael.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
	public List<Usuario> listarTodosUsuarios(){
		return this.usuarioService.listarUsuarios();
	}
	
	@PostMapping
	public Usuario salvarUsuario(@RequestBody Usuario usuario){
		return this.usuarioService.salvarUsuario(usuario);
	}
	
	@PutMapping
	public Usuario editarUsuario(@RequestBody Usuario usuario){
		return this.usuarioService.salvarUsuario(usuario);
	}
	
	@DeleteMapping("/{id}")
	public void deletarUsuario(@PathVariable String id) {
		this.usuarioService.deletarUsuario(id);
	}
	
	@GetMapping("/{id}")
	public Usuario consultarUsuario(@PathVariable String id) {
		return this.usuarioService.consultarUsuario(id);
	}
	
}
