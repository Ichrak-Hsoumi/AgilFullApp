package com.bezkoder.springjwt.services;

import com.bezkoder.springjwt.models.Services;

import java.util.List;

public interface ServicesService {
    List<Services> getAll();
    Services findById(Long id);
    void createService(Services service);
    void updateService(Long id, Services service);
    public void delete(Long id);
}
