package com.hiqleapdk.QA.controller;

import com.hiqleapdk.QA.model.QualityReport;
import com.hiqleapdk.QA.repository.QualityReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDateTime;

import java.util.List;

@RestController
@RequestMapping("/api/reports") 
public class ReportController {

    @Autowired
    private QualityReportRepository reportRepository;

    @GetMapping
    public List<QualityReport> getAllReports() {
        return reportRepository.findAll();
    }

    

    @GetMapping("/{id}")
    public ResponseEntity<QualityReport> getReportById(@PathVariable("id") Long id) {
        return reportRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public QualityReport createReport(@RequestBody QualityReport report) {
        report.calculateOverallScore();
        return reportRepository.save(report);
    }
    

    @PutMapping("/{id}")
    public ResponseEntity<QualityReport> updateReport(@PathVariable Long id, @RequestBody QualityReport updatedReport) {
        return reportRepository.findById(id)
                .map(report -> {
                    report.setJoyScore(updatedReport.getJoyScore());
                    report.setSimplicityScore(updatedReport.getSimplicityScore());
                    report.setResultScore(updatedReport.getResultScore());
                    report.setResponsibilityScore(updatedReport.getResponsibilityScore());
                    report.calculateOverallScore();
                    QualityReport savedReport = reportRepository.save(report);
                    return ResponseEntity.ok(savedReport);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteReport(@PathVariable Long id) {
        return reportRepository.findById(id)
                .map(report -> {
                    reportRepository.delete(report);
                    return ResponseEntity.noContent().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}/viewed")
    public ResponseEntity<QualityReport> markReportAsViewed(@PathVariable Long id) {
        return reportRepository.findById(id).map(report -> {
            if (report.getManagerViewedTimestamp() == null) {
                 report.setManagerViewedTimestamp(LocalDateTime.now());
            } else {
                report.setManagerViewedTimestamp(null); 
            }
            return ResponseEntity.ok(reportRepository.save(report));
        }).orElse(ResponseEntity.notFound().build());

    }

    @GetMapping("/consultant/{consultantId}")
    public List<QualityReport> getReportsByConsultant(@PathVariable("consultantId") Long consultantId) {
        return reportRepository.findByConsultantIdOrderByCreatedDateAsc(consultantId);
    }
}