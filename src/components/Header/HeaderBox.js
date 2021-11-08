import React from "react";
import {Layout, Typography} from 'antd';
import 'antd/dist/antd.css';
const TextTitle = Typography.Title;
const { Header } = Layout;

export default function HeaderBox() {
    return (
        <Header>
            <div style={{ textAlign: 'center'}}>
                <TextTitle style={{color: '#ffffff', marginTop: '14px'}} level={3}>OMDB App</TextTitle>
            </div>
        </Header>
    )
}
