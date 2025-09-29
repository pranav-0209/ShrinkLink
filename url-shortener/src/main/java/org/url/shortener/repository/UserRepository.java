package org.url.shortener.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.url.shortener.models.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {
    Optional<User> findByUsername(String username);
}
