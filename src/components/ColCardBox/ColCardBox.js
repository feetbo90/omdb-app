import {
    Row,
    Col,
    Card,
    Tag
} from 'antd';
import 'antd/dist/antd.css';
const { Meta } = Card;

export default function ColCardBox({Title, imdbID, Poster, Type, clickHandler}){
    return (
        <Col style={{margin: '20px 0'}} className="gutter-row" span={4}>
            <div className="gutter-box">
                <Card
                    style={{ width: 200 }}
                    cover={
                        <img
                            alt={Title}
                            src={Poster === 'N/A' ? 'https://placehold.it/198x264&text=Image+Not+Found' : Poster}
                        />
                    }
                    onClick={() => clickHandler(imdbID)}
                >
                    <Meta
                        title={Title}
                        description={false}
                    />
                    <Row style={{marginTop: '10px'}} className="gutter-row">
                        <Col>
                            <Tag color="magenta">{Type}</Tag>
                        </Col>
                    </Row>
                </Card>
            </div>
        </Col>
    )
}
