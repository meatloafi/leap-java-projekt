package com.hiqleapdk.QA.controller;

import com.hiqleapdk.QA.model.Consultant;
import com.hiqleapdk.QA.repository.ConsultantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;

import java.util.List;


@RestController
@RequestMapping("api/consultants")
@CrossOrigin(origins = "http://localhost:8080")

public class ConsultantController {

    @Autowired
    private ConsultantRepository consultantRepository;

    @GetMapping
    public List<Consultant> getAllConsultants() {
        return consultantRepository.findAll();
    }

    @PostMapping
    public Consultant createConsultant(@RequestBody Consultant consultant) {
        return consultantRepository.save(consultant);
    }

    @PutMapping("/{id}")
    public Consultant updateConsultant(@PathVariable Long id, @RequestBody Consultant updatedConsultant) {
        return consultantRepository.findById(id)
                .map(consultant -> {
                    consultant.setName(updatedConsultant.getName());
                    consultant.setEmail(updatedConsultant.getEmail());
                    consultant.setCompany(updatedConsultant.getCompany());
                    consultant.setProjectTag(updatedConsultant.getProjectTag()); // Lade till projectTag
                    consultant.setManager(updatedConsultant.getManager()); // Nytt
                    consultant.setSeller(updatedConsultant.getSeller());   // Nytt
                    return consultantRepository.save(consultant);
                })
                .orElseThrow(() -> new RuntimeException("Consultant not found with id " + id));
    }

    @DeleteMapping("/{id}")
    public void deleteConsultant(@PathVariable Long id) {
        consultantRepository.deleteById(id);
    }
}
