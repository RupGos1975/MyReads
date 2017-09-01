/**
 *  @author  Rupen Gosrani
 */
const bookSelections = [
    {
        selectionId:1,
        fieldLabel: "Move to...",
        fieldValue:"none"
    },
    {
        selectionId:2,
        fieldLabel: "Currently Reading",
        fieldValue:"currentlyReading"
    },
    {
        selectionId:3,
        fieldLabel: "Want to Read",
        fieldValue:"wantToRead"
    },
    {
        selectionId:4,
        fieldLabel: "Read",
        fieldValue:"read"
    },
    {
        selectionId:5,
        fieldLabel: "None",
        fieldValue:"none"
    } 
];

const bookShelfList = [
    {
        bookShelfId:1,
        bookShelfTitle:'Currently Reading',
        bookShelfKey:"currentlyReading"
    },
    {
        bookShelfId:2,
        bookShelfTitle:'Want To Read',
        bookShelfKey:"wantToRead"
    },
    {
        bookShelfId:3,
        bookShelfTitle:'Read',
        bookShelfKey:"read"
    }
    
];

/* const myReadsFeatures=[
    {
        checkbox:{
            enable:true,
            checkboxItem:[
                {
                    name:'Currently Reading',
                    value:'checked'
                },
                {
                    name:'Want To Read',
                    value:'checked'
                },
                {
                    name:'Read',
                    value:'checked'
                }

            ]

    }

}]; */

const headerMetaData = {
    title:'My Reads'
}

export {bookSelections,bookShelfList,headerMetaData}