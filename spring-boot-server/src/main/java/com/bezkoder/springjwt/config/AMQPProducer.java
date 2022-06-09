package com.bezkoder.springjwt.config;


import com.bezkoder.springjwt.models.Notifications;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.time.LocalDateTime;
import java.util.List;

/**
 * @author Elhem Nouri
 * This is the producer class.
 */
@Component
public class AMQPProducer {

    private static Logger log = LoggerFactory.getLogger(AMQPProducer.class);


    @Autowired
    volatile RabbitTemplate rabbitTemplate;

    @Autowired
    RabbitMQProperties rabbitMQProperties;


    /**
     * This method is invoked when sending a notification
     * for a list of users by a given role.
     * @param user
     * @param msg
     * @param emeteur
     * @param information
     * @param notificationType
     * @param idTicket
     */
    public void notifyUsers(String user, String msg,String emeteur,String information,String notificationType,Long idTicket ) {
       // List<User> users = userService.usersByRole(userRole);
      //  log.info("-------------AMQPProducer List of users by role onmne from AMQPProducer : {}"+users);
      /*  if (!users.isEmpty()) {
            users.forEach(user -> {*/
                sendNotification(notificationType, null, msg,emeteur, user, information, idTicket );
           // });
        }
   // }

    /**
     * This method is invoked o send notification, this method can be called by all {@link AMQPProducer}
     * methods to send notification.
     * @param notificationType
     * @param date
     * @param msg
     * @param emetteur
     * @param destinataire
     * @param information
     * @param idTicket
     */
    private void sendNotification(String notificationType,String date, String msg,String emetteur, String destinataire,String information, Long idTicket){
        date = LocalDateTime.now().toString();
        Notifications notification = new Notifications(notificationType, date, msg, false, emetteur,destinataire, information, idTicket);
        log.info("Sending the index request through queue message");
        rabbitTemplate.convertAndSend(rabbitMQProperties.getExchangeName(),rabbitMQProperties.getRoutingKey(), notification);

    }


}
