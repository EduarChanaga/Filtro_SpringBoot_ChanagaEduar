package com.example.TiendaBack.service;

import com.example.TiendaBack.model.Cliente;
import com.example.TiendaBack.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;

    public List<Cliente> listarTodosLosClientes() {
        try {
            return clienteRepository.findAll();
        } catch (Exception e) {
            throw new RuntimeException("Error al listar los clientes", e);
        }
    }

    public Cliente obtenerClientePorId(String identificacion) { // Cambiado a String
        return clienteRepository.findById(identificacion)
                .orElseThrow(() -> new RuntimeException("Cliente no encontrado"));
    }

    public Cliente crearCliente(Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    public Cliente actualizarCliente(String identificacion, Cliente clienteDetails) { // Cambiado a String
        Cliente cliente = clienteRepository.findById(identificacion)
                .orElseThrow(() -> new RuntimeException("Cliente no encontrado"));
        cliente.setNombre(clienteDetails.getNombre());
        cliente.setApellido(clienteDetails.getApellido());
        cliente.setTelefono(clienteDetails.getTelefono());
        return clienteRepository.save(cliente);
    }

    public void borrarCliente(String identificacion) { // Cambiado a String
        clienteRepository.deleteById(identificacion);
    }
}
