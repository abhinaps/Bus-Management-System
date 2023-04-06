package com.pgs.brs.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pgs.brs.entity.Booking;
import com.pgs.brs.entity.Customer;
import com.pgs.brs.repository.BookingRepository;
import com.pgs.brs.repository.CustomerRepository;

@Service
public class CustomerServiceImpl implements CustomerService {
	@Autowired
	private CustomerRepository customerRepository;
	@Autowired
	private BookingRepository bookingRepository;

	@Override
	public Customer addCustomer(Customer customer) {
		return customerRepository.save(customer);
	}

	@Override
	public void deleteCustomer(Integer id) {
		customerRepository.deleteById(id);
	}

	@Override
	public Optional<Customer> getCustomerById(Integer id) {
		return customerRepository.findById(id);
	}

	@Override
	public List<Customer> getAllCustomer() {
		return (List<Customer>) customerRepository.findAll();
	}

	@Override
	public Long getNextId() {
		return customerRepository.count()+1;
	}

	@Override
	public List<Booking> getAllBooking(String name, String phone) {
		List<Customer> customerList = customerRepository.queryByNameAndPhone(name, phone);
		List<Booking> bookingList = new ArrayList<>(); 
		for(Customer c:customerList) {
			List<Booking> tempBookingList = bookingRepository.queryByCid(c.getId());
			bookingList.addAll(tempBookingList);
		}
		return bookingList;
	}

}
