import Button from "../components/UI/Button/Button.tsx";

const SignUpPage = () => {
    return (
        <div className={'flex flex-col items-center justify-center h-[calc(100svh-4.4rem)] px-4 md:px-14'}>
            <div className={'flex flex-col items-center justify-center gap-4 pb-12'}>
                <h1 className={'text-gray100 text-5xl'}>Sign up</h1>
                <p className={'text-gray200 text-md/base text-center max-w-[395px]'}>Create an account to track your progress, showcase your skill-set and be a part of the community.</p>
            </div>
            <form action="" className={'flex flex-col gap-[20px] w-80 min-w-full sm:min-w-96'}>
                <input type="text" placeholder={'Name'} className={'text-md/base placeholder:text-gray300 text-gray100 bg-gray500 py-3 px-4 rounded-lg border border-gray700 focus:outline-none focus:border-purpleDark'}/>
                <input type="email" placeholder={'Email'} className={'text-md/base placeholder:text-gray300 text-gray100 bg-gray500 py-3 px-4 rounded-lg border border-gray700 focus:outline-none focus:border-purpleDark'}/>
                <input type="password" placeholder={'Password'} className={'text-md/base placeholder:text-gray300 text-gray100 bg-gray500 py-3 px-4 rounded-lg border border-gray700 focus:outline-none focus:border-purpleDark'}/>
                <Button type={'submit'} variant={'secondary'} size={'large'} userClass={'py-3'}>Continue to Verify Email</Button>
            </form>
            <p className={'text-gray200 text-sm/base mt-6'}>Already have an account? <a href="" className={'text-sm/base text-blueDark hover:text-blue ease-out duration-300'}>Sign in</a></p>
        </div>
    );
};

export default SignUpPage;