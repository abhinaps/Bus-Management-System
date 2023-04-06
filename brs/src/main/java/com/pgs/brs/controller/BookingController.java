package com.pgs.brs.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import com.pgs.brs.entity.Booking;
import com.pgs.brs.entity.BookingId;
import com.pgs.brs.service.BookingService;

@Controller
public class BookingController {
	@Autowired
	private BookingService bookingService;
	public void addBooking(Booking booking) {
		System.out.println(bookingService.addBooking(booking));
	}

	public void deleteBooking(BookingId id) {
		bookingService.deleteBooking(id);
	}
	
	public void getBookingByBookingId(BookingId id) {
		System.out.println(bookingService.getBookingByBookingId(id));
	}
	
	public void getAllBooking() {
		System.out.println(bookingService.getAllBooking());
	}
	
	public void getBookingByBid(Integer bid) {
		System.out.println(bookingService.getBookingByBid(bid) );
	}
	
	public void bookTicket(Booking booking) {
		System.out.println(bookingService.bookTicket(booking));
	}
	
	public void cancelTicket(BookingId id) {
		bookingService.cancelTicket(id);
	}
}
