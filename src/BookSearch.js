import React from "react";
import BooksAPI from "./BooksAPI";


class BookSearch extends React.Component {

constructor(props){
    super(props)
    this.state {
        bookResults: []
    }
}

search(term){
    if(term){
        BooksAPI.search(term).then((results)=>{
            if(!results.error){
                this.setState({
                    bookResults: this.results
                })
            }else{
                this.setState({
                    bookResults: "No Results"
                })
            }
        })
    }
} 



    render(){
        return(
            
        )
    }

}

export default BookSearch