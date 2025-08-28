package com.hiqleapdk.QA.model;

import java.time.LocalDate;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Table(name = "quality_reports_v2")
@Entity
public class QualityReport {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    // Basic info
    private String customer;
    private String consultant;
    private double overallScore;

    // Text Feedback
    private String feedback;
    private String pros;
    private String cons;

    // Scores
    private double resultsScore;
    private double reliabilityScore;
    private double collaborativityScore;
    private double initiativeScore;
    private double businessAcumenScore;

    // Date
    @CreationTimestamp
    private LocalDate createdDate;

    @UpdateTimestamp
    private LocalDate lastUpdatedDate;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCustomer() {
        return customer;
    }

    public void setCustomer(String customer) {
        this.customer = customer;
    }

    public String getConsultant() {
        return consultant;
    }

    public void setConsultant(String consultant) {
        this.consultant = consultant;
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
}