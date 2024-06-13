import cn from 'classnames';
import { PostType, PostTypeColor } from '../../../types/postType';

type Props = {
    types: PostType[];
    className?: string;
};

export const Types: React.FC<Props> = ({ types, className = '' }) => {
    return (
        <div className={`flex w-full gap-[6px] ${className}`}>
            {types.map(({ id, name, typeColor }) => (
                <span
                    key={id}
                    className={cn(
                        'flex w-fit h-[30px] items-center justify-center font-bold text-[14px] rounded-[4px] text-[#121212] px-[12px]',
                        {
                            'bg-[#f4d04e]': typeColor === PostTypeColor.yellow,
                            'bg-[#82dd65]': typeColor === PostTypeColor.green,
                        }
                    )}
                >
                    {name}
                </span>
            ))}
        </div>
    );
};
