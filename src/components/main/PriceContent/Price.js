import React, { useState } from 'react'
import SectionTitle from '../../sectionTitle/SectionTitle'
import Pricelevel1 from './PriceLevels/Pricelevel1'
import Pricelevel2 from './PriceLevels/PriceLevel2'
import Pricelevel3 from './PriceLevels/Pricelevel3'
import Pricelevel4 from './PriceLevels/PriceLevel4'
import './price.css'
import PricelevelEnd from './PriceLevels/PricelevelEnd'

const Price = () => {
	const [step, setStep] = useState(1)
	const [answers, setAnswers] = useState({})

	const handleNext = () => {
		setStep(step + 1)
	}

	const finishQuest = () => {
		console.log('Ответы:', answers)
	}

	const getAnswers = (question, answer) => {
		setAnswers(prevAnswers => ({
			...prevAnswers,
			[question]: answer,
		}))
	}
	return (
		<div className='price'>
			<SectionTitle
				subText='Ответьте на несколько простых вопросов'
				text='Узнайте стоимость разработки Вашего сайта'
			/>

			<div className='price__content'>
				<div className='price__content-levels'>
					{step === 1 && (
						<Pricelevel1
							counter={step}
							onNext={handleNext}
							onAnswer={answer => getAnswers('question1', answer)}
						/>
					)}
					{step === 2 && (
						<Pricelevel2
							counter={step}
							onNext={handleNext}
							onAnswer={answer => getAnswers('question2', answer)}
						/>
					)}
					{step === 3 && (
						<Pricelevel3
							counter={step}
							onNext={handleNext}
							onAnswer={answer => getAnswers('question3', answer)}
						/>
					)}
					{step === 4 && (
						<Pricelevel4
							counter={step}
							onNext={handleNext}
							onAnswer={answer => getAnswers('question4', answer)}
						/>
					)}
					{step === 5 && (
						<PricelevelEnd
							counter={step}
							onNext={finishQuest}
							onAnswer={answer => getAnswers('question5', answer)}
						/>
					)}
				</div>
			</div>
		</div>
	)
}

export default Price
