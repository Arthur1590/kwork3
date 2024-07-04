import React from 'react'
import UpTitle from '../../UI/UpTitle/UpTitle'
import pc from './img/mainPC.png'
import cloud from './img/clouds.png'
import phone from './img/mobile.png'
import coin from './img/Mask Group.png'
import denga from './img/denga.png'
import book from './img/book.png'
import vite from './img/vite.png'
import './intro.css'

import './intro.css'
const Intro = () => {
	return (
		<div className='intro'>
			<div className='container'>
				<div className='intro__row1'>
					<UpTitle text='Создание сайта - многостраничника' />
					<figure className='intro__decor'>
						<img className='intro__decor-pc' src={pc} alt='' />
						<img className='intro__decor-phone' src={phone} alt='' />
						<img className='intro__decor-coin' src={coin} alt='' />
						<img className='intro__decor-denga' src={denga} alt='' />
					</figure>
				</div>
				<div className='intro__row2'>
					<div className='intro__row2-holder'>
						<img src={vite} alt='' />
						<p className='intro__row2-desc'>
							Делаем <span>красивые и современные сайты</span> для привличение
							клиентов в ваш бизнес
						</p>
					</div>
					<a className='intro__row2-anchor' href='#form'>
						<button className='intro__row2-btn'>
							<span>Оставить заявку и получить КП</span>
							<img className='intro__row2-book' src={book} alt='' />
						</button>
					</a>
				</div>
			</div>
			<img className='intro__clouds' src={cloud} alt='' />
		</div>
	)
}

export default Intro
