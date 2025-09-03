package com.hiqleapdk.QA.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import java.time.LocalDate;
import java.time.LocalDateTime;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

@Entity
@Table(name = "quality_reports_v3")
public class QualityReport {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @CreationTimestamp
    private LocalDate createdDate;

    @UpdateTimestamp
    private LocalDate lastUpdatedDate;

    private LocalDateTime managerViewedTimestamp;

    @ManyToOne
    @JoinColumn(name = "company_id")
    private Company company;

    @ManyToOne
    @JoinColumn(name = "consultant_id")
    private Consultant consultant;

    private String project;
    private String reportSummary;
    private String feedback;
    private String pros;
    private String cons;

    private String priority;

    private double overallScore;
    private double joyScore;
    private double simplicityScore;
    private double resultScore;
    private double responsibilityScore;


    public String getProject() {
        return project;
    }

    public void setProject(String project) {
        this.project = project;
    }

    public String getReportSummary() {
        return reportSummary;
    }

    public void setReportSummary(String reportSummary) {
        this.reportSummary = reportSummary;
    }

    public String getFeedback() {
        return feedback;
    }

    public void setFeedback(String feedback) {
        this.feedback = feedback;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(LocalDate createdDate) {
        this.createdDate = createdDate;
    }

    public LocalDate getLastUpdatedDate() {
        return lastUpdatedDate;
    }

    public void setLastUpdatedDate(LocalDate lastUpdatedDate) {
        this.lastUpdatedDate = lastUpdatedDate;
    }

    public LocalDateTime getManagerViewedTimestamp() {
        return managerViewedTimestamp;
    }

    public void setManagerViewedTimestamp(LocalDateTime managerViewedTimestamp) {
        this.managerViewedTimestamp = managerViewedTimestamp;
    }

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }

    public Consultant getConsultant() {
        return consultant;
    }

    public void setConsultant(Consultant consultant) {
        this.consultant = consultant;
    }

    public double getOverallScore() {
        return overallScore;
    }

    public void setOverallScore(double overallScore) {
        this.overallScore = overallScore;
    }

    public String getPros() {
        return pros;
    }

    public void setPros(String pros) {
        this.pros = pros;
    }

    public String getCons() {
        return cons;
    }

    public void setCons(String cons) {
        this.cons = cons;
    }
    
    public double getJoyScore() {
        return joyScore;
    }

    public void setJoyScore(double joyScore) {
        this.joyScore = joyScore;
    }

    public double getSimplicityScore() {
        return simplicityScore;
    }

    public void setSimplicityScore(double simplicityScore) {
        this.simplicityScore = simplicityScore;
    }

    public double getResultScore() {
        return resultScore;
    }

    public void setResultScore(double resultScore) {
        this.resultScore = resultScore;
    }

    public double getResponsibilityScore() {
        return responsibilityScore;
    }

    public void setResponsibilityScore(double responsibilityScore) {
        this.responsibilityScore = responsibilityScore;
    }

    public void calculateOverallScore() {
        double total = joyScore + simplicityScore + resultScore + responsibilityScore;
        this.overallScore = total / 4.0;
    }
}