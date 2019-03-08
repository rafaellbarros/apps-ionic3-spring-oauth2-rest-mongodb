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

	public List<Usuario> listarUsuarios(Usuario usuario) {
		this.usuarioRepository.save(usuario);
		return this.usuarioRepository.findAll();
	}
}
