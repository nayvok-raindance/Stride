import {ButtonHTMLAttributes, FC} from 'react';

const Button: FC<ButtonProps> = ({children, variant = 'primary', size = 'large', userClass,...props}) => {

    const baseClassName = "text-gray100 text-md/base p-4 rounded-lg flex justify-center items-center gap-2 ease-out duration-300"
    const primaryClassName = "bg-blueDark hover:bg-blue"
    const secondaryClassName = "bg-purpleDark hover:bg-purple"
    const transparentClassName = "hover:bg-gray400"
    const largeClassName = "px-7 py-2"
    const smallClassName = "p-4"

    return (
        <button {...props} className={`
            ${baseClassName} 
            ${variant === "primary" ? primaryClassName : variant === "transparent" ? transparentClassName : secondaryClassName}
            ${size === "small" ? smallClassName : largeClassName}
            ${userClass}
            `}>
            {children}
        </button>
    );
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: 'small' | 'large';
    userClass?: string;
    variant?: 'primary' | 'secondary' | 'transparent';
}

export default Button;