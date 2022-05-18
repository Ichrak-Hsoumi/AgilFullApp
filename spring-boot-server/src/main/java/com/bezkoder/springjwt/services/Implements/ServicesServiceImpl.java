package com.bezkoder.springjwt.services.Implements;

import com.bezkoder.springjwt.models.Services;
import com.bezkoder.springjwt.repository.ServiceRepository;
import com.bezkoder.springjwt.repository.UserRepository;
import com.bezkoder.springjwt.services.ServicesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServicesServiceImpl implements ServicesService {

    @Autowired
    private ServiceRepository serviceRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<Services> getAll() {
        return serviceRepository.findAll();
    }

    @Override
    public Services findById(Long id) {
        return serviceRepository.findById(id).isPresent() ? serviceRepository.findById(id).get() : null ;
    }

    @Override
    public void createService(Services service) {
        Services service1 = new Services();

        service1.setNom(service.getNom());
        service1.setCategory(service.getCategory());
        serviceRepository.save(service1);
    }

    @Override
    public void updateService(Long id, Services service) {
        Services service1 = serviceRepository.findById(id).isPresent() ? serviceRepository.findById(id).get() : null ;
        service1.setNom(service.getNom());
        service1.setCategory(service.getCategory());
        serviceRepository.save(service1);
    }

    @Override
    public void delete(Long id) {
        Services service1 = serviceRepository.findById(id).isPresent() ? serviceRepository.findById(id).get() : null ;
        serviceRepository.delete(service1);
    }
}
