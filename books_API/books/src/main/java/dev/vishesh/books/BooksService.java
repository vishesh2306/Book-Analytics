package dev.vishesh.books;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.awt.print.Book;
import java.util.List;
import java.util.Optional;
@Service
public class BooksService {
    @Autowired
    private BooksRepository repository;

    public List<Books> findAllBooks() {
        return repository.findAll();
    }
    public Optional<Books> findBooksById(String id) {
        return repository.findBooksById(id);
    }
}
