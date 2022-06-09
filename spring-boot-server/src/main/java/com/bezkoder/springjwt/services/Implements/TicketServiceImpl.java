package com.bezkoder.springjwt.services.Implements;

import com.bezkoder.springjwt.config.AMQPProducer;
import com.bezkoder.springjwt.models.Guichet;
import com.bezkoder.springjwt.models.Services;
import com.bezkoder.springjwt.models.Ticket;
import com.bezkoder.springjwt.repository.TicketRepository;
import com.bezkoder.springjwt.services.GuichetService;
import com.bezkoder.springjwt.services.TicketService;
import com.bezkoder.springjwt.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalTime;
import java.util.List;

@Service
public class TicketServiceImpl implements TicketService {

    @Autowired
    TicketRepository ticketRepository;
    @Autowired
    UserService userService;
    @Autowired
    AMQPProducer amqpProducer;



    @Override
    public Ticket yesGetTicket(Guichet guichet) {
        Ticket ticket = new Ticket();
        ticket.setClient(userService.currentUser());
        ticket.setDate(LocalTime.now());
        ticket.setGuichet(guichet);
        ticket.setNumero(2);
       Ticket Ticket2 = ticketRepository.save(ticket);

        /**
         * queue
         */
        amqpProducer.notifyUsers(ticket.getClient().getUsername(), "notiffffffffff",guichet.getAgent().getUsername(),
                guichet.getService().getNom(),"send.notif", ticket.getId());


        return Ticket2;
    }

    @Override
    public List<Ticket> getAll() {
        return ticketRepository.findAll();
    }

    @Override
    public void delete(Long id) {
        Ticket ticketDel = ticketRepository.findById(id).isPresent() ? ticketRepository.findById(id).get() : null ;
        ticketRepository.delete(ticketDel);
    }

    @Transactional
    @Override
    /*@Scheduled(cron = "0 0 12 * * ?")*/
    public void truncateMyTable() {
        ticketRepository.truncateMyTable();
    }
}

