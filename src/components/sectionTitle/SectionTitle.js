import React from 'react'

const SectionTitle = ({ text, subText }) => {
	return (
		<h1 className='section__title'>
			{text} <br />
			<span>{subText}</span>
		</h1>
	)
}

export default SectionTitle
