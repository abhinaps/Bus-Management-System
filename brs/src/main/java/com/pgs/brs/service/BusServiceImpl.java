package com.pgs.brs.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pgs.brs.entity.Bus;
import com.pgs.brs.repository.BusRepository;

@Service
public class BusServiceImpl implements BusService {
	@Autowired
	private BusRepository busRepository;

	@Override
	public Bus addBus(Bus bus) {
		return busRepository.save(bus);
	}

	@Override
	public List<Bus> viewAllBus() {
		return (List<Bus>) busRepository.findAll();
	}

	@Override
	public void deleteBus(Integer id) {
		busRepository.deleteById(id);
	}

	@Override
	public Optional<Bus> getBusById(Integer id) {
		return busRepository.findById(id);
	}

	@Override
	public List<Bus> getAllBusFromSrc(String src) {
		return busRepository.queryBySrc(src);
	}

	@Override
	public List<Bus> getAllBusBetweenSrcAndDst(String src, String dst) {
		return busRepository.queryBySrcAndDst(src, dst);
	}

	@Override
	public void updateSeatsByBid(Integer newSeat, Integer bid) {
		busRepository.updateSeatsByBid(newSeat, bid);
	}

	@Override
	public Integer getSeatsById(Integer id) {
		return this.getBusById(id).get().getSeat();
	}
	

}
