package com.hiqleapdk.QA.model;

import jakarta.annotation.Generated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

public class QualityReport {
    @Id
    @GeneratedValue(strategy = GenerationType.Auto)
    private Long id;

    private String customer;
    private String consultant;
    private String seller;
    private LocalDate reportDate;

    // Feedback
    private String result;
    private String responsibility;
    private String iniative;
    private String punctuality;
    private String reliablity;
    private String techincalKnowledge;
    private String functionalKnowledge;
    private String followUp;

    // Feedback Score (1 to 10)
    private int satisfactionRating;

}
