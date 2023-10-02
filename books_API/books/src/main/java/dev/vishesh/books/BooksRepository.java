package dev.vishesh.books;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BooksRepository extends MongoRepository<Books, ObjectId> {
    Optional<Books> findBooksById(String id);
}
