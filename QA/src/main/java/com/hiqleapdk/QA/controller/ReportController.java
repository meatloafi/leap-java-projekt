package com.hiqleapdk.QA.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.hiqleapdk.QA.model.Consultant;
import com.hiqleapdk.QA.model.QualityReport;
import com.hiqleapdk.QA.repository.ConsultantRepository;
import com.hiqleapdk.QA.repository.QualityReportRepository;




@Controller
public class ReportController {

    @Autowired
    private QualityReportRepository reportRepository;
    @Autowired
    private ConsultantRepository consultantRepository;

    @GetMapping("/")
    public String showReportList(Model model) {
        model.addAttribute("reports", reportRepository.findAll());
        return "reports";
    }

     @GetMapping("/new")
    public String showNewReportForm(Model model) {
        model.addAttribute("report", new QualityReport());
        model.addAttribute("allConsultants", consultantRepository.findAll());
        return "new-report";
    }

    @PostMapping("/save")
    public String saveReport(QualityReport report) {
        Consultant consultant = report.getConsultant();
        
        if (consultant != null) {
            // Auto set company
            report.setCompany(consultant.getCompany());
            report.setProject(consultant.getProjectTag());
        }
        report.calculateOverallScore();
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

    @GetMapping("/edit/{id}")
    public String showUpdateForm(@PathVariable("id") Long id, Model model) {
        QualityReport report = reportRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Invalid report Id:" + id));
        model.addAttribute("report", report);
        return "update-report"; 
    }

    @PostMapping("/update/{id}")
    public String updateReport(@PathVariable("id") Long id, QualityReport report) {
        QualityReport originalReport = reportRepository.findById(id)
            .orElseThrow(() -> new IllegalArgumentException("Invalid report Id:" + id));

        report.setConsultant(originalReport.getConsultant());
        report.setCompany(originalReport.getCompany());
        
        report.setId(id);
        
        report.calculateOverallScore();
        reportRepository.save(report);
        return "redirect:/report/" + id; // Redirect to the details page
    }

    @GetMapping("/delete/{id}")
    public String deleteReport(@PathVariable("id") Long id) {
        QualityReport report = reportRepository.findById(id)
        .orElseThrow(() -> new IllegalArgumentException("Invalid report Id:" + id));
        
        reportRepository.delete(report);
        return "redirect:/";
    }
}

