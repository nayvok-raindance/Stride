import {ButtonHTMLAttributes, FC} from 'react';

const Button: FC<ButtonProps> = ({children, variant = 'primary', size = 'large', ...props}) => {

    const baseClassName = "text-gray100 p-4 font-bold rounded-lg flex justify-center items-center gap-2 ease-out duration-300"
    const primaryClassName = "bg-blueDark hover:bg-blue"
    const secondaryClassName = "bg-purpleDark hover:bg-purple"
    const largeClassName = "px-7 py-2"
    const smallClassName = "p-4"

    return (
        <button {...props} className={`
            ${baseClassName} 
            ${variant === "primary" ? primaryClassName : secondaryClassName}
            ${size === "small" ? smallClassName : largeClassName}
            `}>
            {children}
        </button>
    );
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: 'small' | 'large';
    variant?: 'primary' | 'secondary'
}

export default Button;