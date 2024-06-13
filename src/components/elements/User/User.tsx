import { User as UserType } from '../../../types/user';
import { Img } from '../../ui/Img/Img';
import { Label } from '../../ui/Label';

type Props = {
    user: UserType;
};

export const User: React.FC<Props> = ({ user }) => {
    const { fullName, img } = user;

    return (
        <div className='flex items-center w-full gap-x-[12px]'>
            <Img src={img.src} alt={img.alt} className='w-[32px] min-w-[32px] h-[32px] pb-0 rounded-[32px]' />
            <Label className='font-extrabold'>{fullName}</Label>
        </div>
    );
};
