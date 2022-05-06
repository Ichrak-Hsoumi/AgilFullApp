package com.bezkoder.springjwt.models;

import com.bezkoder.springjwt.DTO.ArticleDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String title;

    @NotBlank
    private String contenu;

    @ManyToOne
    @JoinColumn(name = "Id_Admin")
    private  User admin;

    public ArticleDTO convertModelToDto(){
        ArticleDTO articleDTO = new ArticleDTO();
        articleDTO.setId(this.id);
        articleDTO.setTitle(this.title);
        articleDTO.setContenu(this.contenu);
        articleDTO.setAdmin(this.admin.getId());
        return articleDTO;
    }
}
