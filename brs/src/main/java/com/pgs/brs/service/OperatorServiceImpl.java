package com.pgs.brs.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pgs.brs.entity.Operator;
import com.pgs.brs.repository.OperatorRepository;

@Service
public class OperatorServiceImpl implements OperatorService {
	@Autowired
	private OperatorRepository operatorRepository;

	@Override
	public Operator addOperator(Operator operator) {
		return operatorRepository.save(operator);
	}

	@Override
	public void deleteOperator(Integer id) {
		operatorRepository.deleteById(id);
	}

	@Override
	public Optional<Operator> getOperatorById(Integer id) {
		return operatorRepository.findById(id);
	}

	@Override
	public List<Operator> getAllOprator() {
		return (List<Operator>) operatorRepository.findAll();
	}

}
