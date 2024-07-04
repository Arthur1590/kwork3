import React, { useState } from 'react'
import search from './img/search.svg'
import like from './img/like 1.svg'
import logo from './img/logo.png'
import whatapp from './img/WhatsApp.svg'
import call from './img/call в 1.svg'
import clsx from 'clsx'

const Nav = () => {
	const [show, setShow] = useState(false)
	const newState = clsx('burger__menu', { active: show })

	return (
		<nav className='header__nav'>
			<ul className='header__nav-list'>
				<div className='header__nav-list-menu'>
					<div onClick={() => setShow(!show)} className={newState}>
						<span></span>
					</div>
					<span className='media__decor'></span>
					<li>Меню</li>
					<li>
						<img src={like} alt='oops' />
					</li>
					<span className='media__decor'></span>
					<li>
						<img src={search} alt='oops' />
					</li>
				</div>
				<a className='header__logo' href='#'>
					<img src={logo} alt='oops' />
					<span>RANSS</span>
				</a>
				<div className='header__nav-list--addInfo'>
					<a href='tel:+7(495) 127 89 90'>+7(495) 127 89 90 </a>
					<p className='header__nav-list--addInfo--desc'>Сейчас работаем</p>
				</div>
				{/* Media */}
				<div className='header__nav-list--addInfo--media'>
					<span className='media__decor'></span>
					<a href='tel:+7(495) 127 89 90'>
						<img src={whatapp} alt='' />{' '}
					</a>
					<span className='media__decor'></span>
					<a href='#'>
						<img src={call} alt='' />
					</a>
				</div>
			</ul>
		</nav>
	)
}

export default Nav
