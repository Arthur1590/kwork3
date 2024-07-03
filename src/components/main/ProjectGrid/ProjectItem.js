import React from 'react'

const ProjectItem = ({item}) => {
	return (
		<div className='projects__item'>
			<img src={item} alt="oops" />
		</div>
	)
}

export default ProjectItem