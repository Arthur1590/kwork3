import React from 'react'
import CustomBtn from '../../UI/CutomBtn/CustomBtn'
import profile from './img/social 1.svg'
import email from './img/mail 2.svg'
import phone from './img/call в 2.svg'

const FaqForm = () => {
	return (
		<div className='form'>
			<div className='container'>
				<div className='form__content'>
					<div className='form__content-info'>
						<h1 className='form__content-title'>Заполните форму</h1>
						<p className='form__content-desc'>
							и в течении <strong>10 минут</strong> наш менеджер ответит Вам
						</p>
					</div>
					<div className='form__content-inputs'>
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
							<textarea cols={30} placeholder='Ваш вопрос'></textarea>
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

export default FaqForm
