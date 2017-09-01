import React from 'react'
/**
 * @description This is a "Stateless Functional Component" that renders each item as options to select from the BookSelectionList. This is a component
 *              defined outside of the BookSelectionList because if requirements change it will be easier to make modifications as needed and will
 *              reduce the chances of making unwanted modifcations to its parent, the BookSelectionList component.
 * 
 * @param {*} props These are immutable objects passed with a name and value to correlate the option item's name with the value. 
 * @author  Rupen Gosrani
 */
const BookSelectionItem = (props) => (
    <option value={props.value}>{props.name}</option>
);

export {BookSelectionItem}