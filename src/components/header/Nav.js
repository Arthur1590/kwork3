import React, { useState } from 'react'
import search from './img/search.svg'
import like from './img/like 1.svg'
import logo from './img/logo.png'
import clsx from 'clsx'

const Nav = () => {
	const [show, setShow] = useState(false)
	const newState = clsx('burger__menu', { active: !show })

	return (
		<nav className='header__nav'>
			<ul className='header__nav-list'>
				<div className='header__nav-list-menu'>
					<div onClick={() => setShow(!show)} className={newState}>
						<span></span>
					</div>
					<li>
						<img src={like} alt='' />
					</li>
					<li>
						<img src={search} alt='' />
					</li>
				</div>
				<a className='header__logo' href='#'>
					<img src={logo} alt='' />
					RANSS
				</a>
				<div className='header__nav-list--addInfo'>
					<a href='tel:+7(495) 127 89 90'>+7(495) 127 89 90 </a>
					<p className='header__nav-list--addInfo--desc'>Сейчас работаем</p>
				</div>
			</ul>
		</nav>
	)
}

export default Nav
