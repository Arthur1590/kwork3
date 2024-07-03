import React from 'react'
import Intro from './Intro/Intro'
import SectionTitle from '../sectionTitle/SectionTitle'
import DoubleVariant from './Variants/DoubleVariant'
import Price from './PriceContent/Price'
import Project from './ProjectGrid/Project'
import Tabs from './Tabs/Tabs'
import Form from './Form/Form'
import Certificate from './Certificate/Certificate'
import Faq from './FAQ/Faq'

const Main = () => {
	return (
		<main className='main'>
			<Intro />
			<SectionTitle text='Вы можете заказать 2 варианта сайта' />
			<DoubleVariant />
			<Price />
			<SectionTitle text='Наши многостраничные сайты, которые приносят клиентов' />
			<Project />
			<Tabs />
			<SectionTitle text='Качество, подтвержденное клиентами' />
			<Certificate />
			<Form />
			<Faq />
		</main>
	)
}

export default Main
