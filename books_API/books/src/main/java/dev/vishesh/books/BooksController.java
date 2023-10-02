package dev.vishesh.books;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/books")
@CrossOrigin
public class BooksController {
    @Autowired
    private BooksService Service;

    @GetMapping
    public ResponseEntity<List<Books>> getBooks() {
        return new ResponseEntity<List<Books>>(Service.findAllBooks(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Books>> getSingleMovie(@PathVariable String id){
        return new ResponseEntity<Optional<Books>>(Service.findBooksById(id), HttpStatus.OK);
    }
}