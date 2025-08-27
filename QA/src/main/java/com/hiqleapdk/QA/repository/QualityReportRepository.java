// Notera det uppdaterade paketnamnet
package com.hiqleapdk.QA.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hiqleapdk.QA.model.QualityReport;

public interface QualityReportRepository extends JpaRepository<QualityReport, Long> {
    
}