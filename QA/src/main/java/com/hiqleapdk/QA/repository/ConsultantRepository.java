package com.hiqleapdk.QA.repository;

import com.hiqleapdk.QA.model.Consultant;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List; 

public interface ConsultantRepository extends JpaRepository<Consultant, Long> {
    List<Consultant> findByManagerId(Long managerId);

    List<Consultant> findByCompanyId(Long companyId);
}