import React from 'react'
import CustomBtn from '../../UI/CutomBtn/CustomBtn'
import profile from './img/social 1.svg'
import email from './img/mail 2.svg'
import phone from './img/call в 2.svg'
import './faq.css'

const FaqForm = () => {
	return (
		<div className='faq__form'>
			<div className='container'>
				<div className='faq__form-content'>
					<div className='faq__content-info'>
						<h1 className='faq__content-title'>Заполните форму</h1>
						<p className='faq__content-desc'>
							и в течении <strong>10 минут</strong> наш менеджер ответит Вам
						</p>
					</div>
					<div className='faq__content-inputs'>
						<label>
							<img src={profile} alt='oops' />
							<input type='text' placeholder='Ваше имя' />
						</label>

						<label>
							<img src={phone} alt='oops' />
							<input type='text' placeholder='+7(_ _ _) _ _ _ - _ _ - _ _' />
						</label>
						<label>
							<img src={email} alt='oops' />
							<textarea cols={53} rows={5} placeholder='Ваш вопрос'></textarea>
						</label>
						<CustomBtn content='Отправить' />
						<label className='faq__checkbox'>
							<input className='faq__checkbox-box' type='checkbox' />
							<p>Нажимая, соглашаюсь на обработку персональных данных</p>
						</label>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FaqForm
