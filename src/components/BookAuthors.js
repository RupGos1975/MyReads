import React from 'react'

/**
 *  This method represents a Stateless Functional Component as it provides a plain list control of authors as a simple  
 *  within "Arrow Functions". This is implemented 
 *  through arrow functions to conform to ES6 standards, but more importantly,   
 * 
 *  It only does DOT (Do One Thing) and that is to draw or render an ordered list 
 * 
 *  Usage - This class is used as a JSX tag examined by the virtual DOM of the React subsystem. This is used as 
 *  a markup tag that prepresents a "Declarative" approach. 
 * 
 *   ex. When used as a mark-up tag or as a JSX, it is used like:
 *       <BookAuthors authors="{this.props}"/>
 *                      or
 *       <BookAuthors authors="{this.props}"></BookAuthors>
 *       - BookAuthors is the the element.
 *       - authors is the attribute of the BookAuthors element.  
 * 
 *  Also note that by defining the component outside the class, also optimizes the usage for the "props"
 *  property to avoid using the "this" reference. This improves maintanence.
 * 
 *  NOTE - When no state management or event handling is used and just needs to render a component, Stateless
 *         Functional Components are best utilized and are re-usable. The reason why its declared in this file, Book.js,
 *         is because the need to "extract components" into separate modules makes managing the code better. This will
 *         lead to faster debugging and making modifications will be easier, thus reducing the time to make 
 *         modifications.
 *  @author  Rupen Gosrani
 */
const BookAuthors = (props) => {
    //A Functional programming technique used to tell the javascript engine what it should do with the authors
    //collection. Since map is referenced to the authors array attained by the "props", extra code to provide 
    //the "how-to's" of how iteration occurs, is done by the javascript engine. 
    const authorList = props.authors.map((author) =>
        <li style={{padding:0,margin:'0px 0px 0px -40px'}} key={author}>{author}</li>
    );
    return (
        <div className="book-authors"> 
            <ol style={{listStyleType: 'none'}}>
                {authorList}
            </ol>
        </div>
    );
};

export {BookAuthors}