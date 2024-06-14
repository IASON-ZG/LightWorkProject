package com.example.Lightwork.bench;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Positive;

public record Bench(Integer id,
                    @NotEmpty
                    String title,
                    @Positive
                    Float kilos,
                    @Positive
                    Integer reps) {
}
