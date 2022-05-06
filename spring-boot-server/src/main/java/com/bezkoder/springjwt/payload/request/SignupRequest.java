package com.bezkoder.springjwt.payload.request;

import lombok.Data;

import java.util.Date;
import java.util.Set;

import javax.validation.constraints.*;

@Data
public class SignupRequest {
    @NotBlank
    @Size(min = 3, max = 20)
    private String username;
 
    @NotBlank
    @Size(max = 50)
    @Email
    private String email;
    
    private Set<String> role;
    
    @NotBlank
    @Size(min = 6, max = 40)
    private String password;

    @NotBlank
    @Size(min = 3, max = 20)
    private String nom;

    @NotBlank
    @Size(min = 3, max = 20)
    private String prenom;


    private Date dateNaissance;

    @NotBlank
    @Size(max = 20)
    private String numTel;

    @NotBlank
    @Size(max = 20)
    private String address;
  

}
