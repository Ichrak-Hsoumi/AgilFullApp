package com.bezkoder.springjwt.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.time.LocalTime;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /*@NotBlank*/
    private int numero;

    /*@NotBlank*/
    /*@JsonFormat(pattern="HH:mm")*/
    @CreationTimestamp
    private Date date;

    @ManyToOne
    @JoinColumn(name = "Id_Guichet")
    private Guichet guichet;

    @ManyToOne
    @JoinColumn(name = "Id_Client")
    private User client;
}
