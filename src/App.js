import React from 'react';
import './App.css';

import { Provider } from 'react-redux';


export default function App() {
    return (<>
        <Provider store={store}>
            <CakeContainer />
            <HooksCakeContainer />
            <IceCreamContainer />
            <NewCakeContainer />
            <h1>welcome to my page</h1>
  <h1>pull pull this code</h1>
        </Provider>
    </>
    )
}
