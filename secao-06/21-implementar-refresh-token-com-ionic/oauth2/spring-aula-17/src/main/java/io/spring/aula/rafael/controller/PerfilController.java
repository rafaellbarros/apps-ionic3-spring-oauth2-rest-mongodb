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

import io.spring.aula.rafael.entity.Perfil;
import io.spring.aula.rafael.service.PerfilService;

@RestController
@RequestMapping("perfil")
public class PerfilController {
	
	@Autowired
	PerfilService perfilService;
	
	@GetMapping
	public List<Perfil> listar(){
		return this.perfilService.listarPerfil();
	}
	
    @GetMapping("/{id}")
    public Perfil buscarPorId(@PathVariable String id) {
        return this.perfilService.buscarPorId(id);
    }
	
    @GetMapping("/{page}/{count}")
    public Page<Perfil> listaPaginada(@PathVariable int page, @PathVariable int count) {
        return this.perfilService.listaPaginada(count, page);
    }
    

	@PostMapping
	public Perfil salvarPerfil(@RequestBody Perfil perfil){
		return this.perfilService.salvarPerfil(perfil);
	}
	
	@PutMapping
	public Perfil editarPerfil(@RequestBody Perfil perfil){
		return this.perfilService.salvarPerfil(perfil);
	}
	
	@DeleteMapping("/{id}")
	public void deletarPerfil(@PathVariable String id) {
		this.perfilService.deletarPerfil(id);
	}

}
