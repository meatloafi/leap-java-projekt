package com.hiqleapdk.QA.repository;

import com.hiqleapdk.QA.model.Consultant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConsultantRepository extends JpaRepository<Consultant, Long> {
}