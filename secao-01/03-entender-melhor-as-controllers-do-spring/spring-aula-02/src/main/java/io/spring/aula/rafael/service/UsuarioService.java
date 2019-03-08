package io.spring.aula.rafael.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import io.spring.aula.rafael.entity.Usuario;

@Service
public class UsuarioService {

	public List<Usuario> listUsers() {
		List<Usuario> listUsers = new ArrayList<>();
		listUsers.add(new Usuario("Rafael Barros", 29, "rafaelbarros.df@gmail.com"));
		listUsers.add(new Usuario("Fulano de Tal", 25, "fulanodetal@gmail.com"));
		return listUsers;
	}

	public List<Usuario> listUsers(Usuario addUsers) {
		List<Usuario> listUsers = this.listUsers();
		listUsers.add(addUsers);
		return listUsers();
	}
}
