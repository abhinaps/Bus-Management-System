package com.pgs.brs;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import com.pgs.brs.controller.BookingController;
import com.pgs.brs.controller.BusController;
import com.pgs.brs.controller.CustomerController;
import com.pgs.brs.controller.OperatorController;
import com.pgs.brs.entity.Booking;
import com.pgs.brs.entity.BookingId;

@SpringBootApplication
@ComponentScan(basePackages="com.pgs.brs com.pgs.brs.ui com.pgs.brs.controller com.pgs.brs.service com.pgs.brs.repository com.pgs.brs.entity")
public class BrsApplication implements CommandLineRunner {
	@Autowired
	private CustomerController customerController;
	
	@Autowired
	private OperatorController operatorController;
	
	@Autowired
	private BusController busController;
	
	@Autowired
	private BookingController bookingController;
	
	
	public static void main(String[] args)  {
		SpringApplication.run(BrsApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

	}

}
