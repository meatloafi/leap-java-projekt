package com.hiqleapdk.QA.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import java.time.LocalDate;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

@Entity
@Table(name = "quality_reports_v2")
public class QualityReport {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @CreationTimestamp
    private LocalDate createdDate;

    @UpdateTimestamp
    private LocalDate lastUpdatedDate;

    @ManyToOne
    @JoinColumn(name = "company_id")
    private Company company;

    @ManyToOne
    @JoinColumn(name = "consultant_id")
    private Consultant consultant;

    private String project;
    private String reportSummary;
    private double overallScore;
    private String feedback;
    private String pros;
    private String cons;
    private double resultsScore;
    private double reliabilityScore;
    private double collaborativityScore;
    private double initiativeScore;
    private double businessAcumenScore;

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

    public double getOverallScore() {
        return overallScore;
    }

    public void setOverallScore(double overallScore) {
        this.overallScore = overallScore;
    }

    public String getFeedback() {
        return feedback;
    }

    public void setFeedback(String feedback) {
        this.feedback = feedback;
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

    public double getResultsScore() {
        return resultsScore;
    }

    public void setResultsScore(double resultsScore) {
        this.resultsScore = resultsScore;
    }

    public double getReliabilityScore() {
        return reliabilityScore;
    }

    public void setReliabilityScore(double reliabilityScore) {
        this.reliabilityScore = reliabilityScore;
    }

    public double getCollaborativityScore() {
        return collaborativityScore;
    }

    public void setCollaborativityScore(double collaborativityScore) {
        this.collaborativityScore = collaborativityScore;
    }

    public double getInitiativeScore() {
        return initiativeScore;
    }

    public void setInitiativeScore(double initiativeScore) {
        this.initiativeScore = initiativeScore;
    }

    public double getBusinessAcumenScore() {
        return businessAcumenScore;
    }

    public void setBusinessAcumenScore(double businessAcumenScore) {
        this.businessAcumenScore = businessAcumenScore;
    }

    public void calculateOverallScore() {
    double total = resultsScore + reliabilityScore + collaborativityScore + initiativeScore + businessAcumenScore;
    this.overallScore = total / 5.0;
}
}