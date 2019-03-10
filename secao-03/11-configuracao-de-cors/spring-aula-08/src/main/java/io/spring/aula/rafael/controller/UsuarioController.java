package io.spring.aula.rafael.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
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
	public List<Usuario> listar(){
		return this.usuarioService.listarUsuarios();
	}
	
    @GetMapping("/{id}")
    public Usuario buscarPorId(@PathVariable String id) {
        return this.usuarioService.buscarPorId(id);
    }
	
    @GetMapping("/{page}/{count}")
    public Page<Usuario> listaPaginada(@PathVariable int page, @PathVariable int count) {
        return this.usuarioService.listaPaginada(count, page);
    }
    

    @GetMapping("/{nome}/nome")
    public List<Usuario> buscarPorNome(@PathVariable String nome) {
        return this.usuarioService.buscaPorNome(nome);
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
	
}
