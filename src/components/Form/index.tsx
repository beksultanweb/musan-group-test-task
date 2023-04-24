import { Button, Input, Radio, Form } from 'antd'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IRequest } from '../../types/types';

const FormComp = () => {
    const dispatch = useDispatch()
    const [city, setCity] = useState('Астана')

    const SubmitForm = (values: IRequest) => {
        const date = new Date().toLocaleDateString("ru-RU")
        dispatch({type: 'request/add', payload: {...values, date}})
    }

    return (
        <Form onFinish={SubmitForm}>
            <h1 className='text-5xl text-center font-semibold mt-[90px]'>Оставить заявку</h1>
            <div className='w-[360px] mx-auto mb-[146px]'>
                <Form.Item name="name" className='mb-4' rules={[{required: true, message: ''}]}>
                    <Input className='h-[54px] rounded-[15px] text-[18px] pl-6' type="text" placeholder='Ваше имя'/>
                </Form.Item>
                <Form.Item name="tel" className='mb-4' rules={[{required: true, message: ''}]}>
                    <Input className='h-[54px] rounded-[15px] text-[18px] pl-6' type="tel" placeholder='Номер телефона'/>
                </Form.Item>
                <Form.Item name="email" className='mb-4' rules={[{required: true, message: ''}]}>
                    <Input className='h-[54px] rounded-[15px] text-[18px] pl-6' type="email" placeholder='E-mail'/>
                </Form.Item>
                <Form.Item className='mb-4' initialValue={'Астана'} name="city">
                    <Radio.Group buttonStyle='solid' className='w-full rounded-[15px] border-grey-400 border flex' value={city} onChange={(event) => setCity(event.target.value)} optionType='button'>
                        <Radio.Button className='w-2/4 text-default-400 text-[18px] items-center flex justify-center h-[54px]' value='Астана'>Астана</Radio.Button>
                        <Radio.Button className='w-2/4 text-default-400 text-[18px] items-center flex justify-center h-[54px]' value='Алматы'>Алматы</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Button className='w-full h-[54px] rounded-[15px] text-[18px]' type='primary' htmlType='submit'>Отправить</Button>
                <p className='text-default-400 text-[14px]'>Нажимая на кнопку, вы соглашаетесь с <Link className='text-blue-400 no-underline' to={'/'}>политикой конфиденциальности</Link></p>
            </div>
        </Form>
    )
}

export default FormComp