import React, { useState } from 'react'
import yes from '../img/Yes.png'
import iks from '../img/Iks.png'
import darts from '../img/Darts.png'
import CustomBtn from '../../../UI/CutomBtn/CustomBtn'
import clsx from 'clsx'
import TitleIn from '../../../TitleIn/TitleIn'

const Pricelevel2 = ({ counter, onNext, onAnswer }) => {
	const [activeIndex, setActiveIndex] = useState(null)

	const classChanger = (index, answer) => {
		setActiveIndex(index)
		onAnswer(answer)
	}

	return (
		<div className='price__wrapper'>
			<div className='price__level'>
				<div className='price__indicate'>
					<div
						className={clsx('price__indicator', { active: counter === 2 })}
					></div>
					<div
						className={clsx('price__indicator', { active: counter === 2 })}
					></div>
					<div className='price__indicator'></div>
					<div className='price__indicator'></div>
				</div>
				<div className='price__level-titleHolder'>
					<span className='counter'>{counter} из 4 вопросов</span>
					<TitleIn text='Вам нужна настройка рекламы?' />
				</div>
				<div className='price__level-content'>
					<div
						onClick={() => classChanger(0, 'YES')}
						className={clsx('price__level-item', { active: activeIndex === 0 })}
					>
						<img src={yes} alt='oops' />
					</div>
					<div
						onClick={() => classChanger(1, 'NO')}
						className={clsx('price__level-item', { active: activeIndex === 1 })}
					>
						<img src={iks} alt='oops' />
					</div>
				</div>
				<CustomBtn content='Далее' onNext={onNext} />
			</div>

			<div className='price__level-decor'>
				<img src={darts} alt='' />
			</div>
		</div>
	)
}

export default Pricelevel2
