package com.example.Lightwork.run;

import jakarta.annotation.PostConstruct;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.stereotype.Repository;
import org.springframework.util.Assert;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
public class RunRepository {

    private static final Logger log = LoggerFactory.getLogger(RunRepository.class);
    private final JdbcClient jdbcClient;

    public RunRepository(JdbcClient jdbcClient){
        this.jdbcClient = jdbcClient;
    }


    public boolean checkUser(String username){
        var checking = jdbcClient.sql("select count(*) from Users where username = ?")
                .param(username)
                .query(Integer.class).single();
        System.out.println(checking);
        return (checking == 1);
    }


    public List<Run> findByUser(String username) {
        if (checkUser(username)){
            return jdbcClient.sql("select * from run where username = :username")
                    .param("username", username)
                    .query(Run.class)
                    .list();
        }
        return null;
    }

    public void create(Run run) {
        if (checkUser(run.username())){
            var updated = jdbcClient.sql("INSERT INTO Run(id,title,started_on,completed_on,kilometers,location,username) values(?,?,?,?,?,?,?)")
                    .params(List.of(run.id(),run.title(),run.startedOn(),run.completedOn(),run.kilometers(),run.location().toString(),run.username()))
                    .update();
            Assert.state(updated == 1, "Failed to create run " + run.title());
            return;
        }
        Assert.state(false, "User does not exist");
    }

    public void update(Run run, Integer id) {
        var updated = jdbcClient.sql("update run set title = ?, started_on = ?, completed_on = ?, kilometers = ?, location = ? where id = ?")
                .params(List.of(run.title(),run.startedOn(),run.completedOn(),run.kilometers(),run.location().toString(), id))
                .update();

        Assert.state(updated == 1, "Failed to update run " + run.title());
    }

    public boolean delete(Integer id, String username) {
        if (checkUser(username)){
            var delete = jdbcClient.sql("delete from run where id = :id AND username = :username")
                    .param("id", id)
                    .param("username",username)
                    .update();
            Assert.state(delete == 1, "Failed to delete run " + id);
            return (delete == 1);
        }
        return false;
    }

//    public int count() {
//        return jdbcClient.sql("select * from run").query().listOfRows().size();
//    }
//
//    public void saveAll(List<Run> runs) {
//        runs.stream().forEach(this::create);
//    }

    //    public List<Run> findAll(){
//        return jdbcClient.sql("select * from run")
//                .query(Run.class)
//                .list();
//    }

//    public Optional<Run> findById(Integer id) {
//        return jdbcClient.sql("SELECT id,title,started_on,completed_on,kilometers,location,username FROM Run WHERE id = :id" )
//                .param("id", id)
//                .query(Run.class)
//                .optional();
//    }

}