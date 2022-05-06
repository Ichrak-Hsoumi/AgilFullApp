package com.bezkoder.springjwt.DTO;

import com.bezkoder.springjwt.models.Article;
import com.bezkoder.springjwt.models.User;
import lombok.Data;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;

@Data
public class ArticleDTO {
    private Long id;
    private String title;
    private String contenu;
    private Long admin;

    public Article convertDtoToModel(){
        Article article = new Article();
        article.setId(this.id);
        article.setTitle(this.title);
        article.setContenu(this.contenu);
        return article;
    }
}
