package io.spring.aula.rafael.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
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
	
    public Usuario buscarPorId(String id) {
        return usuarioRepository.findOne(id);
    }
	
    public Page<Usuario> listaPaginada(int count, int page) {
        Pageable pages = new PageRequest(page, count);
        return usuarioRepository.findAll(pages);
    }

    public List<Usuario> buscaPorNome(String nome) {
        return usuarioRepository.findByNomeLikeIgnoreCase(nome);
    }

	public Usuario salvarUsuario(Usuario usuario) {
		return this.usuarioRepository.save(usuario);
	}

	public void deletarUsuario(String id) {
		this.usuarioRepository.delete(id);
	}

}
