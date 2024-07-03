import React from 'react'
import SectionTitle from '../../sectionTitle/SectionTitle'
import profile from './img/social 1.svg'
import phone from './img/call в 2.svg'
import CustomBtn from '../../UI/CutomBtn/CustomBtn'
import bg from './img/decor_bgg.png'
import book from './img/decor__book.png'
import './form.css'

const Form = () => {
	return (
		<div className='form'>
				<img className='bg__big' src={bg} alt="" />
			<div className='container'>
				<img className='book' src={book} alt="" />
				<SectionTitle
					text='Вам'
					span='нужен современный красивый сайт,'
					text2='который будет приносить клиентов?'
				/>
				<div className='form__content'>
					<div className='form__content-info'>
						<h1 className='form__content-title'>Заполните форму</h1>
						<p className='form__content-desc'>
							и моментально получите КП на разработку вашего сайта
						</p>
					</div>
					<div className='form__content-inputs'>
						<label>
							<img src={profile} alt='' />
							<input type='text' placeholder='Ваше имя' />
						</label>

						<label>
							<img src={phone} alt='' />
							<input type='text' placeholder='+7(_ _ _) _ _ _ - _ _ - _ _' />
						</label>
						<CustomBtn content='Отправить' />
						<label className='checkbox'>
							<input type='checkbox' />
							<p>Нажимая, соглашаюсь на обработку персональных данных</p>
						</label>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Form
