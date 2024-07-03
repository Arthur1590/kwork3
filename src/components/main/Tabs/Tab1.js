import React from 'react'

const Tab1 = ({ item }) => {
	if (item.descDeep) {
		return (
			<div className='tab1'>
				<p>{item.desc}</p>

				<p>
					<span></span> {item.descDeep.subDesc1}
				</p>
				<p>
					<span></span> {item.descDeep.subDesc2}
				</p>
				<p>
					<span></span> {item.descDeep.subDesc3}
				</p>
				<p>
					<span></span> {item.descDeep.subDesc4}
				</p>
			</div>
		)
	}
	return <p>{item.desc}</p>
}

export default Tab1
