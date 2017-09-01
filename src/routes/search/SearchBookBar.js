import React, {Component} from 'react'
import {Link} from 'react-router-dom'

/**
 *  @description This class represents a re-usable Stateless Class Component that extends the React Component to return a Search Bar component that
 *               floats or is layed out at the top of the Book Search page. It renders a virtual DOM that represents "Close" image coupled to a "Link"
 *               component used by the Router to provide a "deep-linking" mechanism to get navigated to another page or view based on the url. The url
 *               to which to navigate through is identified by the pathname variable. In this case, when the "Close" link is invoked, the Route will 
 *               switch to the main page or the MyReads page.
 * 
 *  Usage - This class is used as a JSX tag examined by the virtual DOM of the React subsystem. This is used as 
 *          a markup tag that prepresents a "Declarative" approach.
 * 
 *  @author  Rupen Gosrani 
 */
class SearchBookBar extends Component{
    /**
    * @description This is an event handler, triggered by the Text Input control(standard html form field) that intializes a onSearchTextChange callback on the 
    *              current "props" property of the SearchBookBar component as it is invoked by its parent component(which can be any component - the owner). 
    * @param {*} event implicitly passes in a DOM event by the html Text Input Control when a user types-in or keys-in the field through
    *            user interaction.       
    * @returns Does not return anything as it is meant to be used "implicitly" and passes in the keyed-in value from the Text Input control.
    */
    handleTextChange (event){
        this.props.onSearchTextChange(event.target.value);   
    }
   /**
     * @description A render function that returns a virtual DOM instance representing the shadow of a Link and HTML Text Input Control.
     *              The Link and the HTML Text Input control are JSX elements that are marked up to show a left arrow representing the Link component
     *              and the Text Input control representing the field to key-in a sequence of characters to search for.
     */
    render(){
        return (
            <div className="search-books-bar">
                <Link className="close-search" to={{pathname: '/'}}>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" 
                               onChange={(event) => this.handleTextChange(event)}
                               placeholder="Search by title or author"/>
                </div>
            </div>
        );
    }
}

export default SearchBookBar