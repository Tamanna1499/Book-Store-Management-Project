import React from 'react'
import {Row, Col, Spin} from "antd"
import Book from '../Book'
import { useSelector } from 'react-redux'
import styles from '../BookList/styles'
import logo from '../../images/book-image.jpg';

const BookList = ({setSelectedId}) => {
  const books = useSelector((state)=>state.books)
  const user = JSON.parse(localStorage.getItem("profile"));
  const userId = user?.result?.id;
  console.log(books)
  if(!user){
    return(
      <div>
        <span>
        <img src={logo} alt="logo" style={styles.logoImg}/>
        </span>
      </div>
    )
  }
  return !books.length? 
  <div style={{textAlign:"center"}}>
    <Spin size="large"/>
  </div> :
  (
    <Row gutter={[20, 20]} style={styles.rows}>
        {
          books.map((book) => {
            return (
              <Col key ={book.id} lg={12} xl={8} xxl={6}>
                <Book setSelectedId={setSelectedId} book={book}/>
              </Col>
            )
          })
        }
    </Row>
  )
}

export default BookList