import React from 'react'
import search from './img/search.svg'
import like from './img/like 1.svg'
import logo from './img/logo.png'

const Nav = () => {
	return (
		<nav className='header__nav'>
			<ul className='header__nav-list'>
				<div className='header__nav-list-menu'>
					<div className='burger__menu'>
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
