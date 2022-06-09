package com.bezkoder.springjwt.services.Implements;

import com.bezkoder.springjwt.models.Notifications;
import com.bezkoder.springjwt.repository.NotificationsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NotificationsServiceImpl {

    @Autowired
    NotificationsRepository notificationsRepository;

    public Notifications saveNotif(Notifications notif){
        return notificationsRepository.save(notif);
    }
}
