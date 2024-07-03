import clsx from 'clsx'
import React from 'react'

const Accordion = ({ title, content, isOpen, onClick }) => {
	const activeState = clsx('tabs__accordion-content', { active: isOpen })

	return (
		<div className='tabs__accordion'>
			<div className='tabs__accordion-title' onClick={onClick}>
				{title}
			</div>

			{content &&
				content.map((item, index) => (
					<div key={index} className={activeState}>
						<span></span>
						<p>{item.desc}</p>
					</div>
				))}
		</div>
	)
}

export default Accordion
