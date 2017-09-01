import React, {Component} from 'react'
import * as BooksAPI from './../../BooksAPI'
import Content from './Content'
import { Header } from './Header'
import { Footer } from './Footer'
import {headerMetaData} from './../../bookSelections'
import PropTypes from 'prop-types'
/**
 * @description  This class is a "Statefull Class Component" that is rendered as a page view, representing one of two views. It renders a Header,
 *               Content, and a Footer component. This component is one of two containers that any user can navigate to. The Header component just renders
 *               a simple label within a div tag that represents a title of the container page. This is the first point of entry where the MyReads
 *               page or view will be "in-control" and will service its children. 
 * 
 *               The data state is the "single source of truth" for the MyReads component or container since it is a page or view that renders a header, 
 *               content, and a footer and because it is the parent container for the header, content, and footer components. 
 *
 * @author  Rupen Gosrani
 */
class MyReads extends Component{
    
    static propTypes = {shelves: PropTypes.array.isRequired};

    state = {
        data:[]
    }
    /**
     * @description A React lifecylce method that gets called when the MyReads page or view is attached to the DOM and calls a server-side BooksAPI 
     *              to retreive the all the books that will be displayed on the shelf/shelves based on each user. The results are then bubbled up to the
     *              App root component. The state is lifted up to the App.
     * 
     *              Caveat - The App component is just the root that wires in the different views to the browser. The single source of truth for results of retreiving
     *                       the list of books is not the App component because it is only used as a proxy in between the MyReads and BookSearch views. The reason is 
     *                       because of the cached results on the server-side might not have up-to-date information relating to the Books status. When the user 
     *                       navigates to the MyReads page from the BookSearch page and vice-versa, the Books status should be the same in both pages or views and
     *                       therefore the STATE GETS LIFTED UP. 
     *                       
     *                               
     */
    componentDidMount(){
        BooksAPI.getAll().then((data) => {
          this.setState((state) => ({
                data
           }));
           this.props.onAppUpdate(data);
        })

    }
    /**
     * @description This is an event handler that is executed implicitely when the user selects the books status from the BookSelectionList component which 
     *              is triggered through the onRefreshContent event dispatched from the Content component, bubbled from the BookShelf that owns the Book. 
     *              The handler then makes a server-side call to update the book's shelf and will receive a promise object over time when the response is successfully sent
     *              and updates this or the MyRead's state. The data then updates the App component to synchronize it with the App's currentBooks array.
     * 
     * @param {*} shelf - This is passed from the Content component  
     * @param {*} book 
     */
    updateMyReads(shelf,book){
        BooksAPI.update(book,shelf).then((response) => {
            book.shelf = shelf;
            this.setState((state) => {
                data: state.data.filter((b) => (b.id !== book.id)).concat(book)
            });
            this.props.onAppUpdate(this.state.data); 
        }).catch((error) =>{
               
        } );
    }
     /**
     * @description A render function that returns a virtual DOM instance representing the shadow of a Header, Content, and Footer components.
     *              The Header, Content, and Footer are JSX elements that are marked up to show a Header on top of the MyReads page, the main Content
     *              that contains the book shelves, and the Footer to show a Link component to navigate to the BookSearch page based on the path url. 
     *              The MyReads is more of a container and a controller rather than a component. 
     *              
     */
    render(){
        return (
          <div className="list-books">
            <Header header={headerMetaData}/>
            <Content shelves={this.props.shelves} 
                     data={this.state.data} 
                     onRefreshContent={(shelf,book) => this.updateMyReads(shelf,book)}
            /> 
            <Footer/>
          </div>
        );
   }
}

export default MyReads

