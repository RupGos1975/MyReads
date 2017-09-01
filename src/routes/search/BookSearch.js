import React, {Component} from 'react'
import SearchBookBar from './SearchBookBar'
import BookGrid from './../../components/grid/BookGrid'
import * as BooksAPI from './../../BooksAPI'

/**
 * @description This class is a "Stateful Class Component" that is a page or view that renders a SearchBar, a component to search a book by title or author,
 *              and a BooksGrid component to render search results in a grid. This class holds the "single source of truth" since it is a page that is a view
 *              and renders a set of components. The searchBooks state contains the list of books in raw data that will get updated with returned values 
 *              retrieved from the service after each keyed input from the SearchBar Text Inuput control.  
 * 
 * @author  Rupen Gosrani
 */
class BookSearch extends Component {
   
    state = {
        searchBooks:[]
    }
    /**
     * @description This is an event handler for the SearchBookBar component that gets triggered each time a user types-in or keys-in the HTML Text Input control.
     *              The BooksAPI provides this component server-side access to persisted data relating to a list of books. This handler calls the search method
     *              which posts the keyed-in-query and retreives a list of books that contain the characters from the Text Input values.
     *              
     * @param {*} value The value passed in will be the sequence of characters keyed-in from the Text Input control of the SearchBookBar component. The value provides
     *                  an input to the search method of the BooksAPI and it returns a promise object when it receives an output over time. When the output returns,
     *                  the state is updated to the new results and then compares the currentBooks array to the searchBooks array to keep the results of each Book status
     *                  in-synch between the books in the shelves of the MyReads page and the BookSearch page. 
     */
    onSearchTextChange(value){
        BooksAPI.search(value).then((books) => {
            //The BookSearch components state is updated when the service call returns a resolved promise which is passes
            //a list of books. However, since the search server caches the results, there may not be any content returned
            //to the client resulting in a HTTP 204 status which will not contain an updated response resulting in stale data.
            this.setState((state) => {
                books.map((book) => {
                  let [b] = this.props.currentBooks.filter((b) =>  (b.id === book.id));
                  book.shelf = (b !== undefined) ? b.shelf : book.shelf;
              });
              state.searchBooks = books;
            });
        })
        .catch((err) => {
            // Handle any error that occurred in any of the previous promises in the chain. Resets the value to an empty array.
            // An error may occur and if it does we may need the previous state and not set it to an empty array.
            this.setState({searchBooks:[]});
        });
    }
    /**
     * @description The onDataChange   
     * 
     * @param {*} shelf 
     * @param {*} book 
     */
    onDataChange(shelf,book){
         BooksAPI.update(book,shelf).then((response) => {
             this.setState((state) => {
                searchBooks: state.searchBooks.map((prevBook) => {
                   prevBook.shelf = (prevBook.id === book.id) ? shelf : prevBook.shelf;
                   return prevBook;
               });
            }); 
         });
    }
    /**
     * @description A render function that returns a virtual DOM instance representing the shadow of a SearchBookBar and BooksGrid components.
     *              The SearchBookBar and BooksGrid are JSX elements that are marked up to show a search bar and a grid, layed out vertically.
     *              The SearchBookBar is floated on the top side of the BookSearch component. The BookSearch is more of a container and a 
     *              controller rather than a component.
     */
    render(){
        return (
            <div className="search-books">
                <SearchBookBar onSearchTextChange={(searchText) => this.onSearchTextChange(searchText)}/>
                <div className="search-books-results">
                    <BookGrid books={this.state.searchBooks} 
                              onGridRefresh={(shelf,book) => this.onDataChange(shelf,book)} 
                    />
                </div>
            </div>
        );
    }   
}

export default BookSearch