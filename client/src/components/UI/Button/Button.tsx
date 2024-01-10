import {ButtonHTMLAttributes, FC} from 'react';

const Button: FC<ButtonProps> = ({children, variant = 'primary', ...props}) => {

    const baseClassName = "text-gray100 p-4 rounded-lg flex justify-center items-center gap-2 ease-out duration-300"
    const primaryClassName = "bg-blueDark hover:bg-blue"
    const secondaryClassName = "bg-purpleDark hover:bg-purple"

    return (
        <button {...props}
                className={`${baseClassName} ${variant === "primary" ? primaryClassName : secondaryClassName}`}
        >
            {children}
        </button>
    );
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
}

export default Button;