import Logo from "../assets/Logo.svg";
import LinkButton from "./UI/LinkButton/LinkButton.tsx";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={'bg-gray700 flex justify-between items-center px-5 md:px-14 py-4'}>
            <Link to={'/'} className={'cursor-pointer'}>
                <img src={Logo} alt="logo"/>
            </Link>
            <div className={'flex gap-2 items-center'}>
                <LinkButton to={'/login'} size={'large'}>Sign in</LinkButton>
                <LinkButton to={'/register'} variant={'primary'} size={'large'}>Sign up</LinkButton>
            </div>
        </header>
    );
};

export default Header;