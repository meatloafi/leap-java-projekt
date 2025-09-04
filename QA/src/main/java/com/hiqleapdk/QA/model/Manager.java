package com.hiqleapdk.QA.model;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "managers")
public class Manager {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;

    
    @OneToMany(mappedBy = "manager")
    @JsonIgnoreProperties({"company", "seller", "manager"})
    private Set<Consultant> consultants;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Consultant> getConsultants() {
        return consultants;
    }
    public void setConsultants(Set<Consultant> consultants) {
        this.consultants = consultants;
    }
}

