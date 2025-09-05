// Notera det uppdaterade paketnamnet
package com.hiqleapdk.QA.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hiqleapdk.QA.model.QualityReport;

import java.util.List;


public interface QualityReportRepository extends JpaRepository<QualityReport, Long> {
    List<QualityReport> findByConsultantIdOrderByCreatedDateAsc(Long consultantId);
}