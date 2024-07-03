import React, { useState } from 'react'
import frame1 from '../img/Frame1.png'
import frame2 from '../img/Frame2.png'
import frameLeftSide from '../img/frameLeftSide.png'
import frameRightSide from '../img/frameRightSide.png'
import myProfile from '../img/myPic.png'
import mobile from '../img/phoneDecor.png'
import CustomBtn from '../../../UI/CutomBtn/CustomBtn'
import clsx from 'clsx'
import TitleIn from '../../../TitleIn/TitleIn'

const Pricelevel1 = ({ counter, onNext, onAnswer }) => {
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
						className={clsx('price__indicator', { active: counter === 1 })}
					></div>
					<div className='price__indicator'></div>
					<div className='price__indicator'></div>
					<div className='price__indicator'></div>
				</div>
				<div className='price__level-titleHolder'>
					<span className='counter'>{counter} из 4</span>
					<TitleIn text='Что Вы хотите получить?' />
				</div>
				<div className='price__level-content'>
					<div
						onClick={() => classChanger(0, 'Продажа услуги')}
						className={clsx('price__level-item', { active: activeIndex === 0 })}
					>
						<img src={frame1} alt='oops' />
						<p className='price__level-desc'>Продажа услуги</p>
					</div>
					<div
						onClick={() => classChanger(1, 'Продажа товара')}
						className={clsx('price__level-item', { active: activeIndex === 1 })}
					>
						<img src={frame2} alt='oops' />
						<p className='price__level-desc'>Продажа товара</p>
					</div>
					<div
						onClick={() => classChanger(2, 'Оба варианта')}
						className={clsx('price__level-item', { active: activeIndex === 2 })}
					>
						<div>
							<img src={frameLeftSide} alt='oops' />
							<img src={frameRightSide} alt='oops' />
						</div>
						<p className='price__level-desc'>Оба варианта</p>
					</div>
				</div>
				<CustomBtn content='Далее' onNext={onNext} />
			</div>

			<div className='price__bg'>
				<div className='price__level-decor'>
					<img
						className='price__level-decor-profile'
						src={myProfile}
						alt='oops'
					/>
					<div className='price__level-info'>
						<h5>Помогу для Вас найти лучшее решение</h5>
						<div className='prcie__level-info--flexer'>
							<button>Бонус</button>
							<img src={mobile} alt='oops' />
						</div>
						<p>
							Интеграция Вашего сайта с whatsapp, инстраграм, СРМ, телефония -
							стоимостью 28 000 руб.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Pricelevel1
