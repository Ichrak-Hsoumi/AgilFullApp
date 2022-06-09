package com.bezkoder.springjwt.services;

import com.bezkoder.springjwt.models.Guichet;
import com.bezkoder.springjwt.models.Services;
import com.bezkoder.springjwt.models.Ticket;

import java.util.List;

public interface TicketService {

    Ticket yesGetTicket(Guichet guichet);
    List<Ticket> getAll();
    void delete(Long id);
    void truncateMyTable();
}
