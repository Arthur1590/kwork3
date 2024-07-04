import React from 'react'
import '../customUi.css'

const CustomBtn = ({ content, onNext }) => {
	return (
		<button onClick={onNext} className='custom__btn'>
			{content}
		</button>
	)
}

export default CustomBtn
