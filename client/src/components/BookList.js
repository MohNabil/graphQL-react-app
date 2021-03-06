import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries'
import BookDetails from './BookDetails';

class BookList extends Component {
  state = {
      selected: null
  }

  displayBooks(){
      let data = this.props.data;
      console.log(this.props);
      if(data.loading){
          return(<div>Loading Books...</div>)
      }else{
          return data.books.map(book => {
              return(
                  <li key={book.id} onClick={e => {this.setState({selected: book.id})}}>{book.name}</li>
              )
          })
      }
  }
  render() {
    return (
      <div>
        <ul className='list'>
          {this.displayBooks()}
        </ul>
        <BookDetails bookId={this.state.selected}/>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);