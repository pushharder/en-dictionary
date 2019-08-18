import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import { MyComponent, StyledButton } from './App.style';
import { Layout } from 'antd';

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  return (
    <Layout>
      <Sider>Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
          accusantium adipisci aliquam aperiam beatae, commodi consectetur,
          dolorem dolores et, eveniet exercitationem labore minima optio quia
          quidem suscipit tempore ullam? Adipisci alias aliquid, doloremque
          doloribus ipsa nulla quibusdam sapiente sint vel.
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
