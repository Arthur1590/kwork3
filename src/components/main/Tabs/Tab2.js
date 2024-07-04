import React, { useState } from 'react'
import Accordion from './Accordion'

const Tab2 = ({ data }) => {
	const [activeIndex, setActiveIndex] = useState(null)

	const toggleAccordion = index => {
		setActiveIndex(activeIndex === index ? null : index)
	}

	return (
		<div className='tab2'>
				{data &&
					data.map((item, index) => (
						<Accordion
							key={index}
							title={item.title}
							content={item.content}
							isOpen={activeIndex === index}
							onClick={() => toggleAccordion(index)}
						/>
					))}
		</div>
	)
}

export default Tab2
