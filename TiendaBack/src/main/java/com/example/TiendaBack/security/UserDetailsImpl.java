package com.example.TiendaBack.security;

import com.example.TiendaBack.model.Usuario;
import lombok.AllArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@AllArgsConstructor
public class UserDetailsImpl implements UserDetails {

    private final Usuario usuario;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<GrantedAuthority> authorities = new ArrayList<>();

        // Aquí se obtiene el rol directamente del usuario
        String rolNombre = usuario.getRol();

        switch (rolNombre) {
            case "Administrador":
                authorities.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
                break;
            case "Gerente":
                authorities.add(new SimpleGrantedAuthority("ROLE_GERENTE"));
                break;
            case "Cajero":
                authorities.add(new SimpleGrantedAuthority("ROLE_CAJERO"));
                break;
            default:
                break;
        }

        return authorities;
    }

    @Override
    public String getPassword() {
        return usuario.getPassword();
    }

    @Override
    public String getUsername() {
        return usuario.getEmail();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public String getNombre() {
        return usuario.getUsername();
    }

    // Nuevo método para obtener el rol
    public String getRol() {
        return usuario.getRol();
    }
}
