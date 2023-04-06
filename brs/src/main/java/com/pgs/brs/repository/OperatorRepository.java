package com.pgs.brs.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.pgs.brs.entity.Operator;
@Repository
public interface OperatorRepository extends CrudRepository<Operator, Integer>{

}
