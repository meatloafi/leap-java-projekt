package com.hiqLeapdk.QA.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.hiqLeapdk.QA.model.QualityReport;
import com.hiqLeapdk.QA.repository.QualityReportRepository;

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
}