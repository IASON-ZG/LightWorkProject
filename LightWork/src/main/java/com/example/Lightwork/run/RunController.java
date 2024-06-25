package com.example.Lightwork.run;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/runs")
public class RunController {

    private final RunRepository runRepository;

    public RunController(RunRepository runRepository) {
        this.runRepository = runRepository;
    }

    @GetMapping("")
    List<Run> findAll(@RequestParam("username") String username){
        return runRepository.findByUser(username);
    }
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("")
    void create (@RequestBody Run run){
        runRepository.create(run);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PutMapping("/{id}")
    void update(@RequestBody Run run,@PathVariable Integer id){
        runRepository.update(run,id);
    }

    @DeleteMapping("/{id}")
    Boolean delete(@PathVariable Integer id,@RequestParam("username") String username){
        return runRepository.delete(id,username);
    }
}
