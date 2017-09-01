/**
 *  The App class is the entry point to provide the browser a main stage to render this application, 
 *  in the context of MyReads application, as a single page application, or SPA, that adheres to a 
 *  module pattern. It serves as the root class or component in terms of DOM.
 * 
 *  NOTE - The classes written "here-in" or "here-of" will be using as much ES6 as possible, which
 *         means that classes will be identified as "class" and inherritence will be implemented by the "extends" key word
 *         for the classes need handle state management and event handling.
 * 
 *  The application is using React as its javasript framework to handle the "view" in MVC, an abbrevated
 *  term for Model-View-Controller, to present the browser a tree of components mediated by the React virtual DOM. This 
 *  application extends the React Component, offered from react pakackage, implemented using ES6,
 *  or ECMAScript 6. It uses key words such as "class" and "extends" to allow more of OOP/D, or Object Oriented Principles/Development
 *  to be practiced. 
 *    This class will provide a collection of modules each viewable one at a time in a navigational hierarchy navigated by
 *  Routes.
 * 
 * *
 * @author  Rupen Gosrani
 * 
 */
import React, {Component} from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import MyReads from './routes/main/MyReads'
import BookSearch from './routes/search/BookSearch'
import {bookShelfList} from './bookSelections'

/**
 * @description This is the main page or view that will render the MyReads page and BookSearch page and will service
 *              as the navigation between page view changes via Route component. The BookSearch page and the MyReads page 
 *              will not be viewed in the same page at the same time.
 *              
 * 
 */
class App extends Component {
  //State property declared to manage the currentBooks array used to synchronize the book current state between
  //the MyReads page and the BookSearch page. The reason why the synchronization is needed is because the BookSearch page may not show the updated
  //book status that gets updated from the MyReads Component when the user selects an list item from the BookSelectionList. 
  //The App class or component is a "single source of truth" because MyReads page passes down the currentBooks array to the BookSearch page
  //after a book shelf has changed in status. If the user navigates to the BookSearch page, the Books that are found in the search may not have the
  //updated Book shelf status.
  state = { 
     currentBooks:[]
  }
/**
  * @description Using state management to proxy-in the books collection controlled by this or "App" class
  *              that can get updated through time(as states are mutable), between the MyReads Page and the BookSearchPage.
  * @param {*} books The books array passed up from the My Reads page and is delegated to the state and passed down
                     to the Book Search page if and when the user navigates to the Book Search page.
  */
  onAppUpdate(books){
    //Used "Arrow Functional Keys" as a ways and means to write more "Functional" based javascript rather than
    //"Imperative" style programming.  
    this.setState((state) => {
       state.currentBooks = books;
    });
  }
  /**
   * @description The App's Virtual DOM Layout render interpretation of the Browser DOM that is returned by the render method.
   *              An alternate way is to use createElement() method via React namespace. Each component is viewed by the BrowserRouter that is 
   *              linked by a matching url on each of the pages routes.  
   */
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <MyReads onAppUpdate={(currentBooks) => this.onAppUpdate(currentBooks)}  
                     shelves={bookShelfList}/>
        )}/>
        <Route path="/search" render={({history}) => (
            <BookSearch currentBooks={this.state.currentBooks} />
           
            )
         
        }/>
      </div>
    )
  }
}

export default App
