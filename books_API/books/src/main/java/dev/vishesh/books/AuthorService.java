package dev.vishesh.books;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class AuthorService {
    @Autowired
    private AuthorRepository repository;

    public List<Author> findAllAuthor() {
        return repository.findAll();
    }

}
