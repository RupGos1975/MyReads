import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {BookAuthors} from './BookAuthors'
import {BookImage} from './BookImage'
import {bookSelections} from './../bookSelections'
import BookSelectionList from './fields/BookSelectionList'

/**
 * @description This class represents a "Stateless Class Component" as it renders a markup of Book children consisting of a BookImage, a 
 *              BookSelectionList, and a BookAuthors as a "Composite" component. This practice is one of the fundamentals of React. The Book
 *              class composes a Book component by rendering an image cover of the book, a selection list of the status of the book, and a 
 *              list of authors.   
 * 
 *  @author  Rupen Gosrani             
 */
export class Book extends Component{
    //Used for type checking during development when node is running and "hot-reload" occurs as the file 
    //changes and saved. This is used to make sure that onCurrentStatus is a required function and a image is a required string 
    //If a mistake occurs and the naming convention is changed, it will show in the developer tools console.
    static propTypes = {onCurrentStatus: PropTypes.func,image:PropTypes.string.isRequired};
    
    /**
     * @description The is an event handler that gets executed implicitely 
     * @param {*} value 
     */
    onBookStatus(value){
        this.props.onCurrentStatus(value);
    }
    /**
     * @description A render function that returns a virtual DOM representing the shadow of a BookImage, BookSelectionList,
     *              and BookAuthors component.
     */
    render(){
        return (
             <div className="book">
                <div className="book-top">
                    <BookImage image={this.props.image} description={this.props.description}/>
                    <div className="book-shelf-changer">
                        <BookSelectionList onBookSelection={(value) => this.onBookStatus(value)}
                                           dataProvider={bookSelections}
                                           value={this.props.shelf}
                        />
                    </div>   
                </div>
                <div className="book-title">{this.props.title}</div>
                <BookAuthors authors={this.props.authors}/>   
            </div>     
        )
    }
}

