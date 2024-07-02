import React from 'react'
import pc from '../../../img/комп-2-карточка-многостр 1.png'
import './variants.css'

const DoubleVariant = () => {
	return (
		<div className='var'>
			<div className='container'>
				<article className='var__left'>
					<div>
						<h1 className='var__left-title var__title'>
							Многостраничный сайт на готовом решении
						</h1>
						<img src={pc} alt='' />
						<p className='var__desc'>
							Вам будут предложенны готовые решения сайтов с готовым дизайном и
							структорой.
						</p>
						<p className='var__desc'>
							{' '}
							Вам нужно будет только вставить текст и цены.
						</p>
					</div>
					<div className='var__info'>
						<p className='var__price'>От 45000 руб</p>
						<button className='var__btn'>Подробнее</button>
					</div>
				</article>
				<article className='var__left'>
					<div>
						<h1 className='var__left-title var__title'>
							Многостраничный сайт на готовом решении
						</h1>
						<img src={pc} alt='' />
						<p className='var__desc'>
							Вам будут предложенны готовые решения сайтов с готовым дизайном и
							структорой.
						</p>
						<p className='var__desc'>
							{' '}
							Вам нужно будет только вставить текст и цены.
						</p>
					</div>
					<div className='var__info'>
						<p className='var__price'>От 45000 руб</p>
						<button className='var__btn'>Подробнее</button>
					</div>
				</article>
			</div>
		</div>
	)
}

export default DoubleVariant
