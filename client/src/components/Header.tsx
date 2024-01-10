import Logo from "../assets/Logo.svg";
import LinkButton from "./UI/LinkButton/LinkButton.tsx";

const Header = () => {
    return (
        <header className={'bg-gray700 flex justify-between items-center px-14 py-4'}>
            <div>
                <img src={Logo} alt="logo"/>
            </div>
            <div className={'flex gap-2 items-center'}>
                <LinkButton to={'/signIn'} size={'large'}>Sign in</LinkButton>
                <LinkButton to={'/signUp'} variant={'primary'} size={'large'}>Sign up</LinkButton>
            </div>
        </header>
    );
};

export default Header;