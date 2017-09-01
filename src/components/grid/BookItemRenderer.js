import React, {Component} from 'react'
import {Book} from '../Book'
import PropTypes from 'prop-types'

/**
 * @description This is a "Stateless Class Component" that is used as an item renderer for each row in the books shelf.
 *              It renders a HTML List Item that wraps the Book Component to draw each shelf vertically in the BookGrid Component.
 *              
 *              This class was written as a class component because at any point when this application grows and enhancements are made
 *              adding other children will be faster and easier without producing defects to the other components.
 *              For example, if this application grows by adding a shopping cart feature to buy a book, then a button element is added
 *              as a JSX element declared after the Book JSX element.
 *              
 * @author  Rupen Gosrani     
 */
export default class BookItemRenderer extends Component {
    //Used for type checking during development when node is running and "hot-reload" occurs as the file 
    //changes and is saved. This is used to make sure that the book is a required array. If a mistake occurs 
    //and the naming convention is changed, it will show an error in the developer tools console. 
     static propTypes = {book: PropTypes.object.isRequired};
   
    /**
     * @description An event handler that is triggered or invoked when the Book dispatches a onCurrentStatus event.
     *
     * @param {*} destination Represents the shelf identification such as "Currently Reading, Want to Read, Read, or none".
     */
    belongsTo(destination){
        this.props.onItemChange(destination);
    }
    /**
     * @description A render function that returns a virtual DOM representing the shadow of a Book component.
     */
    render(){
        let {title,authors,imageLinks,shelf,description} = this.props.book;
        return (
            <li><Book onCurrentStatus={(newShelf) => this.belongsTo(newShelf)} 
                      title={title} 
                      authors={authors} 
                      image={imageLinks.thumbnail}
                      description={description}
                      shelf={shelf}
                />
            </li>
        );
    } 
}
