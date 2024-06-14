package com.example.Lightwork.bench;

import com.example.Lightwork.run.Run;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/benches")
public class BenchController {

    private final BenchRepository benchRepository;

    public BenchController(BenchRepository benchRepository){
        this.benchRepository = benchRepository;
    }

    @GetMapping("")
    List<Bench> findAll(){
        return benchRepository.findAll();
    }


    @GetMapping("/{id}")
    Bench findById(@PathVariable Integer id){
        Optional<Bench> bench = benchRepository.findById(id);
        if (bench.isEmpty()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        return bench.get();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("")
    void create (@RequestBody Bench bench){
        benchRepository.create(bench);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PutMapping("/{id}")
    void update(@RequestBody Bench bench,@PathVariable Integer id){
        benchRepository.update(bench,id);
    }


    //delete
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    void delete(@PathVariable Integer id){
        benchRepository.delete(id);
    }


}
