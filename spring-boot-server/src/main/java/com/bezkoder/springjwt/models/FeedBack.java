package com.bezkoder.springjwt.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class FeedBack {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonFormat(pattern="dd-MM-yyyy HH:mm:ss")
    @CreationTimestamp
    private Date date;

    @NotBlank
    private String content;

    @ManyToOne
    @JoinColumn(name = "Id_Client")
    private User client;
}
