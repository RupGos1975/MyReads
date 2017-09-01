import React, { Component } from 'react'
import BookShelf from './BookShelf'
import PropTypes from 'prop-types'
/**
 * @description This is a "Stateless Class Component" that renders a row of BookShelf containers. The shelves array that is attached to the 
 *              "props" object, maps each shelf as a container that renders a title and a horizontal list of Books or Book components.
 *              
 * @author  Rupen Gosrani
 */
export default class Content extends Component {
    //Used for type checking during development when node is running and "hot-reload" occurs as the file 
    //changes and saved. This is used to make sure that shelves is a required array and a data is a required array.
    //If a mistake occurs and the naming convention is changed, it will show in the developer tools console.
    static propTypes = {shelves: PropTypes.array.isRequired,data:PropTypes.array.isRequired};

    /**
    * @description This method is called implicitely, by the BookShelf child component. 
    * @param {string} shelf A string value representing what the Book status is.
    * @param {object} book An object that contains information about the book such as the authors, shelf, image links, etc.
    */
    refreshContent(shelf,book){
        this.props.onRefreshContent(shelf,book);
    }
     /**
     * @description A render function that returns a virtual DOM instance representing the shadow a BookShelf container. 
     *              
     */
    render(){
        let {shelves,data} = this.props;
        return (
            <div className="list-books-content">
                {
                    shelves.map((shelf,index) => (
                        <div key={index}>
                            <BookShelf title={shelf.bookShelfTitle} 
                                       onUpdateContent={(shelf,book) => this.refreshContent(shelf,book)}
                                       dataProvider={data.filter((book) => (book.shelf === shelf.bookShelfKey))} 
                            />
                        </div> 
                    )
                )}
            </div>
        )
    }

}



