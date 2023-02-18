import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from 'redux'
import thunk from 'redux-thunk'
import { producDetailsReducer, productListReducer } from './reducers/productReducer';

const initialState = {};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: producDetailsReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;