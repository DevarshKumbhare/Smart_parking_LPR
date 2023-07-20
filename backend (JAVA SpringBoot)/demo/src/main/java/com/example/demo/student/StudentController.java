package com.example.demo.student;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@RestController
@RequestMapping(path = "api/v1/student")
@CrossOrigin(origins = "*")
public class StudentController {
    @Autowired
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    private final StudentService studentService;
    @GetMapping
    public List<Student> getStudents()
    {
        return studentService.getStudents();
    }

    @PostMapping
    public void RegisterNewStudent(@RequestBody Student student)
    {
        studentService.addNewStudent(student);
    }

    @DeleteMapping(path = "{license_plate}")
    public void deleteStudent(@PathVariable("license_plate") String license_plate)
    {
        studentService.deleteStudent(license_plate);
    }

    @PutMapping(path = "{license_plate}")
    public void updateStudent(@PathVariable("studentId") Long studentId, @RequestParam(required = false) String license_plate, @RequestParam(required = false) String parking_spot)
    {
        studentService.updateStudent(studentId,license_plate, parking_spot);
    }
}
