package com.hiqleapdk.QA.controller;

import com.hiqleapdk.QA.model.Company;
import com.hiqleapdk.QA.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class CompanyController {

    @Autowired
    private CompanyRepository companyRepository;

    @GetMapping("/companies")
    public String listCompanies(Model model) {
        model.addAttribute("companies", companyRepository.findAll());
        model.addAttribute("company", new Company());
        return "companies";
    }

    @PostMapping("/companies/save")
    public String saveCompany(Company company) {
        companyRepository.save(company);
        return "redirect:/companies";
    }
}