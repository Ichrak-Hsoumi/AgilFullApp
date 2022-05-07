package com.bezkoder.springjwt.services.Implements;

import com.bezkoder.springjwt.models.Guichet;
import com.bezkoder.springjwt.models.Services;
import com.bezkoder.springjwt.repository.GuichetRepository;
import com.bezkoder.springjwt.services.GuichetService;
import com.bezkoder.springjwt.services.ServicesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GuichetServiceImpl implements GuichetService {

    @Autowired
    private GuichetRepository guichetRepository;

    @Autowired
    private ServicesService servicesService;

    /*@Autowired
    private EcranService ecranService;*/

    @Override
    public void createGuichet(Guichet guichet) {
        Guichet guichet1 = new Guichet();

        guichet1.setNumber(guichet.getNumber());
        guichet1.setOpen(guichet.getOpen());
        guichet1.setClose(guichet.getClose());

        if (guichet.getService()!=null){
            Services services = servicesService.findById(guichet.getService().getId());
            guichet1.setService(services);
        }
        guichetRepository.save(guichet1);

    }

    @Override
    public Guichet findById(Long id) {
        return guichetRepository.findById(id).isPresent() ? guichetRepository.findById(id).get() : null ;
    }

    @Override
    public List<Guichet> getAll() {
        return guichetRepository.findAll();
    }

    @Override
    public void updateGuichet(Long id, Guichet guichet) {
        Guichet guichet1 = guichetRepository.findById(id).isPresent() ? guichetRepository.findById(id).get() : null ;
        guichet1.setNumber(guichet.getNumber());
        guichet1.setOpen(guichet.getOpen());
        guichet1.setClose(guichet.getClose());
        guichetRepository.save(guichet1);
    }

    @Override
    public void delete(Long id) {
        Guichet guichet1 = guichetRepository.findById(id).isPresent() ? guichetRepository.findById(id).get() : null ;
        guichetRepository.delete(guichet1);
    }
}