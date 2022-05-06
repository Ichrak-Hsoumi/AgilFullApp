package com.bezkoder.springjwt.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private int numero;

    @NotBlank
    private Date date;

    @ManyToOne
    @JoinColumn(name = "Id_Guichet")
    private Guichet guichet;

    @ManyToOne
    @JoinColumn(name = "Id_Client")
    private User client;
}
