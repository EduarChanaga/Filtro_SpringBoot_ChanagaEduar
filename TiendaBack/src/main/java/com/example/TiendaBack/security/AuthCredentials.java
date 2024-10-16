package com.example.TiendaBack.security;

import lombok.Data;

@Data
public class AuthCredentials {
    private String email;
    private String password;
}
