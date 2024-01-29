import {Link} from "react-router-dom";
import {FC, ReactNode} from 'react';

const LinkButton: FC<LinkButtonProps> = ({children, to, variant = 'secondary', size = 'large', userClass}) => {

    const baseClassName = "text-gray100 text-md/base rounded-lg flex justify-center items-center gap-2 ease-out duration-300"
    const secondaryClassName = "hover:bg-gray400"
    const primaryClassName = "bg-purpleDark hover:bg-purple"
    const largeClassName = "px-7 py-2"
    const smallClassName = "p-4"


    return (
        <Link to={to} className={`
            ${baseClassName} 
            ${variant === "primary" ? primaryClassName : secondaryClassName}
            ${size === "small" ? smallClassName : largeClassName}
            ${userClass}
            `}>
            {children}
        </Link>
    );
};

export interface LinkButtonProps {
    children?: ReactNode;
    userClass?: string;
    to: string;
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'large'
}

export default LinkButton;