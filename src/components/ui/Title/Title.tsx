type Props = {
    children: React.ReactNode;
    className?: string;
};

export const Title: React.FC<Props> = ({ children, className = '' }) => {
    return <h1 className={`flex w-full text-[20px] sm:text-[24px] font-extrabold ${className}`}>{children}</h1>;
};
