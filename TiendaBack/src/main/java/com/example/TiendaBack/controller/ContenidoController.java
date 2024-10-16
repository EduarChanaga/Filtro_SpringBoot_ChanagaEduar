package com.example.TiendaBack.controller;

import com.example.TiendaBack.model.Cliente;
import com.example.TiendaBack.model.Contenido;
import com.example.TiendaBack.service.ContenidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contenidos")
public class ContenidoController {

    @Autowired
    private ContenidoService contenidoService;

    @GetMapping
    @PreAuthorize("hasRole('ADMIN') or hasRole('GERENTE') or hasRole('CAJERO')")
    public List<Contenido> listarContenido() {
        return contenidoService.listarTodoElContenido();
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN') or hasRole('GERENTE')")
    public Contenido guardarContenido(@RequestBody Contenido contenido) {
        return contenidoService.crearContenido(contenido);
    }



}
