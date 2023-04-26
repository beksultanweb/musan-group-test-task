import { NavLink } from 'react-router-dom'


const Header = () => {

    return (
        <header className='flex gap-8 justify-center items-center h-14 border-b border-b-grey-400'>
            <NavLink className='no-underline' to={'/'}>Оставить заявку</NavLink>
            <NavLink className='no-underline' to={'/list'}>Список заявок</NavLink>
        </header>
    )
}

export default Header