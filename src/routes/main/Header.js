import React from 'react'
/**
 * @description This is a "Stateless Functional Component" that was extracted from the MyReads component for 
 *              applying a "seperating of concerns" or modularity funadmental. It is used as a re-usable component
 *              layed-out on the top side of a view or page. This component can get exported by passing the Header as an object 
 *              in a "Object Short Hand" initializer as part of the "export" statement to use in another component. 
 *              
 *              The {props.children} is added so that if requirements change or there are enhancement requests from the BA or 
 *              Business Analyst, the component can grow to add extra functionality. For example, to enhance user experience, 
 *              the header can provide a checkbox group to show one shelf at a time, or two shelves at a time. The extra component's can 
 *              be added directly to the JSX such as:  
 *                  
 *              <Header>
 *                  <input type="checkbox" name"Currently Reading" value="currentlyReading">Currently Reading</checbkox>
 *                  <input type="checkbox" name"Want to Read" value="wantToRead"/>Want to Read</checkbox>
 *                  <input type="checkbox" name"Read" value="read"/>Read</checkbox>
 *              </Header>
 *           
 *              
 * @param {*} props The "props" property will be passed-down from its holder or container. 
 * 
 * @author  Rupen Gosrani
 */
const Header = (props) => (
    <div className="list-books-title">
        <h1>{props.header.title}</h1>
        {props.children}
    </div>
);

export {Header};