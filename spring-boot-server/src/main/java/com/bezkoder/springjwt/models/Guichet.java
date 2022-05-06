package com.bezkoder.springjwt.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Guichet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private Date open;

    @NotBlank
    private Date close;

    //Agent
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "agent_id", referencedColumnName = "id")
    private User agent;

    @OneToMany(mappedBy ="guichet", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Ticket> tickets;

    @ManyToOne
    @JoinColumn(name = "Id_Service")
    private Services service;

    @ManyToOne
    @JoinColumn(name = "Id_Ecran")
    private Ecran ecran;
}
