import React from 'react'
import {
	gridImg1,
	gridImg2,
	gridImg3,
	gridImg4,
	gridImg5,
	gridImg6,
	gridImg7,
	gridImg8,
	gridImg9,
} from './ReExport' // * Ре-экспорт для удобства
import ProjectItem from './ProjectItem'
import './projects.css'
import CustomBtn from '../../UI/CutomBtn/CustomBtn'
import SectionTitle from '../../sectionTitle/SectionTitle'

const Project = () => {
	const data = [
		{
			id: 1,
			img: gridImg1,
		},
		{
			id: 2,
			img: gridImg2,
		},
		{
			id: 3,
			img: gridImg3,
		},
		{
			id: 4,
			img: gridImg4,
		},
		{
			id: 5,
			img: gridImg5,
		},
		{
			id: 6,
			img: gridImg6,
		},
		{
			id: 7,
			img: gridImg7,
		},
		{
			id: 8,
			img: gridImg8,
		},
		{
			id: 9,
			img: gridImg9,
		},
	]
	return (
		<div className='projects'>
			<div className='container'>
				<SectionTitle text='Наши многостраничные сайты, которые приносят клиентов' />
				<div className='projects__wrapper'>
					{data &&
						data.map(item => <ProjectItem key={item.id} item={item.img} />)}
				</div>
			</div>
			<CustomBtn content={'Загрузить еще'} />
		</div>
	)
}

export default Project
