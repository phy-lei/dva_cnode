import dva from 'dva';
import './index.css';
import RouterConfig from './router.js'
// 1. Initialize
//切换 history 为 browserHistory
// import createHistory from 'history/createBrowserHistory';
//createBrowserHistory as createHistory as 起别名
import {createBrowserHistory as createHistory} from 'history';

const app = dva({
  history: createHistory(),
  onError(e, dispatch) {
		console.log(e.message);
	}
});
// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
// app.model(require('./models/productModel.js').default);
// app.model(indexModel);
// app.model(detailModel);

// 4. Router
app.router(RouterConfig);

// 5. Start
app.start('#root');
