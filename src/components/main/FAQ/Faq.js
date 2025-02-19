import React, { useState } from 'react'
import SectionTitle from '../../sectionTitle/SectionTitle'
import FaqAccord from './FaqAccord'
import FaqForm from './FaqForm'
import './faq.css'

const Faq = () => {
	const data = [
		{
			title: 'Как происходит рабочий процесс по созданию сайта?',
			content: [
				{
					desc: '1) Аккаунт менеджер заполняет бриф на разработку сайта о вашей компании / услуге / продукте. ',
				},
				{
					desc: '2) Маркетолог создает прототип будущего сайта - самый важный этап в создании сайта.',
				},
				{
					desc: '3) После утверждения прототипа мы рисуем дизайн (ПК, мобильная версия).',
				},
				{
					desc: '4) После утверждения дизайна мы приступаем к верстке и программированию.',
				},
				{
					desc: '	5) После программирования на сайт заливается контент (текст / фото и т.д.).',
				},
				{
					desc: '6) После контента сайт размещается на основном домене.',
				},
				{
					desc: '7) Сайт готов, все доступы передаются заказчику.',
				},
			],
		},
		{
			title: 'Какую гарантию даете на создание сайта?',
			content: [
				{
					desc: '1) Аккаунт менеджер заполняет бриф на разработку сайта о вашей компании / услуге / продукте. ',
				},
				{
					desc: '2) Маркетолог создает прототип будущего сайта - самый важный этап в создании сайта.',
				},
				{
					desc: '3) После утверждения прототипа мы рисуем дизайн (ПК, мобильная версия).',
				},
				{
					desc: '4) После утверждения дизайна мы приступаем к верстке и программированию.',
				},
				{
					desc: '	5) После программирования на сайт заливается контент (текст / фото и т.д.).',
				},
				{
					desc: '6) После контента сайт размещается на основном домене.',
				},
				{
					desc: '7) Сайт готов, все доступы передаются заказчику.',
				},
			],
		},
		{
			title: 'Сколько времени уходит на создание сайта?',
			content: [
				{
					desc: '1) Аккаунт менеджер заполняет бриф на разработку сайта о вашей компании / услуге / продукте. ',
				},
				{
					desc: '2) Маркетолог создает прототип будущего сайта - самый важный этап в создании сайта.',
				},
				{
					desc: '3) После утверждения прототипа мы рисуем дизайн (ПК, мобильная версия).',
				},
				{
					desc: '4) После утверждения дизайна мы приступаем к верстке и программированию.',
				},
				{
					desc: '	5) После программирования на сайт заливается контент (текст / фото и т.д.).',
				},
				{
					desc: '6) После контента сайт размещается на основном домене.',
				},
				{
					desc: '7) Сайт готов, все доступы передаются заказчику.',
				},
			],
		},
		{
			title:
				'Можно ли потом менять самостоятельно информацию на сайте: фото, текст, контакты?',
			content: [
				{
					desc: '1) Аккаунт менеджер заполняет бриф на разработку сайта о вашей компании / услуге / продукте. ',
				},
				{
					desc: '2) Маркетолог создает прототип будущего сайта - самый важный этап в создании сайта.',
				},
				{
					desc: '3) После утверждения прототипа мы рисуем дизайн (ПК, мобильная версия).',
				},
				{
					desc: '4) После утверждения дизайна мы приступаем к верстке и программированию.',
				},
				{
					desc: '	5) После программирования на сайт заливается контент (текст / фото и т.д.).',
				},
				{
					desc: '6) После контента сайт размещается на основном домене.',
				},
				{
					desc: '7) Сайт готов, все доступы передаются заказчику.',
				},
			],
		},
		{
			title: 'Почему стоимость сайта выше, чем у конкурентов?',
			content: [
				{
					desc: '1) Аккаунт менеджер заполняет бриф на разработку сайта о вашей компании / услуге / продукте. ',
				},
				{
					desc: '2) Маркетолог создает прототип будущего сайта - самый важный этап в создании сайта.',
				},
				{
					desc: '3) После утверждения прототипа мы рисуем дизайн (ПК, мобильная версия).',
				},
				{
					desc: '4) После утверждения дизайна мы приступаем к верстке и программированию.',
				},
				{
					desc: '	5) После программирования на сайт заливается контент (текст / фото и т.д.).',
				},
				{
					desc: '6) После контента сайт размещается на основном домене.',
				},
				{
					desc: '7) Сайт готов, все доступы передаются заказчику.',
				},
			],
		},
	]
	const [activeIndex, setActiveIndex] = useState(null)

	const toogleFaq = index => {
		setActiveIndex(activeIndex === index ? null : index)
	}

	return (
		<div className='faq'>
			<div className='container'>
				<SectionTitle text='Часто задаваемые вопросы' />
				<div className='faq__content'>
					<div>
						{data &&
							data.map((item, index) => (
								<FaqAccord
									key={index}
									title={item.title}
									content={item.content}
									isOpen={activeIndex === index}
									onClick={() => toogleFaq(index)}
								/>
							))}
					</div>
					<FaqForm />
				</div>
			</div>
		</div>
	)
}

export default Faq
