package com.bezkoder.springjwt.payload.response;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.Date;
import java.util.List;

public class JwtResponse {
	private String token;
	private String type = "Bearer";
	private Long id;
	private String username;
	private String email;
	private List<String> roles;
	private String password;
	private String nom;
	private String prenom;
	@JsonFormat(pattern="dd-MM-yyyy")
	private Date dateNaissance;
	private String numTel;
	private String address;

	public JwtResponse(String accessToken, Long id, String username, String email,String password, String nom, String prenom, Date dateNaissance, String numTel, String address, List<String> roles) {
		this.token = accessToken;
		this.id = id;
		this.username = username;
		this.email = email;
		this.roles = roles;
		this.password = password;
		this.nom = nom;
		this.prenom = prenom;
		this.dateNaissance = dateNaissance;
		this.numTel = numTel;
		this.address = address;
	}


	public String getAccessToken() {
		return token;
	}

	public void setAccessToken(String accessToken) {
		this.token = accessToken;
	}

	public String getTokenType() {
		return type;
	}

	public void setTokenType(String tokenType) {
		this.type = tokenType;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public List<String> getRoles() {
		return roles;
	}

	public String getPassword() {
		return password;
	}

	public String getNom() {
		return nom;
	}

	public String getPrenom() {
		return prenom;
	}

	public Date getDateNaissance() {
		return dateNaissance;
	}

	public String getNumTel() {
		return numTel;
	}

	public String getAddress() {
		return address;
	}
}
