package com.example.TiendaBack.service;

import com.example.TiendaBack.model.Usuario;
import com.example.TiendaBack.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    // Listar todos los usuarios
    public List<Usuario> listarTodosLosUsuarios() {
        return usuarioRepository.findAll();
    }

    // Crear un nuevo usuario
    public Usuario crearUsuario(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    // Obtener un usuario por ID
    public Usuario obtenerUsuarioPorId(Long id) {
        Optional<Usuario> usuarioOpt = usuarioRepository.findById(id);
        return usuarioOpt.orElse(null); // Retorna null si no se encuentra el usuario
    }

    // Actualizar un usuario existente
    public Usuario actualizarUsuario(Long id, Usuario usuarioDetails) {
        Optional<Usuario> usuarioOpt = usuarioRepository.findById(id);
        if (usuarioOpt.isPresent()) {
            Usuario usuario = usuarioOpt.get();
            usuario.setRol(usuarioDetails.getRol());
            usuario.setUsername(usuarioDetails.getUsername());
            usuario.setEmail(usuarioDetails.getEmail());
            usuario.setPassword(usuarioDetails.getPassword());
            return usuarioRepository.save(usuario); // Guarda el usuario actualizado
        }
        return null; // Retorna null si no se encuentra el usuario
    }

    // Eliminar un usuario
    public boolean borrarUsuario(Long id) {
        if (usuarioRepository.existsById(id)) {
            usuarioRepository.deleteById(id);
            return true; // El usuario fue eliminado
        }
        return false; // El usuario no existía
    }
}