type Props = {
    src: string;
    alt: string;
    className?: string;
};

export const Img: React.FC<Props> = ({ src, alt, className = '' }) => {
    return (
        <div className={`relative overflow-hidden bg-[#808080] ${className}`}>
            <img src={src} alt={alt} className='absolute top-0 left-0 w-full h-full object-cover object-center' />
        </div>
    );
};
