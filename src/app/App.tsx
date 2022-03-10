import './App.css'
import HomePage from "pages/HomePage";
import {StoreProvider} from "context/StoreComponent";
import {useState} from "react";
import RootStore from "context/store/RootStore";
import {Routes, Route, Link} from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import Navigation from "../components/navigation";

function App() {
    const [rootStore] = useState(new RootStore());
    return <StoreProvider store={rootStore}>

        <Navigation/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="about" element={<AboutPage/>}/>
        </Routes>


    </StoreProvider>
}

export default App
