import React from 'react'
import IntroContent from './IntroContent'
import IntroPic from './IntroPic'
import cloud from './img/clouds.png'
import './intro.css'

const Intro = () => {
	return (
		<div className='intro'>
			<div className='container'>
				<IntroContent />
				<IntroPic />
				<img className='cloud' src={cloud} alt='' />
			</div>
		</div>
	)
}

export default Intro
