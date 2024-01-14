package com.example.TestProiectBackend;

import com.example.TestProiectBackend.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
@RequiredArgsConstructor
public class PlannerApplication {

	//private final UserRepository userRepository;

	public static void main(String[] args) {
		SpringApplication.run(PlannerApplication.class, args);
	}



}
