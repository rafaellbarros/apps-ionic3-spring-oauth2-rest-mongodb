package io.spring.aula.rafael.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import io.spring.aula.rafael.entity.Perfil;

public interface PerfilRepository extends MongoRepository<Perfil, String> {

}