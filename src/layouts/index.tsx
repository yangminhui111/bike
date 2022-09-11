import * as React from 'react';
import {Col,Row} from 'antd';
import Header from './Header'
import Footer from './Footer'
import NavLeft from './NavLeft'
import './../style/common.less'
interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div>
      <Row className='container'>
        <Col span={3} className='nav-left'>
          <NavLeft/>
        </Col>
        <Col span={21} className='main'>
          <Header/>
          <Row className='content'>
          {props.children}
          </Row>
          <Footer/>
        </Col>
      </Row>
    </div>
  );
};

export default App;
