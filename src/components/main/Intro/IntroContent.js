import React from 'react'
import book from './img/book.png'
import vite from './img/vite.png'

const IntroContent = () => {
	return (
		<article className='intro__content'>
			<h1 className='intro__content-title'>
				Создание сайта - многостраничника
			</h1>
			<div className='intro__content-holder'>
				<img src={vite} alt='' />
				<p className='intro__content-desc'>
					Делаем для привличение клиентов в ваш бизнес
					<span className='intro__content-span'>
						{' '}
						красивые и современные сайты
					</span>{' '}
					для привличение клиентов в ваш бизнес
				</p>
			</div>
			<button className='intro__content-btn'>
				<span>Оставить заявку и получить КП</span>
				<img src={book} alt='' />
			</button>
		</article>
	)
}

export default IntroContent
