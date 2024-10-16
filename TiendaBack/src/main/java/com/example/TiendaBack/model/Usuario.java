package com.example.TiendaBack.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Usuario")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // Cambiado de int a Long para un mejor manejo de identificadores

    @Column(nullable = false, length = 50)
    private String rol; // rol

    @Column(nullable = false, length = 50)
    private String username; // username

    @Column(nullable = false, length = 125)
    private String email; // email

    @Column(nullable = false, length = 300)
    private String password; // password


}