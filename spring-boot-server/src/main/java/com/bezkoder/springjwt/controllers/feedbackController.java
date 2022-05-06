package com.bezkoder.springjwt.controllers;

import com.bezkoder.springjwt.models.FeedBack;
import com.bezkoder.springjwt.services.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/feedbacks")
@CrossOrigin(origins = "*")
public class feedbackController {
    @Autowired
    private FeedbackService feedbackService;

    @GetMapping
    public List<FeedBack> findAll()  {
        return feedbackService.getAll();
    }

    @PostMapping
    public void createArticle(@RequestBody FeedBack feedBack) {

        feedbackService.createFeedback(feedBack);
    }
}
