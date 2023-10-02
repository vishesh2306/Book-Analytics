package dev.vishesh.books;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "Book")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Books {
    @Id
    private ObjectId id;
    private String Author;
    private String Title;
    private String Volume_Sales;
    private int Editions_Combined;
    private String Imprint;
    private String Publisher;
    private String Publication_Date;
    private String Genre;
    private int Price;
    private Double Ratings;
    private String Country;
}
