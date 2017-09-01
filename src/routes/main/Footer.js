import React from 'react'
import {Link} from 'react-router-dom'
/**
 * @description This is a "Stateless Functional Component" that is extracted from the MyReads component 
 *              that is layed out on bottom of a view or page. The purpose of this component is to provide a link to the BookSearch page
 *              managed by the BrowserRouter. The Link component uses the pathname to format the url to navigate to the BookSearch page.
 * 
 * @author  Rupen Gosrani
 */
const Footer = () => (
    <div className="open-search">
        <Link to={{pathname: '/search'}}>Search</Link>
    </div>
);

export {Footer}