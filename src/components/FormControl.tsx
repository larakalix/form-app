interface Props {
    children: JSX.Element | JSX.Element[];
}

export const FormControl = ({ children }: Props) => {
    return <div className="flex flex-col mb-4 mt-4 relative">{children}</div>;
};
