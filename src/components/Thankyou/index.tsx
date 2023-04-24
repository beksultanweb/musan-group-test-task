import { Link } from 'react-router-dom'
import { Button } from 'antd'

const Thankyou = () => {

    return (
        <div>
            <h1 className='text-5xl mt-[241px] text-center text-success-400 mb-[16px]'>Заявка успешно отправлена!</h1>
            <p className='text-center text-xl mb-[24px]'>Мы свяжемся с вами в ближайшее время</p>
            <Link className='block w-[360px] mx-auto' to={'/'}><Button className='w-full h-[54px] rounded-[15px] text-[18px]' type='primary'>Рестарт формы</Button></Link>
        </div>
    )
}

export default Thankyou