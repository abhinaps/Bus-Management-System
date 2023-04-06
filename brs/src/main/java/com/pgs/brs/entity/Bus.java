package com.pgs.brs.entity;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="busbrs")
public class Bus {
	@Id
	private Integer id;
	private String name;
	private String src;
	private String dst;
	private Float fare;
	private Integer seat;
	private Integer operator;
	private Timestamp dptime;
	private Timestamp artime;
	
	

	@Override
	public String toString() {
		return "Bus [id=" + id + ", name=" + name + ", src=" + src + ", dst=" + dst + ", fare=" + fare + ", seat="
				+ seat + ", operator=" + operator + ", dptime=" + dptime + ", artime=" + artime + "]";
	}
	public Bus() {
		super();
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSrc() {
		return src;
	}
	public void setSrc(String src) {
		this.src = src;
	}
	public String getDst() {
		return dst;
	}
	public void setDst(String dst) {
		this.dst = dst;
	}
	public Timestamp getDptime() {
		return dptime;
	}
	public void setDptime(Timestamp dptime) {
		this.dptime = dptime;
	}
	public Timestamp getArtime() {
		return artime;
	}
	public void setArtime(Timestamp artime) {
		this.artime = artime;
	}

	public Float getFare() {
		return fare;
	}

	public void setFare(Float fare) {
		this.fare = fare;
	}

	public Integer getSeat() {
		return seat;
	}

	public void setSeat(Integer seat) {
		this.seat = seat;
	}
	public Integer getOperator() {
		return operator;
	}
	public void setOperator(Integer operator) {
		this.operator = operator;
	}
	public Bus(Integer id, String name, String src, String dst, Float fare, Integer seat, Integer operator,
			Timestamp dptime, Timestamp artime) {
		super();
		this.id = id;
		this.name = name;
		this.src = src;
		this.dst = dst;
		this.fare = fare;
		this.seat = seat;
		this.operator = operator;
		this.dptime = dptime;
		this.artime = artime;
	}
}
