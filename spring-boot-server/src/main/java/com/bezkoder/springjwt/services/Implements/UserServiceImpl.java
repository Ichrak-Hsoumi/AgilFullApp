package com.bezkoder.springjwt.services.Implements;

import com.bezkoder.springjwt.models.ERole;
import com.bezkoder.springjwt.models.Services;
import com.bezkoder.springjwt.models.User;
import com.bezkoder.springjwt.payload.request.LoginRequest;
import com.bezkoder.springjwt.repository.RoleRepository;
import com.bezkoder.springjwt.repository.UserRepository;
import com.bezkoder.springjwt.security.jwt.JwtUtils;
import com.bezkoder.springjwt.security.services.UserDetailsImpl;
import com.bezkoder.springjwt.services.ServicesService;
import com.bezkoder.springjwt.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ServicesService servicesService;
    @Autowired
    PasswordEncoder encoder;
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    JwtUtils jwtUtils;

    @Override
    public void createUser(User user) {
        User user1 = new User();
        user1.setUsername(user.getUsername());
        user1.setEmail(user.getEmail());
        user1.setPassword(user.getPassword());
        user1.setNom(user.getNom());
        user1.setPrenom(user.getPrenom());
        user1.setDateNaissance(user.getDateNaissance());
        user1.setNumTel(user.getNumTel());
        user1.setAddress(user.getAddress());

        /*if (user.getService()!=null)
        {
            Services services =  servicesService.findById(user.getService().getId());
            user1.setService(services);
        }
*/
        userRepository.save(user1);
    }

    @Override
    public User findById(Long id) {
        return userRepository.findById(id).isPresent() ? userRepository.findById(id).get() : null ;
    }

    @Override
    public List<User> getAll() {
        return userRepository.findByRolesName(ERole.ROLE_MODERATOR);
    }

    @Override
    public void updateUser(Long id, User user) {
        User user1 = userRepository.findById(id).isPresent() ? userRepository.findById(id).get() : null ;
        user1.setUsername(user.getUsername());
        user1.setEmail(user.getEmail());
        user1.setPassword(encoder.encode(user.getPassword()));
        user1.setNom(user.getNom());
        user1.setPrenom(user.getPrenom());
        user1.setDateNaissance(user.getDateNaissance());
        user1.setNumTel(user.getNumTel());
        user1.setAddress(user.getAddress());

        userRepository.save(user1);
    }

    @Override
    public void delete(Long id) {
        User user1 = userRepository.findById(id).isPresent() ? userRepository.findById(id).get() : null ;

        userRepository.delete(user1);
    }

    public Authentication authentication() {
        return SecurityContextHolder.getContext().getAuthentication();
    }

    @Override
    public User currentUser() {

        //System.out.println("\n \n ------authentication().getName()----" + authentication().getName());
        User user = userRepository.findByUsername(authentication().getName())
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + authentication().getName()));
        //System.out.println("\n \n ------Current User----" + user.getId());
        return user;
    }
}
