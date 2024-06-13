import { Link } from 'react-router-dom';
import { postCard } from '../../../data/postCard';
import { Card } from '../../elements/Card';
import { Types } from '../../elements/Types';
import { User } from '../../elements/User';
import { Label } from '../../ui/Label';
import { Text } from '../../ui/Text';
import { Title } from '../../ui/Title';
import { Img } from '../../ui/Img';

export const HomePage = () => {
    const { postImg, title, text, date, user, types } = postCard;

    return (
        <Card>
            <Link to='/' className='block mb-[24px] last:mb-0'>
                <Img src={postImg} alt={title} className='w-full h-0 pb-[61%] rounded-[10px]' />
            </Link>

            <div className='w-full mb-[24px] last:mb-0'>
                <Types types={types} className='mb-[12px] last:mb-0' />
                <Label className='mb-[12px] last:mb-0'>{date}</Label>

                <Title className='mb-[12px] last:mb-0'>
                    <Link to='/' className='text-[#121212] transition-colors duration-300 hover:text-[#f4d04e]'>
                        {title}
                    </Link>
                </Title>

                <Text>{text}</Text>
            </div>

            <User user={user} />
        </Card>
    );
};
