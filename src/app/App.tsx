import './App.css'
import HomePage from "pages/HomePage";
import {StoreProvider} from "context/StoreComponent";
import {useState} from "react";
import RootStore from "context/store/RootStore";

function App() {
    const [rootStore] = useState(new RootStore());
    return <StoreProvider store={rootStore}>
        <HomePage/>
    </StoreProvider>
}

export default App
