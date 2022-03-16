interface Props {
    name: string;
    label: string;
}

export const Label = ({ name, label }: Props) => {
    return (
        <label
            htmlFor={name}
            className="absolute text-[14px] bg-white px-1 top-[-8px] left-[10px]"
        >
            {label}
        </label>
    );
};
