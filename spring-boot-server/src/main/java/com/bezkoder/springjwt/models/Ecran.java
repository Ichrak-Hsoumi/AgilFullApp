package com.bezkoder.springjwt.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Ecran {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String name;

    @NotBlank
    private String message;

    @OneToMany(mappedBy ="ecran", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Guichet> guichets;

    public Ecran(@NotBlank String name) {
        this.name = name;
    }
}