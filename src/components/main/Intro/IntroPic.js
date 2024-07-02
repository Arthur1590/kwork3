import React from 'react'
import mainPC from './img/mainPC.png'
import denga from './img/denga.png'
import mobile from './img/mobile.png'
import coin from './img/Mask Group.png'

const IntroPic = () => {
	return (
		<figure className='intro__picture'>
			<img className='intro__picture-pc' src={mainPC} alt='' />
			<img className='intro__denga' src={denga} alt='' />
			<img className='intro__mobile' src={mobile} alt='' />
			<img className='intro__coin' src={coin} alt='' />
		</figure>
	)
}

export default IntroPic
