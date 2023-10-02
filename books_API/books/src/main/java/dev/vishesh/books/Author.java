package dev.vishesh.books;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Author")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Author {
    @Id
    private ObjectId id;
    private String Name;
    private String Contact_Number;
    private String Email;
    private int ZipCode;
    private String Address;
    private String City;
    private int Age;
}
