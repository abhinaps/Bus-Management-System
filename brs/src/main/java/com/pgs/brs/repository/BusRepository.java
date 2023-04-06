package com.pgs.brs.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.pgs.brs.entity.Bus;

@Repository
public interface BusRepository extends CrudRepository<Bus, Integer> {
	
	public List<Bus> queryBySrc(String src);
	public List<Bus> queryBySrcAndDst(String src,String dst);
	
	@Transactional
	@Modifying
	@Query("update Bus set seat=:uptseat where id=:bid")
	public void updateSeatsByBid(@Param("uptseat") Integer uptseat,@Param("bid") Integer bid);
	
}
