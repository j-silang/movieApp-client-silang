import Banner from '../components/Banner';

export default function Home() {
	const data ={
		title: "ABSOLUTE CINEMA",
		content: "PEAK!",
		destination: "/movies",
		buttonLabel: "START WATCHING"
	}

	return (
		<>
			<Banner data={data}/>
		</>
	)
}