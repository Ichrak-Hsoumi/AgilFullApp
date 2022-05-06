package com.bezkoder.springjwt.services;

import com.bezkoder.springjwt.models.FeedBack;

import java.util.List;

public interface FeedbackService {
    List<FeedBack> getAll();
    void createFeedback(FeedBack feedBack);
}
