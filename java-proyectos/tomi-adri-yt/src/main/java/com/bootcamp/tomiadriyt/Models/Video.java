package com.bootcamp.tomiadriyt.Models;
import java.math.BigInteger;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "Videos")
public class Video {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true)
	private Integer id;
	
	@NotNull(message = "el titulo no puede estar vacio")
	private String title;
	
	private String category;
	
	@Column(nullable = true)
	private String description;
	
	@Column(unique = true)
	private String url;
	
	private BigInteger views;
	
	private BigInteger amountLike;
	
	private BigInteger amountDislike;
	
	private List<Integer> valoration;
	
	private Double avgValoration;

	public Video(Integer id, String title, String category, String url, BigInteger views, BigInteger amountLike,
			BigInteger amountDislike, List<Integer> valoration, Double avgValoration) {
		this.id = id;
		this.title = title;
		this.category = category;
		this.description = "";
		this.url = url;
		this.views = views;
		this.amountLike = amountLike;
		this.amountDislike = amountDislike;
		this.valoration = valoration;
		setAvgValoration();
	}

	public Video() {
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public BigInteger getViews() {
		return views;
	}

	public void setViews(BigInteger views) {
		this.views = views;
	}

	public BigInteger getAmountLike() {
		return amountLike;
	}

	public void setAmountLike(BigInteger amountLike) {
		this.amountLike = amountLike;
	}

	public BigInteger getAmountDislike() {
		return amountDislike;
	}

	public void setAmountDislike(BigInteger amountDislike) {
		this.amountDislike = amountDislike;
	}

	public List<Integer> getValoration() {
		return valoration;
	}

	public void setValoration(List<Integer> valoration) {
		this.valoration = valoration;
	}

	public Double getAvgValoration() {
		return avgValoration;
	}

	public void setAvgValoration() {
		double acum = 0;
		
		for (Integer valoration : valoration) {
			acum += valoration;
		}
		this.avgValoration = (valoration.size() > 0) ? (acum/this.valoration.size()) : 0.0;
	}
	
	
	
	
	
	
}
