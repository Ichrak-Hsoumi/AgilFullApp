package com.bezkoder.springjwt.repository;

import com.bezkoder.springjwt.models.Notifications;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NotificationsRepository extends JpaRepository<Notifications, Long> {
}
