import React from 'react'

const SectionTitle = ({ text, subText, span, text2 }) => {
	return (
		<h1 className='section__title limited'>
			{text} <span className='green'>{span}</span>{' '}
			{text2} <br />
			<span>{subText}</span>
		</h1>
	)
}

export default SectionTitle
