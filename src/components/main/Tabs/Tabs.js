import React, { useState } from 'react'
import Tab1 from './Tab1'
import Tab2 from './Tab2'
import './Tabs.css'

const Tabs = () => {
	const data1 = [
		{ desc: '1. Вы оформляете заявку на разработку корпоративного сайта' },
		{
			desc: '2. Мы создаем для Вас демо-сайт на базе выбранного типа сайта и предоставляем доступ к системе управления сайтом (CMS) для ознакомления с возможностями системы',
		},
		{
			desc: '3. Мы отправляем Вам договор и счет на 100% предоплату и запрашиваем у Вас данные для создания и наполнения сайта ',
		},
		{
			desc: '4. После поступления оплаты, мы:',
			descDeep: {
				subDesc1: 'Создаем сайт на основе выбранного тарифа',
				subDesc2: 'Заполняем сайт присланной информацией (2-3 дня)',
				subDesc3:
					'Приобретаем или подключаем к сайту выбранный Вами домен (1-3 дня)',
				subDesc4: 'Размещаем сайт в сети Интернет',
			},
		},
		{ desc: '5. Консультируем и помогаем Вам по вопросам работы с сайтом' },
	]
	const data2 = [
		{
			title: 'Разработка сайта',
			content: [
				{
					desc: 'Дизайн корпоративного сайта на основе одного из выбранных тарифов:',
				},
				{
					desc: 'Домен сайта RU, РФ, SU, СОМ. RU, NET.RU, ORG.RU, МSК.RU, SРВ.RU, NOV.RU, SOCHI.SU - в подарок (или подключим Ваш)',
				},
				{
					desc: 'Заполнение до 10 страниц сайта материалами Заказчика (должны быть предоставлены в электронном виде)',
				},
				{
					desc: 'Регистрация в поисковых системах Yandex.ru, Google.com, Mail.ru ',
				},
				{
					desc: 'Установка счетчика Liveinternet ',
				},
			],
		},
		{
			title: 'Обслуживание сайта',
			content: [
				{
					desc: 'Хостинг - 4 месяца в подарок',
				},
				{
					desc: 'Место для сайта - 2 Gb ',
				},
				{
					desc: '20 E-Mail адресов',
				},
				{
					desc: 'Система управления сайтом (CMS)',
				},
				{
					desc: 'Техническая поддержка',
				},
				{
					desc: 'Резервное копирование сайта',
				},
				{
					desc: 'Бесплатная линия поддержки',
				},
			],
		},
		{
			title: 'Продвижение сайта',
			content: [
				{
					desc: 'SEO панель для продвижения сайта',
				},
				{
					desc: 'Управление мета-тегами ',
				},
				{
					desc: 'Поддержка адресов ЧПУ',
				},
				{
					desc: 'Управление контекстной рекламой',
				},
			],
		},
		{
			title: 'Виды страниц',
			content: [
				{
					desc: 'Текстовая страница',
				},
				{
					desc: 'Конструктор форм ',
				},
				{
					desc: 'Фотогаллерея',
				},
				{
					desc: 'Напишите нам',
				},
				{
					desc: 'Вопрос-ответ',
				},
				{
					desc: 'Страница с файлами',
				},
				{
					desc: 'Опросы',
				},
				{
					desc: 'Логин и регистрация',
				},
				{
					desc: 'Карта сайта, поиск по сайту',
				},
				{
					desc: 'Товары и услуги',
				},
				{
					desc: 'Пользователи, персонал',
				},
				{
					desc: 'Контакты',
				},
				{
					desc: 'Конструктор страниц',
				},
			],
		},
	]

	const [activeTab, setActiveTab] = useState(0)

	const tabChanger = index => {
		setActiveTab(index)
	}
	return (
		<div className='tabs'>
			<div className='container'>
				<div className='tabs__title'>
					<h1
						className={activeTab === 0 ? 'tabs__title active' : 'tabs__title'}
						onClick={() => tabChanger(0)}
					>
						Порядок работы
					</h1>
					<h1
						className={activeTab === 1 ? 'tabs__title active' : 'tabs__title'}
						onClick={() => tabChanger(1)}
					>
						Что входит в цену?
					</h1>
				</div>

				<div className='tabs__content'>
					{activeTab === 0 &&
						data1.map((item, index) => <Tab1 key={index} item={item} />)}
					{activeTab === 1 && <Tab2 data={data2} />}
				</div>
			</div>
		</div>
	)
}

export default Tabs
