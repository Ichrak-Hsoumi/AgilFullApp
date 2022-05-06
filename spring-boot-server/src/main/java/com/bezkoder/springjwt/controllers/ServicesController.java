package com.bezkoder.springjwt.controllers;

import com.bezkoder.springjwt.models.Services;
import com.bezkoder.springjwt.services.ServicesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/services")
@CrossOrigin(origins = "*")
public class ServicesController {
    @Autowired
    private ServicesService servicesService;

    @GetMapping
    public List<Services> findAll()  {
        return servicesService.getAll();
    }

    @GetMapping("{id}")
    public ResponseEntity<Services> findById(@PathVariable Long id) {
        Optional<Services> service = Optional.ofNullable(servicesService.findById(id));
        return service.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound()
                        .build());
    }

    @PostMapping
    public void createService(@RequestBody Services service) {
        servicesService.createService(service);
    }

    @PutMapping("{id}")
    public void updateService(@PathVariable Long id, @RequestBody Services service) {
        Optional<Services> service1 = Optional.ofNullable(servicesService.findById(id));
        if (service1.isPresent()) {
            servicesService.updateService(id, service);
        } else {
            servicesService.createService(service);
        }
    }

    @DeleteMapping("{id}")
    public void deleteService(@PathVariable Long id) {
        servicesService.delete(id);
    }
}
