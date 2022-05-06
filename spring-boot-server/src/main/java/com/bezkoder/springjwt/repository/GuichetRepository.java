package com.bezkoder.springjwt.repository;

import com.bezkoder.springjwt.models.Guichet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GuichetRepository extends JpaRepository<Guichet, Long> {
}
