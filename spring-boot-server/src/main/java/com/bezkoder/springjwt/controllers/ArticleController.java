package com.bezkoder.springjwt.controllers;

import com.bezkoder.springjwt.models.Article;
import com.bezkoder.springjwt.services.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/articles")
@CrossOrigin(origins = "*")
public class ArticleController {

    @Autowired
    private ArticleService articleService;

    @GetMapping
    public List<Article> findAll()  {
        return articleService.getAll();
    }

    @GetMapping("{id}")
    public ResponseEntity<Article> findById(@PathVariable Long id) {
        Optional<Article> article = Optional.ofNullable(articleService.findById(id));
        return article.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound()
                        .build());
    }

    @GetMapping(path="/sorted")
    public List<Article> findAllSorted()  {
        return articleService.findAll();
    }

    @PostMapping
    public void createArticle(@RequestBody Article article) {

        articleService.createArticle(article);
    }

    @PutMapping("{id}")
    public void updateArticle(@PathVariable Long id, @RequestBody Article article) {
        Optional<Article> article1 = Optional.ofNullable(articleService.findById(id));
        if (article1.isPresent()) {
            articleService.updateArticle(id, article);
        } else {
            articleService.createArticle(article);
        }
    }

    @DeleteMapping("{id}")
    public void deleteArticle(@PathVariable Long id) {
        articleService.delete(id);
    }
}
