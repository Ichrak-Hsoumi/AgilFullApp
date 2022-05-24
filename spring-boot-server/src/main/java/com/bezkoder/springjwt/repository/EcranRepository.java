package com.bezkoder.springjwt.repository;

import com.bezkoder.springjwt.models.Ecran;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface EcranRepository extends JpaRepository<Ecran, Long> {
    Ecran findByName(String name);

   /* @Query(nativeQuery = true, value = "SELECT * FROM ecran LIMIT 1")
    Ecran findEcran();*/
}
