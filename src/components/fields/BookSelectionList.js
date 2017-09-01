import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { BookSelectionItem } from './BookSelectionItem'

/**
 * @description This is a "Stateless Class Component" that is a composite of the Book Component. As per the "SOLID" principles or the 
 *              "single responsibility" concept, this component is one of many to compose the Book component. 
 * 
 *  @author  Rupen Gosrani
 */
class BookSelectionList extends Component{
    //Used for type checking during development when node is running and "hot-reload" occurs as the file 
    //changes and is saved. This is used to make sure that onBookSelection is a required function and the dataProvider 
    //is a required array. If a mistake occurs and the naming convention is changed, it will show an error in the developer tools console. 
    static propTypes = {onBookSelection: PropTypes.func.isRequired, dataProvider:PropTypes.array.isRequired};
     
    /**
     * @description This method is called implicitely by the BookSelectionItem component and not is explicitely called. It is a proxy pattern that 
     *              is used as an interceptor to pass the selected Book status item to its parent component.
     * @param {*} event The event value will be passed-in from the html select control through user interaction. When the user selects 
     *                  an option from the control, which can be "Currently Reading", "Want to Read", "Read", or "None", the value is then
     *                  bubbled up to the Book component.
     */
    onBookSelection(event){
        this.props.onBookSelection(event.target.value);
    }
    /**
     * @description A render function that returns a virtual DOM representing the shadow of an BookSelectionItem that is visible when
     *              the user clicks on the green arrow button, which is rendered for each book aligned to the bottom left side of the book
     *              component.
     * 
     *              Functional programming instead of Imperative Programming...
     *              Notice the "event" object passed in the arguments and "resulting into" the onBookSelection() event handler is
     *              declared inline into one line. 
     * 
     *              The BookSelectionItem, a "Stateless Functional Component", is passed as a JSX element in the render method. 
     */
    render(){
        return (
            //In React, when a collection-type user interface control is examined through the virtual DOM such as a unordered or ordered list 
            //element(<ul> or <ol> ), it's children(<li>) needs to be identifed as a unique element and a "key" property is required to be a 
            //unique value to determine its uniqueness.  
            <select value={this.props.value} onChange={(event) => this.onBookSelection(event)}>
                {this.props.dataProvider.map((option) => 
                    <BookSelectionItem key={option.selectionId} name={option.fieldLabel} value={option.fieldValue} />
                )}
            </select>
        )
    }
}

export default BookSelectionList