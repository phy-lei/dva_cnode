import React from 'react';
import { Route, Switch, routerRedux } from 'dva/router';
import dynamic from 'dva/dynamic';
// import Product from './routes/product.js'
import HeaderComponent from './components/Header.jsx'
import FooterComponent from './components/Footer.jsx'
import { Layout} from 'antd'
const {ConnectedRouter}=routerRedux;

const { Header, Content, Footer } = Layout;
function RouterConfig({ history,app }) {
  //路由懒加载
  const routes = [
    {
      path: "/",
      name: 'IndexPage',
      models:()=>[import('./models/indexModel.js')],
      component: () => import('./routes/IndexPage.jsx')
      
    },
    {
      path: "/topic/:id",
      name: 'detail',
      models:()=>[import('./models/detailModel')],
      component: () => import('./routes/detail.jsx')
      
    }
  ];
  return (
    <ConnectedRouter history={history}>
    <Switch>
    <>
      <Header>
        <HeaderComponent></HeaderComponent>
      </Header>
      <Content>
          {
            routes.map(({ path, name, ...dynamics }) => {
              return (
                <Route path={path} key={name} exact component={dynamic({app,...dynamics})} />
              )
            })
          }
      </Content>
      <Footer>
        <FooterComponent></FooterComponent>
      </Footer>
    </>
    </Switch>
    </ConnectedRouter>
  
  );
}

export default RouterConfig;
