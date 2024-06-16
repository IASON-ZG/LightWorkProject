package com.example.Lightwork.user;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.Base64;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    private UserRepository userRepository;

    public UserController(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @RequestMapping("/login")
    public boolean login(@RequestParam("user") String username, @RequestParam("password") String password){
        System.out.println("username :"+ username + " password is :" + password);
        Optional<User> usercheck = userRepository.findByUsername(username);
        if (usercheck.isPresent()){
            User userfound = usercheck.get();
            return password.equals(userfound.password());
        } else
            return false;
    }

    @RequestMapping("/register")
    public boolean register(@RequestBody User user){
        Optional<User> usercheck = userRepository.findByUsername(user.username());
        if (usercheck.isPresent()){
            return false;
        } else {
            userRepository.create(user);
            return true;
        }
    }

    @RequestMapping("/user")
    public Principal user(HttpServletRequest request) {
        String authToken = request.getHeader("Authorization")
                .substring("Basic".length()).trim();
        return () ->  new String(Base64.getDecoder()
                .decode(authToken)).split(":")[0];
    }
}
