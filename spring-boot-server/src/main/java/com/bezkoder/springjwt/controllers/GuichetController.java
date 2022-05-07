package com.bezkoder.springjwt.controllers;

import com.bezkoder.springjwt.models.Guichet;
import com.bezkoder.springjwt.services.GuichetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/guichets")
@CrossOrigin(origins = "*")
public class GuichetController {

    @Autowired
    private GuichetService guichetService;

    @GetMapping
    public List<Guichet> findAll()  {
        return guichetService.getAll();
    }

    @GetMapping("{id}")
    public ResponseEntity<Guichet> findById(@PathVariable Long id) {
        Optional<Guichet> guichet = Optional.ofNullable(guichetService.findById(id));
        return guichet.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound()
                        .build());
    }

    @PostMapping
    public void createGuichet(@RequestBody Guichet guichet) {

        guichetService.createGuichet(guichet);
    }

    @PutMapping("{id}")
    public void updateGuichet(@PathVariable Long id, @RequestBody Guichet guichet) {
        Optional<Guichet> guichet1 = Optional.ofNullable(guichetService.findById(id));
        if (guichet1.isPresent()) {
            guichetService.updateGuichet(id, guichet);
        } else {
            guichetService.createGuichet(guichet);
        }
    }

    @DeleteMapping("{id}")
    public void deleteGuichet(@PathVariable Long id) {
        guichetService.delete(id);
    }
}
