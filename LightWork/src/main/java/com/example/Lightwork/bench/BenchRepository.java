package com.example.Lightwork.bench;

import com.example.Lightwork.bench.Bench;
import com.example.Lightwork.bench.BenchRepository;
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

    public List<Bench> findAll(){
        return jdbcClient.sql("select * from bench")
                .query(Bench.class)
                .list();
    }

    public Optional<Bench> findById(Integer id) {
        return jdbcClient.sql("SELECT id,title,kilos,reps FROM bench WHERE id = :id" )
                .param("id", id)
                .query(Bench.class)
                .optional();
    }

    public void create(Bench bench) {
        var updated = jdbcClient.sql("INSERT INTO bench(id,title,kilos,reps) values(?,?,?,?,?,?)")
                .params(List.of(bench.id(),bench.title(),bench.kilos(),bench.reps()))
                .update();

        Assert.state(updated == 1, "Failed to create bench " + bench.title());
    }

    public void update(Bench bench, Integer id) {
        var updated = jdbcClient.sql("update bench set title = ?, kilos = ?, reps = ? where id = ?")
                .params(List.of(bench.title(),bench.kilos(),bench.reps(), id))
                .update();

        Assert.state(updated == 1, "Failed to update bench " + bench.title());
    }

    public void delete(Integer id) {
        var updated = jdbcClient.sql("delete from bench where id = :id")
                .param("id", id)
                .update();

        Assert.state(updated == 1, "Failed to delete bench " + id);
    }    

}
