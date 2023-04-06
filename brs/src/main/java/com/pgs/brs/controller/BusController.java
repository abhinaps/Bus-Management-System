package com.pgs.brs.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.pgs.brs.entity.Bus;
import com.pgs.brs.service.BusService;

@Controller
public class BusController {
	@Autowired
	private BusService busService;
	
	public void addBus(Bus bus) {
		busService.addBus(bus);
	}
	
	public void getAllBus() {
		System.out.println( busService.viewAllBus());
	}
	
	public void deleteBus(Integer id) {
		busService.deleteBus(id);
	}
	
	public void getBusById(Integer id) {
		System.out.println( busService.getBusById(id));
	}
	
	public void getAllBusFromSrc(String src) {
		System.out.println( busService.getAllBusFromSrc(src));
	}
	
	public void getAllBusBetweenSrcAndDst(String src,String dst) {
		System.out.println( busService.getAllBusBetweenSrcAndDst(src, dst));
	}
	
	public void getSeatsById(Integer id) {
		System.out.println( busService.getSeatsById(id));
	}
	
	public void updateSeatsByBid(Integer newSeat,Integer bid) {
		busService.updateSeatsByBid(newSeat, bid);
	}
}
