import Header from './components/header/Header'
import Intro from './components/main/Intro/Intro'
import Price from './components/main/PriceContent/Price'
import DoubleVariant from './components/main/Variants/DoubleVariant'
import SectionTitle from './components/sectionTitle/SectionTitle'

function App() {
	return (
		<div className='App'>
			<Header />

			<main className='main'>
				<Intro />
				<SectionTitle text='Вы можете заказать 2 варианта сайта' />
				<DoubleVariant />
				<Price />
			</main>
		</div>
	)
}

export default App
