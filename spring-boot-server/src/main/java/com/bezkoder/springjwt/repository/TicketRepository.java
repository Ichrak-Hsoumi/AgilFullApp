package com.bezkoder.springjwt.repository;

import com.bezkoder.springjwt.models.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface TicketRepository extends JpaRepository<Ticket, Long> {
    @Modifying
    @Query(
            value = "truncate table ticket",
            nativeQuery = true
    )
    void truncateMyTable();
}
