import ReactDOM from "react-dom";
import React from "react";
// Маленькая библиотека перехватывающая вызовы dispatch к store.
// Если в dispatch приходит объект (в нашем случае результат выполнения одной из функций Action),
// то этот объект как обычно передаётся в reducer.
// Если же в dispatch приходит функция, то она выполняется и на этом вызов dispatch прекращается.
import thunk from "redux-thunk";
import {applyMiddleware, compose, createStore} from "redux";
import App from "./components/App/app";
import {mockFetch as api} from "./mock";
import {reducer} from "./store/store";
import {Provider} from "react-redux";

// Экземпляр хранилища
const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
