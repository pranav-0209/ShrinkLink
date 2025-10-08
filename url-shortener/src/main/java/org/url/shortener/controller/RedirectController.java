package org.url.shortener.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.url.shortener.models.UrlMapping;
import org.url.shortener.service.UrlMappingService;

@RestController
@RequiredArgsConstructor
public class RedirectController {

    private final UrlMappingService urlMappingService;

    @GetMapping("/{shortUrl}")
    public ResponseEntity<Void> redirect(@PathVariable String shortUrl) {
        UrlMapping urlMapping = urlMappingService.getOriginalUrl(shortUrl);
        if (urlMapping != null) {
            HttpHeaders headers = new HttpHeaders();
            headers.add("Location", urlMapping.getOriginalUrl());
            return ResponseEntity.status(302).headers(headers).build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}