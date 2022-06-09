package com.bezkoder.springjwt.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Notifications implements Serializable {



    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Basic(optional = false)
    private Long id;

    private String notificationType;

    private String date;

    private String message;

    private Boolean open = false;

    private String emetteur;

    private String destinataire;

    private String information;

    private Long idTicket;


    public Notifications(String notificationType, String date, String message, Boolean open, String emetteur, String destinataire, String information, Long idTicket) {
        this.notificationType = notificationType;
        this.date = date;
        this.message = message;
        this.open = open;
        this.emetteur = emetteur;
        this.destinataire = destinataire;
        this.information = information;
        this.idTicket = idTicket;
    }
}
