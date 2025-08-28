package com.hiqleapdk.QA.controller;

import com.hiqleapdk.QA.model.Consultant;
import com.hiqleapdk.QA.repository.CompanyRepository;
import com.hiqleapdk.QA.repository.ConsultantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class ConsultantController {

    @Autowired
    private ConsultantRepository consultantRepository;

    @Autowired
    private CompanyRepository companyRepository; 

    @GetMapping("/consultants")
    public String listConsultants(Model model) {
        model.addAttribute("consultants", consultantRepository.findAll());
        model.addAttribute("consultant", new Consultant()); 
        model.addAttribute("allCompanies", companyRepository.findAll());
        
        return "consultants";
    }

    
    @PostMapping("/consultants/save")
    public String saveConsultant(Consultant consultant) {
        consultantRepository.save(consultant);
        return "redirect:/consultants";
    }

    @GetMapping("/consultants/delete/{id}")
    public String deleteConsultant(@PathVariable("id") Long id) {
    consultantRepository.deleteById(id);
    return "redirect:/consultants";
}
}