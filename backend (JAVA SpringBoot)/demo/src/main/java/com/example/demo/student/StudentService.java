package com.example.demo.student;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class StudentService {
    @Autowired
    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }
    private final StudentRepository studentRepository;
    public List<Student> getStudents()
    {
        return studentRepository.findAll();
//        return List.of(
//                new Student(
//                        1L,
//                        "Mariam",
//                        "hello@gmail.com",
//                        LocalDate.of(2000, Month.JANUARY, 5),
//                        21
//                )
//        );
    }

    public void addNewStudent(Student student) {
        Optional<Student> studentOptional= studentRepository.findStudentByLicense_plate(student.getLicense_plate() );
        if(studentOptional.isPresent())
        {
            throw new IllegalStateException("license plate taken");
        }
        studentRepository.save(student);
    }

    public void deleteStudent(String email) {
        Student student= studentRepository.findStudentByLicense_plate(email).orElseThrow(()->new IllegalStateException("id does not exist") );
//        if(!exists)
//        {
//            throw new IllegalStateException("student with id "+studentId+" does not exit");
//        }
//        studentRepository.deleteById(studentId);

        studentRepository.delete(student);
    }

    @Transactional
    public void updateStudent(Long studentId, String license_plate, String parking_spot) {
        Student student= studentRepository.findById(studentId).orElseThrow(()->new IllegalStateException("id does not exist") );

        if(license_plate!=null && license_plate.length()>0 && !Objects.equals(student.getLicense_plate(),license_plate))
        {
            student.setLicense_plate(license_plate);
        }

        if(parking_spot!=null && parking_spot.length()>0 && !Objects.equals(student.getParking_spot(),parking_spot))
        {
            Optional<Student> studentOptional= studentRepository.findStudentByLicense_plate(license_plate);
            if(studentOptional.isPresent())
            {
                throw new IllegalStateException("email taken");
            }
            student.setLicense_plate(license_plate);
        }
    }
}
