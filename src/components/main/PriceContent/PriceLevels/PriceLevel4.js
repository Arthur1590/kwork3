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
import '../price.css'
import ResetBtn from '../../../UI/ResetBtn/Resetbtn'

const Pricelevel4 = ({ counter, onNext, onAnswer, reset }) => {
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
						className={clsx('price__indicator', { active: counter === 4 })}
					></div>
					<div
						className={clsx('price__indicator', { active: counter === 4 })}
					></div>
					<div
						className={clsx('price__indicator', { active: counter === 4 })}
					></div>
					<div
						className={clsx('price__indicator', { active: counter === 4 })}
					></div>
				</div>
				<div className='price__level-titleHolder'>
					<span className='counter'>{counter} из 4 вопросов</span>
					<TitleIn text='Выберите, что дополнительно к сайту нужно' />
				</div>
				<div className='price__level-content-grid'>
					<div
						onClick={() => classChanger(0, 'Интеграция с СРМ (Амо, Битрикс24)')}
						className={clsx('price__level-item item__lvl4', {
							active: activeIndex === 0,
						})}
					>
						<img className='price__img-lvl4' src={table} alt='oops' />
						<p className='price__level-desc'>
							Интеграция с СРМ (Амо, Битрикс24)
						</p>
					</div>
					<div
						onClick={() => classChanger(1, 'Яндекс директ реклама')}
						className={clsx('price__level-item  item__lvl4', {
							active: activeIndex === 1,
						})}
					>
						<img className='price__img-lvl4' src={yandex} alt='' />
						<p className='price__level-desc'>Яндекс директ реклама</p>
					</div>
					<div
						onClick={() => classChanger(2, 'Настройка рекламы соц. сети')}
						className={clsx('price__level-item  item__lvl4', {
							active: activeIndex === 2,
						})}
					>
						<div className='prcie__level-info--flexer--4'>
							<img className='price__img-lvl4' src={insta} alt='' />
							<img className='price__img-lvl4' src={facebook} alt='' />
						</div>
						<p className='price__level-desc'>Настройка рекламы соц. сети</p>
					</div>
					<div
						onClick={() => classChanger(3, 'Гугл реклама')}
						className={clsx('price__level-item  item__lvl4', {
							active: activeIndex === 3,
						})}
					>
						<img className='price__img-lvl4' src={google} alt='' />
						<p className='price__level-desc'>Гугл реклама</p>
					</div>
					<div
						onClick={() => classChanger(4, 'SEO продвижение)')}
						className={clsx('price__level-item  item__lvl4', {
							active: activeIndex === 4,
						})}
					>
						<img className='price__img-lvl4' src={seo} alt='' />
						<p className='price__level-desc'>SEO продвижение</p>
					</div>
					<ResetBtn reset={onNext} content='Закончить' />
				</div>
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
							<CustomBtn content='Бонус' onNext={onNext} />
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
