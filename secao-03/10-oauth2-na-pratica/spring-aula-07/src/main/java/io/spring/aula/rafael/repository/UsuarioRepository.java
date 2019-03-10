package io.spring.aula.rafael.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import io.spring.aula.rafael.entity.Usuario;

public interface UsuarioRepository extends MongoRepository<Usuario, String> {

    List<Usuario> findByNomeLikeIgnoreCase(String nome);

	Usuario findByEmail(String username);
}
