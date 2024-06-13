type Props = {
    children: React.ReactNode;
    className?: string;
};

export const Label: React.FC<Props> = ({ children, className = '' }) => {
    return <p className={`w-full text-[14px] text-[#121212] ${className}`}>{children}</p>;
};
