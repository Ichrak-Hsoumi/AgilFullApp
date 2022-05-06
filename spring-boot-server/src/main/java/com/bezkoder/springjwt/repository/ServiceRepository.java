package com.bezkoder.springjwt.repository;

import com.bezkoder.springjwt.models.Services;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ServiceRepository extends JpaRepository<Services, Long> {
}
