import React from 'react'
import pc1 from './img/комп-1-карточка-многостр 1.png'
import pc2 from './img/комп-2-карточка-многостр 1.png'
import line from './Сочетание 1.svg'
import './variants.css'

const DoubleVariant = () => {
	const data = [
		{
			title: 'Многостраничный сайт на уникальном дизайне',
			text: 'Вам будут предложенны готовые решения сайтов с готовым дизайном и структорой.',
			decs: 'Вам нужно будет только вставить текст и цены.',
			price: 'От 45000 руб',
			subPrice: '60000 руб',
			more: 'Подробнее',
			img: pc2,
		},
		{
			title: 'Многостраничный сайт на готовом решении',
			text: 'Сайт будет разработан индивидуально под Ваши пожелания. Расположение блоков, цветов, описаний.',
			price: 'От 95000 руб',
			subPrice: '114 000 руб',
			more: 'Подробнее',
			img: pc1,
		},
	]

	return (
		<div className='var'>
			<div className='container'>
				<img className='var__line' src={line} alt='line' />
				{data &&
					data.map(item => (
						<article key={item.title} className='var__left'>
							<div className='var__left-holder'>
								<h1 className='var__left-title var__title'>{item.title}</h1>
								<img src={item.img} alt='' />
								<p className='var__desc'>{item.text}</p>
								<p className='var__desc'>{item.decs}</p>
							</div>
							<div className='var__info'>
								<p className='var__price'>
									{item.price}
									<span className='var__price-sub'>{item.subPrice}</span>
								</p>
								<button className='var__btn'>{item.more}</button>
							</div>
						</article>
					))}
			</div>
		</div>
	)
}

export default DoubleVariant
