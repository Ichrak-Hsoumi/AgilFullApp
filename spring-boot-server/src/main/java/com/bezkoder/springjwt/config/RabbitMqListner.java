package com.bezkoder.springjwt.config;

/*import com.tritux.ebsonmne.constants.Constants;
import com.tritux.ebsonmne.models.Notification;
import com.tritux.ebsonmne.services.NotificationService;*/
import com.bezkoder.springjwt.models.Notifications;
import com.bezkoder.springjwt.services.Implements.NotificationsServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

/**
 * @author Elhem Nouri
 *
 * This is the queue listener class, its receiveMessage() method ios invoked
 * with the notification as the parameter.
 */
@Component
public class RabbitMqListner {
    private static Logger log = LoggerFactory.getLogger(RabbitMqListner.class);

    @Autowired
    NotificationsServiceImpl notificationService;

    @Autowired
    SimpMessagingTemplate simpMessagingTemplate;


    /**
     * This method is invoked whenever any new message is put in the queue.
     * @param notif this given notification
     */
    @RabbitListener(queues = "${rabbitmq.queueName}")
    public void listen(Notifications notif) {

        log.info("Notification Type <"+notif.getNotificationType()+">");
        if (notif.getNotificationType().equals("send.notif")) {
            notif.setDate(LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss")));
            notificationService.saveNotif(notif);
            log.info("Notification saved...");
            simpMessagingTemplate.convertAndSend("/push/" + notif.getDestinataire() + ".notifications", notif);
        }

    }
}
