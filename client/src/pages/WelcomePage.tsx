import LinkButton from "../components/UI/LinkButton/LinkButton.tsx";
import Todo from "../assets/Todo.svg"
const WelcomePage = () => {
    return (
        <main className={'flex flex-col items-center h-[calc(100dvh-4.4rem)] overflow-hidden pt-14 gap-14 sm:pt-24 sm:gap-20'}>
            <div className={'flex flex-col items-center gap-10 sm:gap-14'}>
                <div className={'flex flex-col items-center w-11/12 md:w-4/6 lg:w-3/5 text-center gap-6 sm:gap-10'}>
                    <h1 className={'text-gray100 text-6xl sm:text-7xl font-black'}>Step <span className={"text-blue"}>up</span>. Strike <span className={'text-purpleDark'}>off</span>.</h1>
                    <p className={'text-gray200 text-2xl/base'}>Stride is a simple solution for complex tasks. Do not forget about the important things, achieve goals, manage time.</p>
                </div>

                <nav className={'flex gap-2 items-center'}>
                    <LinkButton to={'/register'} variant={'primary'} size={'large'}>Sign up</LinkButton>
                    <LinkButton to={'/login'} size={'large'}>Sign in</LinkButton>
                </nav>
            </div>

            <div>
                <img src={Todo} alt="todo" className={'shadow-[0_0_30px_0_rgba(255,255,255,0.5)] rounded-2xl w-full sm:w-[600px]'}/>
            </div>
        </main>
    );
};

export default WelcomePage;