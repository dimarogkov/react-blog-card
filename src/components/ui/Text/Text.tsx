type Props = {
    children: React.ReactNode;
    className?: string;
};

export const Text: React.FC<Props> = ({ children, className = '' }) => {
    return <p className={`w-full font-medium text-[14px] sm:text-[16px] text-[#808080] ${className}`}>{children}</p>;
};
