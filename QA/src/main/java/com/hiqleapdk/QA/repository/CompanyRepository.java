package com.hiqleapdk.QA.repository;

import com.hiqleapdk.QA.model.Company;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyRepository extends JpaRepository<Company, Long> {
}