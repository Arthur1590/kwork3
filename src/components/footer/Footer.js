import React from 'react'
import logo from './img/logo_grans_2 3.png'
import phone from './img/call в 3.svg'
import mail from './img/envelope 3.svg'
import whatsapp from './img/Whatsapp (3) 3.svg'
import inst from './img/instagram-sketched 2.svg'
import './footer.css'

const Footer = () => {
	const data = [
		{
			title: 'Разработка сайтов',
			id: 1,
			content: [
				{
					text: 'Лендинг',
					id: 2,
				},
				{
					text: 'Многостраничник',
					id: 3,
				},
				{
					text: 'Интернет-Магазин',
					id: 4,
				},
			],
		},
		{
			title: 'Продвижение сайтов',
			id: 5,
			content: [
				{
					text: 'Лендинг',
					id: 6,
				},
				{
					text: 'Многостраничник',
					id: 7,
				},
				{
					text: 'Интернет-Магазин',
					id: 8,
				},
			],
		},
		{
			title: 'Настройка рекламы',
			id: 9,
			content: [
				{
					text: 'Лендинг',
					id: 10,
				},
				{
					text: 'Многостраничник',
					id: 11,
				},
				{
					text: 'Интернет-Магазин',
					id: 12,
				},
			],
		},
		{
			title: 'Поддержка',
			id: 13,
			content: [
				{
					text: 'Лендинг',
					id: 15,
				},
				{
					text: 'Многостраничник',
					id: 16,
				},
				{
					text: 'Интернет-Магазин',
					id: 17,
				},
			],
		},
		{
			title: 'Контакты',
			id: 18,
			content: [
				{
					text: 'О нас',
					id: 19,
				},
				{
					text: 'Портфолио',
					id: 20,
				},
				{
					text: 'Отзывы',
					id: 21,
				},
				{
					text: 'Блог',
					id: 22,
				},
			],
		},
	]
	return (
		<footer className='footer'>
			<div className='container'>
				<section className='upper__row'>
					<div className='footer__bio'>
						<div className='footer__logo'>
							<img src={logo} alt='oops' />
							<h5>RANSS</h5>
						</div>
						<div className='footer__icons'>
							<a href='tel: +7(495) 123 34 45'>
								<img src={phone} alt='oops' /> +7(495) 123 34 45
							</a>
							<a href='mail: info@granss.ru'>
								<img src={mail} alt='oops' /> info@granss.ru
							</a>
						</div>
						<div className='footer__socials'>
							<a href=''>
								<img src={inst} alt='oops' />
							</a>
							<a href=''>
								<img src={whatsapp} alt='oops' />
							</a>
							<a href=''>
								<img src={mail} alt='oops' />
							</a>
						</div>
					</div>
					<div className='footer__wrapper'>
						{data &&
							data.map(item => (
								<div className='footer__wrapper-item' key={item.id}>
									<h1>{item.title}</h1>
									{item.content.map(item => (
										<p key={item.id}>{item.text}</p>
									))}
								</div>
							))}
					</div>
				</section>
				<section className='under__row'>
					<p>Политика кондифициальности</p>
					<p>Все права защищены</p>
				</section>
			</div>
		</footer>
	)
}

export default Footer
