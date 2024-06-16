package com.example.Lightwork.user;

import jakarta.validation.constraints.NotEmpty;

public record User(@NotEmpty
                    String username,
                    @NotEmpty
                    String password) {

    @Override
    public @NotEmpty String password() {
        return password;
    }
}
