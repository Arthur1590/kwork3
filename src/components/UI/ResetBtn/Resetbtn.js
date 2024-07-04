import React from 'react'
import '../customUi.css'

const ResetBtn = ({ content, reset }) => {
	return (
		<button onClick={reset} className='custom__btn'>
			{content}
		</button>
	)
}

export default ResetBtn
