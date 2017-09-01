import React, { Component } from 'react'
import BookGrid from './../../components/grid/BookGrid'
import PropTypes from 'prop-types'

/**
 * @description This is a "Stateless Class Component" that renders each row in the MyReads Component, a BooksGrid Component, that 
 *              horizonally aligns each book from left to right with the title rendered dynamically at the top left side of each row. The title is
 *              acquired by the components props which is passed-down from the main App container.      
 *                  
 *              Caveat - From the starter project, since it was structured as a monolithic tree DOM, React recommends extracting different sections 
 *                       of the DOM as re-usable components.
 * 
 *  @author  Rupen Gosrani
 */
class BookShelf extends Component{
    //Used for type checking during development when node is running and "hot-reload" occurs as the file 
    //changes and saved. This is used to make sure that onUpdateContent is a function, a title is a required string, and a  
    //dataProvider is a required array. If a mistake occurs and the naming convention is changed, 
    //it will show in the developer tools console.
    static propTypes = { onUpdateContent: PropTypes.func,
                        title:PropTypes.string.isRequired,
                        dataProvider:PropTypes.array.isRequired};
    
    /**
     * @description An event handler that is triggered or invoked when the BooksGrid detects a refresh of its book item renderer. The event
     *              is chained starting from Book components book selection list, since the virtual DOM is nested with custom components. It is 
     *              implicitely called.
     * 
     * @param {*} shelf - The shelf is where the book changed its status from "Currently Reading, Want to Read, Read, or None" status.
     * @param {*} book - The book is the book object that will get passed to the BooksAPI update api.
     */
    onDataChange(shelf,book){
      this.props.onUpdateContent(shelf,book);
    }
    /**
     * @description A render function that returns a virtual DOM instance representing the shadow of a BookGrid component.
     */
    render(){
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <BookGrid onGridRefresh={(shelf,book) => this.onDataChange(shelf,book)} 
                           books={this.props.dataProvider}
                />
            </div>
        );
    }
}

export default BookShelf 