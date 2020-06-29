import {Provider} from "react-redux";
import {store} from "../../store";
import {ComponentStoreConnected} from "../Component/Component";
import React from "react";

function App() {
    return (<>
        <React.StrictMode>
            <Provider store={store}>
                <ComponentStoreConnected/>
            </Provider>
        </React.StrictMode>
    </>);
}

export default App;