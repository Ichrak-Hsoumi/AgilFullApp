package com.bezkoder.springjwt.services.Implements;

import com.bezkoder.springjwt.models.Article;
import com.bezkoder.springjwt.models.FeedBack;
import com.bezkoder.springjwt.models.User;
import com.bezkoder.springjwt.repository.ArticleRepository;
import com.bezkoder.springjwt.repository.FeedbackRepository;
import com.bezkoder.springjwt.services.FeedbackService;
import com.bezkoder.springjwt.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FeedbackServiceImpl implements FeedbackService {

    @Autowired
    private FeedbackRepository feedbackRepository;

    @Autowired
    private UserService userService;

    @Override
    public List<FeedBack> getAll() {
        return feedbackRepository.findAll();
    }

    @Override
    public void createFeedback(FeedBack feedBack) {
        FeedBack feedBack1 = new FeedBack();

        feedBack1.setContent(feedBack.getContent());

        User creator = userService.currentUser();
        feedBack1.setClient(creator);

        feedbackRepository.save(feedBack1);

    }
}
