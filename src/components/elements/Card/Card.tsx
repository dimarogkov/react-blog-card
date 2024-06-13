type Props = {
    children: React.ReactNode;
    className?: string;
};

export const Card: React.FC<Props> = ({ children, className = '' }) => {
    return (
        <div
            className={`relative w-full max-w-[384px] p-[24px] rounded-[20px] border-2 border-[#121212] bg-[#fff] after:absolute after:-z-10 after:top-[8px] after:left-[8px] after:w-full after:h-full after:rounded-[20px] after:bg-[#121212] after:transition-transform after:duration-300 hover:after:translate-x-[4px] hover:after:translate-y-[4px] ${className}`}
        >
            {children}
        </div>
    );
};
