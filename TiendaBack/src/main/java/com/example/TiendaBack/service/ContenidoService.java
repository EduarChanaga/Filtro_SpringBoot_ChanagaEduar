package com.example.TiendaBack.service;

import com.example.TiendaBack.model.Cliente;
import com.example.TiendaBack.model.Contenido;
import com.example.TiendaBack.repository.ContenidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContenidoService {
    @Autowired
    private ContenidoRepository contenidoRepository;

    public List<Contenido> listarTodoElContenido() {
        try {
            return contenidoRepository.findAll();
        } catch (Exception e) {
            throw new RuntimeException("Error al listar el contenido", e);
        }
    }

    public Contenido crearContenido(Contenido contenido) {
        return contenidoRepository.save(contenido);
    }

}
