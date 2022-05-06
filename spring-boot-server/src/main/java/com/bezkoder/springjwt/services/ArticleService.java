package com.bezkoder.springjwt.services;

import com.bezkoder.springjwt.models.Article;

import java.util.List;

public interface ArticleService {
    void createArticle(Article article);
    Article findById(Long id);
    List<Article> getAll();
    void updateArticle(Long id, Article article);
    public void delete(Long id);
}
