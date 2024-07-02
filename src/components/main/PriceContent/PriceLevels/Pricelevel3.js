import React, { useState } from 'react'
import pc from '../img/futurePc.png'
import laba from '../img/luba.png'
import noutbooks from '../img/bg_level3.png'
import CustomBtn from '../../../UI/CutomBtn/CustomBtn'
import clsx from 'clsx'
import TitleIn from '../../../TitleIn/TitleIn'

const Pricelevel3 = ({ counter, onNext, onAnswer }) => {
	const [activeIndex, setActiveIndex] = useState(null)

	const classChanger = (index, answer) => {
		setActiveIndex(index)
		onAnswer(answer)
	}

	return (
		<div className='price__wrapper'>
			<div className='price__level'>
				<div className='price__level-titleHolder'>
					<span className='counter'>{counter} из 4 вопросов</span>
					<TitleIn text='Как будем делать сайт?' />
				</div>
				<div className='price__level-content'>
					<div
						onClick={() =>
							classChanger(0, 'Сделать лендинг на готовом решении')
						}
						className={clsx('price__level-item', { active: activeIndex === 0 })}
					>
						<img src={pc} alt='oops' />
						<p className='price__level-desc'>
							Сделать лендинг на готовом решении
						</p>
					</div>
					<div
						onClick={() =>
							classChanger(1, 'Разработать уникальный дизайн лендинга')
						}
						className={clsx('price__level-item', { active: activeIndex === 1 })}
					>
						<img src={laba} alt='oops' />
						<p className='price__level-desc'>
							Разработать уникальный дизайн лендинга
						</p>
					</div>
				</div>
				<CustomBtn content='Далее' onNext={onNext} />
			</div>

			<div className='price__level-decor'>
				<img src={noutbooks} alt='' />
			</div>
		</div>
	)
}

export default Pricelevel3
