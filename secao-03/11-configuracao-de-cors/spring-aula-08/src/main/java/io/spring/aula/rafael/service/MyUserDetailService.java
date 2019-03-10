package io.spring.aula.rafael.service;

import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import io.spring.aula.rafael.config.MyUserDetails;
import io.spring.aula.rafael.entity.Usuario;
import io.spring.aula.rafael.repository.UsuarioRepository;

@Service
public class MyUserDetailService implements UserDetailsService{
    
    @Autowired
    private UsuarioRepository usuarioRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Usuario usuario = usuarioRepository.findByEmail(username);
        
        if(Objects.isNull(usuario)){
            throw new UsernameNotFoundException("Usuário ou senha inválidos");
        }
        
        return new MyUserDetails(usuario);
        
    }
    
}