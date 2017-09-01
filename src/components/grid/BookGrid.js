import React, {Component} from 'react'
import BookItemRenderer from './BookItemRenderer'
import PropTypes from 'prop-types'
/**
 * @description This is a "Stateless Class Component" that renders an HTML ordered list, horizontally.
 *               The list will not prepend or show the numbers of each item. 
 *  @author  Rupen Gosrani
 */
export default class BookGrid extends Component{
    //Used for type checking during development when node is running and "hot-reload" occurs as the file 
    //changes and is saved. This is used to make sure that onGridRefresh() is a function, and the books array
    //is a required array, If a mistake occurs and the naming convention is changed, it will show an error 
    //in the developer tools console. 
    static propTypes = {onGridRefresh: PropTypes.func, books:PropTypes.array.isRequired};
    
    /**
     * @description An event handler that is triggered or invoked when the BookItemRenderer dispatches a onItemChange event. It is used to chain up
     *              the selected shelf from the Book status in the DOM tree to the main container pages, the MyReads page or the BookSearch page.
     * 
     * @param {*} data The data arguement represents the Books status("Currently Reading, Want to Read, or Read") detected by a change of selected book status 
     *                 in the BookItemRenderer. 
     * @param {*} item The item arguement represents the book information each mapped from the books array. The books array is a required property.  
     */
    dataChange(data,item){
        this.props.onGridRefresh(data,item);
    } 
    /**
     * @description A render function that returns a virtual DOM representing the shadow of an HTML Unordered list that maps each book
     *              from the books array into a BookItemRenderer. For more information on the BookItemRenderer, please see BookItemRenderer class
     *              component.  
     * 
     *              The BookItemRenderer is a "Stateless Class Component" that is passed as a JSX element in the render method. 
     */
    render(){
        return (
            <ol className="books-grid">
                {this.props.books.map((item) => 
                    <BookItemRenderer onItemChange={(data) => this.dataChange(data,item)} 
                        key={item.id} book={item} shelf={item.shelf}/>)}
            </ol>
        )
    }
}

