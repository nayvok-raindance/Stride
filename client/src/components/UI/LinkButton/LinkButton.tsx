import {Link} from "react-router-dom";

import {FC, ReactNode} from 'react';

const LinkButton: FC<LinkButtonProps> = ({children, to, variant = 'secondary'}) => {

    const baseClassName = "text-gray100 p-4 rounded-lg flex justify-center items-center gap-2 ease-out duration-300"
    const secondaryClassName = "hover:bg-gray400"
    const primaryClassName = "bg-purpleDark hover:bg-purple"

    return (
        <Link to={to} className={`${baseClassName} ${variant === "primary" ? primaryClassName : secondaryClassName}`}>
            {children}
        </Link>
    );
};

export interface LinkButtonProps {
    children?: ReactNode;
    to: string;
    variant?: 'primary' | 'secondary';
}

export default LinkButton;