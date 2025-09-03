package com.hiqleapdk.QA.controller;

import com.hiqleapdk.QA.model.Company;
import com.hiqleapdk.QA.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/companies")
@CrossOrigin(origins = "http://localhost:8080")

public class CompanyController {

    @Autowired
    private CompanyRepository companyRepository;

    @GetMapping
    public Iterable<Company> getAllCompanies() {
        return companyRepository.findAll();
    }

    @PostMapping
    public Company createCompany(Company company) {
        return companyRepository.save(company);
    }

    @PutMapping
    public Company updateCompany(Company company) {
        return companyRepository.save(company);
    }

    @DeleteMapping("/{id}")
    public void deleteCompany(Long id) {
        companyRepository.deleteById(id);
    }
}