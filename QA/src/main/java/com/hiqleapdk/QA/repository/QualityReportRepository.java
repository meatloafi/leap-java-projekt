// Notera det uppdaterade paketnamnet
package com.hiqLeapdk.QA.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hiqLeapdk.QA.model.QualityReport;

public interface QualityReportRepository extends JpaRepository<QualityReport, Long> {
    
}