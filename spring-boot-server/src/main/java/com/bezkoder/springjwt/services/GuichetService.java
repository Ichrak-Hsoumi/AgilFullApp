package com.bezkoder.springjwt.services;

import com.bezkoder.springjwt.models.Guichet;

import java.util.List;

public interface GuichetService {
    void createGuichet(Guichet guichet);
    Guichet findById(Long id);
    List<Guichet> getAll();
    void updateGuichet(Long id, Guichet guichet);
    public void delete(Long id);
}
