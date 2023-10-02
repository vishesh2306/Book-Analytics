package dev.vishesh.books;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public class BookService {
    @Autowired
    private BooksRepository repository;

    public List<Books> findAllBooks() {
        return repository.findAll();
    }
    public Optional<Books> findBooksById(String id) {
        return repository.findBooksById(id);
    }
}
