package com.bezkoder.springjwt.services.Implements;

import com.bezkoder.springjwt.models.Ecran;
import com.bezkoder.springjwt.models.Guichet;
import com.bezkoder.springjwt.models.Services;
import com.bezkoder.springjwt.models.User;
import com.bezkoder.springjwt.repository.EcranRepository;
import com.bezkoder.springjwt.repository.GuichetRepository;
import com.bezkoder.springjwt.repository.ServiceRepository;
import com.bezkoder.springjwt.repository.UserRepository;
import com.bezkoder.springjwt.services.GuichetService;
import com.bezkoder.springjwt.services.ServicesService;
import com.bezkoder.springjwt.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GuichetServiceImpl implements GuichetService {

    @Autowired
    private GuichetRepository guichetRepository;

    @Autowired
    private ServiceRepository serviceRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EcranRepository ecranRepository;

    @Override
    public void createGuichet(Guichet guichet) {
        Guichet guichet1 = new Guichet();

        guichet1.setNumber(guichet.getNumber());
        guichet1.setOpen(guichet.getOpen());
        guichet1.setClose(guichet.getClose());

        if(guichet.getService() != null) {
            Services service = serviceRepository.findByNom(guichet.getService().getNom());

            guichet1.setService(service);
        }

        if(guichet.getAgent() != null) {
            User agent = userRepository.findByUsername(guichet.getAgent().getUsername())
                    .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + guichet.getAgent().getUsername()));
            guichet1.setAgent(agent);
        }


        Ecran ecran = ecranRepository.findByName("E1");
        guichet1.setEcran(ecran);


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

        if(guichet.getService() != null) {
            Services service = serviceRepository.findByNom(guichet.getService().getNom());
            guichet1.setService(service);
        }

        if(guichet.getAgent() != null) {
            User agent = userRepository.findByUsername(guichet.getAgent().getUsername())
                    .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + guichet.getAgent().getUsername()));
            guichet1.setAgent(agent);
        }

        guichetRepository.save(guichet1);
    }

    @Override
    public void delete(Long id) {
        Guichet guichet1 = guichetRepository.findById(id).isPresent() ? guichetRepository.findById(id).get() : null ;
        guichetRepository.delete(guichet1);
    }
}
