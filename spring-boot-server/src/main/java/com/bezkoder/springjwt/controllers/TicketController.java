package com.bezkoder.springjwt.controllers;
import com.bezkoder.springjwt.models.Guichet;
import com.bezkoder.springjwt.models.Ticket;
import com.bezkoder.springjwt.services.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ticket")
@CrossOrigin(origins = "*")
public class TicketController {
    @Autowired
    TicketService ticketService;

    @PostMapping
    public void create(@RequestBody Guichet guichet) {
        ticketService.yesGetTicket(guichet);
    }

    @GetMapping
    public List<Ticket> findAll(){
        return ticketService.getAll();
    }

    @DeleteMapping("{id}")
    public void deleteArticle(@PathVariable Long id) {
        ticketService.delete(id);
    }

    /*@GetMapping(path="/truncate")
    @Scheduled(cron = "55 1 * * *")
    public void deletAll(){
        ticketService.truncateMyTable();
    }*/
}
