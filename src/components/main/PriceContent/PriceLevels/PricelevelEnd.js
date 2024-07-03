import React, { useState } from 'react'
import phone from '../img/call в 2.svg'
import gift from '../img/подарок 1.png'
import CustomBtn from '../../../UI/CutomBtn/CustomBtn'
import '../price.css'

const PricelevelEnd = ({ onNext, onAnswer }) => {
	return (
		<div className='bonus'>
			<div className='container'>
				<div className='bonus__wrapper'>
					<div className='bonus__content'>
						<h1 className='price__title'>
							Заполните форму и получите приятный бонус от нашей команды
						</h1>
						<div className='bonus__controlls'>
							<label>
								<img src={phone} alt='oops' />
								<input type='text' placeholder='+7(_ _ _) _ _ _ - _ _ - _ _' />
							</label>
							<CustomBtn content='Отправить' onNext={onNext} />
						</div>
					</div>
					<img className='gift' src={gift} alt='' />
				</div>
			</div>
		</div>
	)
}

export default PricelevelEnd
