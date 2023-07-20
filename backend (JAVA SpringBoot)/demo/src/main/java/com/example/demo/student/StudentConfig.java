package com.example.demo.student;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.Month;
import java.util.List;

import static java.time.Month.JANUARY;

@Configuration
public class StudentConfig {
    @Bean
    CommandLineRunner commandLineRunner(StudentRepository repository){
        return args -> {
            Student mariam=new Student(
                        "MH04JS2942",
                        "L3S02",
                        LocalDateTime.of(2017, 2, 13, 15, 56),
                        null,
                    true
                );

            Student alex=new Student(
                    "MH04JS2975",
                    "L3S03",
                    LocalDateTime.of(2017, 2, 13, 15, 56),
                    LocalDateTime.of(2018, 2, 13, 15, 56),
                    true
            );



            repository.saveAll(
                    List.of(mariam,alex)
            );
        };
    }
}
