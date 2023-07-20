package com.example.demo.student;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StudentRepository extends JpaRepository<Student,Long> {

//SELECT * FROM student WHERE email=?(whatever we pass)
    @Query("SELECT s FROM Student s WHERE s.license_plate=?1")
    Optional<Student>findStudentByLicense_plate(String license_plate);
}
