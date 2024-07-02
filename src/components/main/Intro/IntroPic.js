import React from 'react'
import mainPC from './img/mainPC.png'
import denga from './img/denga.png'
import mobile from './img/mobile.png'

const IntroPic = () => {
	return (
		<figure className='intro__picture'>
			<img className='intro__picture-pc' src={mainPC} alt='' />
			<img className='intro__denga' src={denga} alt='' />
			<img className='intro__mobile' src={mobile} alt='' />
		</figure>
	)
}

export default IntroPic
