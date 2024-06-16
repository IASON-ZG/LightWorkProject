package com.example.Lightwork.user;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.stereotype.Repository;
import org.springframework.util.Assert;

import java.util.List;
import java.util.Optional;

@Repository
public class UserRepository {
    private static final Logger log = LoggerFactory.getLogger(UserRepository.class);
    private final JdbcClient jdbcClient;

    public UserRepository(JdbcClient jdbcClient){
        this.jdbcClient = jdbcClient;
    }


    public List<User> findAll(){
        return jdbcClient.sql("select * from users")
                .query(User.class)
                .list();
    }

    public Optional<User> findByUsername(String username) {
        return jdbcClient.sql("SELECT username,password FROM users WHERE username = :username" )
                .param("username", username)
                .query(User.class)
                .optional();
    }

    public void create(User user) {
        var updated = jdbcClient.sql("INSERT INTO users(username,password) values(?,?)")
                .params(List.of(user.username(),user.password()))
                .update();

        Assert.state(updated == 1, "Failed to create user " + user.username());
    }

    public void update(User user, String username) {
        var updated = jdbcClient.sql("update users set username = ?, password = ?")
                .params(List.of(user.username(),user.password(), username))
                .update();

        Assert.state(updated == 1, "Failed to update user " + user.username());
    }

    public void delete(String username) {
        var updated = jdbcClient.sql("delete from users where username = :username")
                .param("username", username)
                .update();

        Assert.state(updated == 1, "Failed to delete user " + username);
    }

    public int count() {
        return jdbcClient.sql("select * from users").query().listOfRows().size();
    }

    public void saveAll(List<User> users) {
        users.stream().forEach(this::create);
    }


}
