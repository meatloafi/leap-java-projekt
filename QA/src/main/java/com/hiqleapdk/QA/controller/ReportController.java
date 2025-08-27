package com.hiqleapdk.QA.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.hiqleapdk.QA.model.QualityReport;
import com.hiqleapdk.QA.repository.QualityReportRepository;

@Controller
public class ReportController {

    @Autowired
    private QualityReportRepository reportRepository;

    @GetMapping("/")
    public String showReportList(Model model) {
        model.addAttribute("reports", reportRepository.findAll());
        return "reports";
    }

    @GetMapping("/new")
    public String showNewReportForm(Model model) {
        model.addAttribute("report", new QualityReport());
        return "new-report";
    }

    @PostMapping("/save")
    public String saveReport(QualityReport report) {
        reportRepository.save(report);
        return "redirect:/";
    }

    @GetMapping("/report/{id}")
    public String showReportDetails(@PathVariable("id") Long id, Model model) {

    QualityReport report = reportRepository.findById(id)
      .orElseThrow(() -> new IllegalArgumentException("Invalid report Id:" + id));
    
    model.addAttribute("report", report);
    
    return "report-details";
    }

    @PostMapping("/report/delete/{id}")
    public String deleteReport(@PathVariable("id") Long id) {
        reportRepository.deleteById(id);
        return "redirect:/";
    }
}

