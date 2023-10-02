package dev.vishesh.books;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin()
@RequestMapping("/api/author")

public class AuthorController {
    @Autowired
    private AuthorService Service;

    @GetMapping
    public ResponseEntity<List<Author>> getAuthor() {
        return new ResponseEntity<List<Author>>(Service.findAllAuthor(), HttpStatus.OK);
    }


}
