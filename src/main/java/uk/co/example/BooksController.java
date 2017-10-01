package uk.co.example;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.*;

/**
 * Controller to demonstrate retuning data from an api to the frontend
 */
@RestController
public class BooksController {

	@RequestMapping(value = "/books", method = GET)
	public List<Book> getBooks() {
		ArrayList<Book> books = new ArrayList<>();
		books.add(new Book("1","Good Omens", "Neil Gaiman", "1990"));
		books.add(new Book("2", "Neverwhere", "Neil Gaiman", "1996"));
		books.add(new Book("3", "Stardust", "Neil Gaiman", "1999"));
		books.add(new Book("4", "American Gods", "Neil Gaiman", "2001"));
		books.add(new Book("5", "Coraline", "Neil Gaiman", "2002"));
		books.add(new Book("6", "Anansi Boys", "Neil Gaiman", "2005"));
		books.add(new Book("7", "InterWorld", "Neil Gaiman", "2007"));
		books.add(new Book("8", "The Graveyard Book", "Neil Gaiman", "2008"));
		books.add(new Book("9", "The Silver Dream", "Neil Gaiman", "2013"));
		books.add(new Book("10", "The Ocean at the End of the Lane", "Neil Gaiman", "2013"));
		books.add(new Book("11", "Eternity's Wheel", "Neil Gaiman", "2015"));
		books.add(new Book("12", "Norse Mythology", "Neil Gaiman", "2017"));
		return books;
	}

	public class Book {

		private String id;
		private String title;
		private String author;
		private String year;

		public Book(String id, String title, String author, String year) {
			this.id = id;
			this.title = title;
			this.author = author;
			this.year = year;
		}

		public String getId() {
			return id;
		}

		public void setId(String id) {
			this.id = id;
		}

		public String getTitle() {
			return title;
		}

		public void setTitle(String title) {
			this.title = title;
		}

		public String getAuthor() {
			return author;
		}

		public void setAuthor(String author) {
			this.author = author;
		}

		public String getYear() {
			return year;
		}

		public void setYear(String year) {
			this.year = year;
		}
	}

}
