import { Link } from 'react-router-dom';
import { Button } from 'antd';

const Thankyou = () => {
  return (
    <div>
      <h1 className='text-5xl mt-thankyou text-center text-success-400 mb-4'>Заявка успешно отправлена!</h1>
      <p className='text-center text-xl mb-6'>Мы свяжемся с вами в ближайшее время</p>
      <Link className='block w-width mx-auto' to={'/'}>
        <Button className='w-full h-height rounded-15 text-18' type='primary'>
          Рестарт формы
        </Button>
      </Link>
    </div>
  );
};

export default Thankyou;
