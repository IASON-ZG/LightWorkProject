package com.example.Lightwork.bench;

import com.example.Lightwork.bench.Bench;
import com.example.Lightwork.bench.BenchRepository;
import com.example.Lightwork.run.Run;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.stereotype.Repository;
import org.springframework.util.Assert;

import java.util.List;
import java.util.Optional;

@Repository
public class BenchRepository {

    private static final Logger log = LoggerFactory.getLogger(BenchRepository.class);
    private final JdbcClient jdbcClient;

    public BenchRepository(JdbcClient jdbcClient){
        this.jdbcClient= jdbcClient;
    }

    public boolean checkUser(String username) {
        var checking = jdbcClient.sql("select username from Users where username = ?")
                .param(username)
                .query(Boolean.class).stream().count();
        return (checking == 1);
    }


    public List<Bench> findByUser(String username) {
        if (checkUser(username)){
            return jdbcClient.sql("select * from bench where username = :username")
                    .param("username", username)
                    .query(Bench.class)
                    .list();
        }
        return null;
    }


    public void create(Bench bench) {
        if (checkUser(bench.username())) {
            var updated = jdbcClient.sql("INSERT INTO bench(id,title,kilos,reps,username) values(?,?,?,?,?)")
                    .params(List.of(bench.id(), bench.title(), bench.kilos(), bench.reps(), bench.username()))
                    .update();
            Assert.state(updated == 1, "Failed to create bench " + bench.title());
            return ;
        }
        Assert.state(false, "User does not exist");
    }

    public void update(Bench bench, Integer id) {
        var updated = jdbcClient.sql("update bench set title = ?, kilos = ?, reps = ? where id = ?")
                .params(List.of(bench.title(),bench.kilos(),bench.reps(), id))
                .update();

        Assert.state(updated == 1, "Failed to update bench " + bench.title());
    }

    public void delete(Integer id,  String username) {
        if (checkUser(username)) {
            var delete = jdbcClient.sql("delete from bench where id = :id AND username = :username")
                    .param("id", id)
                    .param("username",username)
                    .update();
            Assert.state(delete== 1, "Failed to delete bench " + id);
//            return (delete == 1);
        }
//        return false;
    }
}
