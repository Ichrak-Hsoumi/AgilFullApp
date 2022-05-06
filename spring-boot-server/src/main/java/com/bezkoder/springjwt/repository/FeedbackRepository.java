package com.bezkoder.springjwt.repository;

import com.bezkoder.springjwt.models.FeedBack;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeedbackRepository extends JpaRepository<FeedBack, Long> {
}
