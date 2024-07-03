import React from 'react'
import IntroContent from './IntroContent'
import IntroPic from './IntroPic'
import cloud from './img/clouds.png'
import arrow from './img/arrow.svg'
import './intro.css'

const Intro = () => {
	return (
		<div className='intro'>
			<div className='container'>
				<IntroContent />
				<IntroPic />
				<div className='intro__controlls'>
					<img className='up' src={arrow} alt='oops' />
					<div className='filler'>
						<span></span>
						<p className='filler__counter'>1/15</p>
					</div>
					<img className='down' src={arrow} alt='oops' />
				</div>
				<img className='cloud' src={cloud} alt='' />
			</div>
		</div>
	)
}

export default Intro
