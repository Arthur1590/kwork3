import React, { useState } from 'react'
import myProfile from '../img/myPic.png'
import mobile from '../img/phoneDecor.png'
import table from '../img//futuretable.png'
import yandex from '../img/yandex.png'
import insta from '../img/inst 1.png'
import facebook from '../img/facebook 1.png'
import google from '../img/googleLogo.png'
import seo from '../img/seo.png'
import CustomBtn from '../../../UI/CutomBtn/CustomBtn'
import clsx from 'clsx'
import TitleIn from '../../../TitleIn/TitleIn'

const Pricelevel4 = ({ counter, onNext, onAnswer }) => {
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
					<TitleIn text='Выберите, что дополнительно к сайту нужно' />
				</div>
				<div className='price__level-content-grid'>
					<div
						onClick={() => classChanger(0, 'Интеграция с СРМ (Амо, Битрикс24)')}
						className={clsx('price__level-item', { active: activeIndex === 0 })}
					>
						<img src={table} alt='oops' />
						<p className='price__level-desc'>
							Интеграция с СРМ (Амо, Битрикс24)
						</p>
					</div>
					<div
						onClick={() => classChanger(1, 'Интеграция с СРМ (Амо, Битрикс24)')}
						className={clsx('price__level-item', { active: activeIndex === 1 })}
					>
						<img src={table} alt='' />
						<p className='price__level-desc'>
							Интеграция с СРМ (Амо, Битрикс24)
						</p>
					</div>
					<div
						onClick={() => classChanger(2, 'Яндекс директ реклама')}
						className={clsx('price__level-item', { active: activeIndex === 2 })}
					>
						<img src={yandex} alt='' />
						<p className='price__level-desc'>Яндекс директ реклама</p>
					</div>
					<div
						onClick={() => classChanger(3, 'Настройка рекламы соц. сети')}
						className={clsx('price__level-item', { active: activeIndex === 3 })}
					>
						<div className='prcie__level-info--flexer--4'>
							<img src={insta} alt='' />
							<img src={facebook} alt='' />
						</div>
						<p className='price__level-desc'>Настройка рекламы соц. сети</p>
					</div>
					<div
						onClick={() => classChanger(4, 'Гугл реклама')}
						className={clsx('price__level-item', { active: activeIndex === 4 })}
					>
						<img src={google} alt='' />
						<p className='price__level-desc'>Гугл реклама</p>
					</div>
					<div
						onClick={() => classChanger(5, 'SEO продвижение)')}
						className={clsx('price__level-item', { active: activeIndex === 5 })}
					>
						<img src={seo} alt='' />
						<p className='price__level-desc'>SEO продвижение</p>
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

export default Pricelevel4
