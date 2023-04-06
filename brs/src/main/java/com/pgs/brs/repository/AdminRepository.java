package com.pgs.brs.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.pgs.brs.entity.Admin;

@Repository
public interface AdminRepository extends CrudRepository<Admin, String> {

}
