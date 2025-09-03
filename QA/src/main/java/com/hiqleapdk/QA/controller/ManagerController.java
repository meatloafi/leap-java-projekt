package com.hiqleapdk.QA.controller;

import com.hiqleapdk.QA.model.Consultant;
import com.hiqleapdk.QA.model.Manager;
import com.hiqleapdk.QA.repository.ConsultantRepository;
import com.hiqleapdk.QA.repository.ManagerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*; 

import java.util.List; 

@RestController
@RequestMapping("api/managers")
@CrossOrigin(origins = "http://localhost:8080")
public class ManagerController {

    @Autowired
    private ManagerRepository managerRepository;

    @Autowired
    private ConsultantRepository consultantRepository; 

    @GetMapping
    public List<Manager> getAllManagers() {
        return managerRepository.findAll();
    }

    @PostMapping
    public Manager createManager(@RequestBody Manager manager) {
        return managerRepository.save(manager);
    }

    // Hämta alla konsulter för en specifik chef
    @GetMapping("/{id}/consultants")
    public List<Consultant> getConsultantsByManager(@PathVariable Long id) {
        return consultantRepository.findByManagerId(id);
    }
}