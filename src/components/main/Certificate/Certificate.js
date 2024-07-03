import React from 'react'
import frame1 from './img/review_1 3.png'
import frame2 from './img/review_2 1.png'
import frame3 from './img/review_3 1.png'
import decor1 from './img/Frame.png'
import decor2 from './img/Frame2.png'
import './certificate.css'

const Certificate = () => {
	return (
		<div className='certificate'>
			<figure className='certificate__wrapper'>
				<img className='certificate__img' src={frame1} alt='oops' />
				<img className='certificate__img' src={frame2} alt='oops' />
				<img className='certificate__img' src={frame3} alt='oops' />
				<img className='certificate__decor top' src={decor1} alt='oops' />
				<img className='certificate__decor bottom' src={decor2} alt='oops' />
			</figure>
		</div>
	)
}

export default Certificate
