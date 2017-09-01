import React from 'react'

/**
 * @description This method represents a Stateless Functional Component that renders a image as a book cover. 
 * @param {*} props The props will be passed from the parent component.
 * 
 *  @author  Rupen Gosrani 
 */
const BookImage = (props) => (
    <div className="book-cover">
        <img style={{width:128, height: 193}} src={props.image} alt={props.description}/>
    </div>
)

export {BookImage}