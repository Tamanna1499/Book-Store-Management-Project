import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import BookList from "../BookList";
import BookForm from "../BookForm";
import { Layout } from "antd";
import styles from "./styles";
import {getBooks} from "../../actions/books";

const {Sider, Content} = Layout;
const Home = () => {
    const dispatch = useDispatch();
    const [selectedId,setSelectedId] = useState(null);
    useEffect(()=>{
        dispatch(getBooks());
    }, [dispatch]);
    
    return (
        <Layout>
            <Sider style={styles.sider} width={400}>
                <BookForm selectedId={selectedId} setSelectedId={setSelectedId}/>
            </Sider>
            <Content style={styles.content}>
                <BookList setSelectedId={setSelectedId}/>
            </Content>
        </Layout>
    )
}

export default Home;