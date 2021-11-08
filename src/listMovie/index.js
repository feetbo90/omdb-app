import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getDataPost } from "../store/post/actions";
import { getDetail } from "../store/details/actions";
import {
    Layout,
    Row,
    Alert,
    Modal
} from 'antd';
import 'antd/dist/antd.css';
import HeaderBox from '../components/Header/HeaderBox';
import SearchBox from '../components/Search/SearchBox';
import ColCardBox from "../components/ColCardBox/ColCardBox";
import Loader from '../components/Loader/Loader';
import DetailBox from "../components/DetailBox/DetailBox";
const { Content, Footer } = Layout;

function ListMovie() {
    const dispatch = useDispatch();
    const {posts, loading, error} = useSelector((state) => state.posts);
    const {detail, loadingDetail} = useSelector((state) => state.detail);

    const [q, setQuery] = useState('batman');
    const [activateModal, setActivateModal] = useState(false);

    useEffect(() => {
        dispatch(getDataPost(q))
    }, [dispatch, q])

    const clickHandler = (value) => {
        dispatch(getDetail(value))
        setActivateModal(true)
        console.log(`value : ${JSON.stringify(value)}`)
    }

    return (
        <Layout className="layout">
            <HeaderBox/>
            <Content style={{ padding: '0 50px'}}>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                    <SearchBox searchHandler={setQuery} />
                    <br />
                    <Row gutter={16} type="flex" justify="center">
                        { (loading && loadingDetail) &&
                        <Loader />
                        }

                        { error !== null &&
                        <div style={{margin: '20px 0'}}>
                            <Alert message={error} type="error" />
                        </div>
                        }
                        { posts !== null && posts.length > 0 && posts.map((result, index) => (
                            <ColCardBox
                                clickHandler={(value) => clickHandler(value)}
                                key={index}
                                {...result}
                            />
                        ))}
                    </Row>
                </div>
                <Modal
                    title='Detail'
                    centered
                    visible={activateModal}
                    onCancel={() => setActivateModal(false)}
                    footer={null}
                    width={800}
                    >
                    { loadingDetail === false ?
                        (<DetailBox {...detail} />) :
                        (<Loader />)
                    }
                </Modal>
            </Content>
                <Footer style={{ textAlign: 'center' }}>OMDB Movies ©2021</Footer>
        </Layout>
    );
}
export default ListMovie;