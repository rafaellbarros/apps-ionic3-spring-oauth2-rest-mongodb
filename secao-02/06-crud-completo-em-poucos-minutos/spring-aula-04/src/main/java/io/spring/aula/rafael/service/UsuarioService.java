package io.spring.aula.rafael.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import io.spring.aula.rafael.entity.Usuario;
import io.spring.aula.rafael.repository.UsuarioRepository;

@Service
public class UsuarioService {
	
	@Autowired
	private UsuarioRepository usuarioRepository;

	public List<Usuario> listarUsuarios() {
		return this.usuarioRepository.findAll();
	}

	public Usuario salvarUsuario(Usuario usuario) {
		return this.usuarioRepository.save(usuario);
	}

	public void deletarUsuario(String id) {
		this.usuarioRepository.delete(id);
	}

	public Usuario consultarUsuario(String id) {
		return this.usuarioRepository.findOne(id);
	}
}
