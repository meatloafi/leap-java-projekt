package com.hiqleapdk.QA.controller;

import com.hiqleapdk.QA.model.Seller;
import com.hiqleapdk.QA.repository.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;

import java.util.List;


@RestController
@RequestMapping("api/sellers")
@CrossOrigin(origins = "http://localhost:8080")

public class SellerController {

    @Autowired
    private SellerRepository sellerRepository;

    @GetMapping
    public List<Seller> getAllSellers() {
        return sellerRepository.findAll();
    }

    @PostMapping
    public Seller createSeller(@RequestBody Seller seller) {
        return sellerRepository.save(seller);
    }

    @PutMapping("/{id}")
    public Seller updateSeller(@PathVariable Long id, @RequestBody Seller updatedSeller) {
        return sellerRepository.findById(id)
                .map(seller -> {
                    seller.setName(updatedSeller.getName());
                    seller.setEmail(updatedSeller.getEmail());
                    seller.setCompanies(updatedSeller.getCompanies());
                    return sellerRepository.save(seller);
                })
                .orElseThrow(() -> new RuntimeException("Seller not found with id " + id));
    }

    @DeleteMapping("/{id}")
    public void deleteSeller(@PathVariable Long id) {
        sellerRepository.deleteById(id);
    }
}
