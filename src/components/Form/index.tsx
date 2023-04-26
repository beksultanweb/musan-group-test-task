import { Button, Input, Radio, Form, RadioChangeEvent } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { IRequest } from '../../types/types';
import { addRequestAction } from '../../store/RequestStore/actions';
import './style.scss';
import * as yup from 'yup';

const cities = ['Астана', 'Алматы'];

let schema = yup.object().shape({
  name: yup.string().required('Обязательно для заполнения.'),
  tel: yup
    .string()
    .matches(/^\+?77\d{9}$/, 'Номер телефона должен соответсвовать +7 7** *** ****.')
    .required('Обязательно для заполнения.'),
  email: yup.string().email('Введите правильный email адрес.').required('Обязательно для заполнения.'),
});

const yupSync = {
  async validator(rule: any, value: string): Promise<void> {
    await schema.validateSyncAt(rule.field, { [rule.field]: value });
  },
};

const FormComp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [city, setCity] = useState('Астана');

  const SubmitForm = (values: IRequest) => {
    const uploadObj = {
      ...values,
      date: new Date().toLocaleString('ru-RU', {
        hour12: false,
      }),
    };
    dispatch(addRequestAction(uploadObj));
    navigate('/thankyou');
  };

  const handleCityChange = (event: RadioChangeEvent) => {
    setCity(event.target.value);
  };

  const handlePhoneInput = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    if (target.value[0] === '8') {
      form.setFieldsValue({ tel: `+7${target.value.slice(1)}` });
    } else if (target.value[0] === '7') {
      form.setFieldsValue({ tel: `+7${target.value}` });
    } else {
      form.setFieldsValue({ tel: `${target.value}` });
    }
  };

  return (
    <Form form={form} onFinish={SubmitForm}>
      <h1 className='text-5xl text-center font-semibold mt-[90px]'>Оставить заявку</h1>
      <div className='w-width mx-auto mb-[146px]'>
        <Form.Item name='name' className='mb-4' rules={[yupSync]}>
          <Input className='h-height rounded-15 text-18 pl-6' type='text' placeholder='Ваше имя' />
        </Form.Item>
        <Form.Item className='mb-4' name='tel' rules={[yupSync]}>
          <Input
            maxLength={12}
            className='h-height rounded-15 text-18 pl-6'
            type='tel'
            onChange={handlePhoneInput}
            placeholder='Номер телефона'
          />
        </Form.Item>
        <Form.Item name='email' className='mb-4' rules={[yupSync]}>
          <Input className='h-height rounded-15 text-18 pl-6' type='email' placeholder='E-mail' />
        </Form.Item>
        <Form.Item className='mb-4' initialValue={city} name='city'>
          <Radio.Group
            className='w-full rounded-15 border-grey-400 border flex'
            value={city}
            onChange={handleCityChange}
            optionType='button'
          >
            {cities.map(city => (
              <Radio.Button
                className='w-2/4 text-default-400 text-18 items-center flex justify-center h-height'
                key={city}
                value={city}
              >
                {city}
              </Radio.Button>
            ))}
          </Radio.Group>
        </Form.Item>
        <Button className='w-full h-height rounded-15 text-18' type='primary' htmlType='submit'>
          Отправить
        </Button>
        <p className='text-default-400 text-14'>
          Нажимая на кнопку, вы соглашаетесь с
          <Link className='text-blue-400 no-underline' to={'/'}>
            политикой конфиденциальности
          </Link>
        </p>
      </div>
    </Form>
  );
};

export default FormComp;
