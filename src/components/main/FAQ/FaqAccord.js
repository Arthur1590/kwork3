import clsx from 'clsx'
import React from 'react'
import './faq.css'

const FaqAccord = ({ title, content, isOpen, onClick }) => {
	const activeState = clsx('faq__accord-content', { active: isOpen })

	return (
		<div className='faq__accord-wrapper'>
			<div className='faq__accord-title' onClick={onClick}>
				{title}
			</div>

			{content &&
				content.map((item, index) => (
					<div key={index} className={activeState}>
						<p className='faq__accord-desc'>{item.desc}</p>
					</div>
				))}
		</div>
	)
}

export default FaqAccord
