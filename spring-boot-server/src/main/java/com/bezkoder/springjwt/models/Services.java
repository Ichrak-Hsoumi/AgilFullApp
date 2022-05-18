package com.bezkoder.springjwt.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.List;
import java.util.Set;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Services {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 20)
    private String nom;

    @NotBlank
    @Size(max = 20)
    private String category;

    @OneToMany(mappedBy ="service", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Guichet> guichets;

    @ManyToMany(mappedBy = "services")
    private Set<User> clients;

    public Services(@NotBlank @Size(max = 20) String nom) {
        this.nom = nom;
    }
}
