import {Route, Routes} from "react-router-dom";
import SignInPage from "./pages/SignInPage.tsx";
import SignUpPage from "./pages/SignUpPage.tsx";
import Header from "./components/Header.tsx";
import WelcomePage from "./pages/WelcomePage.tsx";

function App() {

    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/'} element={<WelcomePage/>}/>
                <Route path={'/signIn'} element={<SignInPage/>}/>
                <Route path={'/signUp'} element={<SignUpPage/>}/>
            </Routes>
        </>
    )
}

export default App
