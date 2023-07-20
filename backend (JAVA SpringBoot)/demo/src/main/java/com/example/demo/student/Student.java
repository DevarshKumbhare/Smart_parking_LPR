package com.example.demo.student;

import jakarta.persistence.*;

import java.lang.reflect.Constructor;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.Period;

@Entity
@Table
public class Student {
    @Id
    @SequenceGenerator(
            name = "student_sequence",
            sequenceName = "student_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "student_sequence"
    )
    private Long id;
    private String license_plate;
    private String parking_spot;
    private LocalDateTime exit_time;
    private LocalDateTime entry_time;
    private boolean status;
    @Transient
    private Integer age;

    public Student() {
    }

    public Student(Long id, String license_plate, String parking_spot, LocalDateTime entry_time, LocalDateTime exit_time, boolean status) {
        this.id = id;
        this.license_plate = license_plate;
        this.parking_spot = parking_spot;
        this.entry_time = entry_time;
        this.exit_time=exit_time;
        this.status=status;
    }

    public Student(String license_plate, String parking_spot, LocalDateTime entry_time, LocalDateTime exit_time, boolean status) {
        this.license_plate = license_plate;
        this.parking_spot = parking_spot;
        this.entry_time = entry_time;
        this.exit_time=exit_time;
        this.status=status;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLicense_plate() {
        return license_plate;
    }

    public void setLicense_plate(String license_plate) {
        this.license_plate = license_plate;
    }

    public String getParking_spot() {
        return parking_spot;
    }

    public void setParking_spot(String parking_spot) {
        this.parking_spot = parking_spot;
    }

    public LocalDateTime getExit_time() {
        return exit_time;
    }

    public void setExit_time(LocalDateTime exit_time) {
        this.exit_time = exit_time;
    }
    public LocalDateTime getEntry_time() {
        return entry_time;
    }

    public void setEntry_time(LocalDateTime entry_time) {
        this.entry_time = entry_time;
    }
    public boolean getStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", License_plate='" + license_plate + '\'' +
                ", parking_spot='" + parking_spot + '\'' +
                ", entry_time=" + entry_time +
                ", exit_time=" + exit_time +
                ", status=" + status +
                '}';
    }
}
