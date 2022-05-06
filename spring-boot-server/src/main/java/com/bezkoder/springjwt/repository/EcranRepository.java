package com.bezkoder.springjwt.repository;

import com.bezkoder.springjwt.models.Ecran;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EcranRepository extends JpaRepository<Ecran, Long> {
}
