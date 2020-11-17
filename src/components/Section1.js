import styled from 'styled-components';
import Sc1_background from '../images/section1_bg.png';
import fire from '../images/Chromfire.png';

const Section = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	background-color: #383737;
	background-image: url(${Sc1_background});
	background-repeat: no-repeat;
	background-position: bottom;
	background-size: 100vw auto;
`;

const Text1 = styled.h1`
	font-size: 100px;
	letter-spacing: 4px;
	color: white;
	text-transform: uppercase;
	font-family: Josefin Sans;
	transform: translateY(-30px);
`;

const Text2 = styled.h1`
	font-size: 50px;
	letter-spacing: 8px;
	color: #EEE;
	text-transform: uppercase;
	font-family: Josefin Sans;
	transform: translateY(-20px);
`;

const Chromfire1 = styled.img`
	width: 100px;
    height: 100px;
	transform: translateY(200px);
	margin-right: 1500px; 
	margin-top: 25px;
`;

const Chromfire2 = styled.img`
	width: 100px;
    height: 100px;
	transform: translateY(200px);
	margin-right: 1050px; 
`;

export default () => {
	return (
		<Section id="section1">
			<>
			
				<Text1 className="text">Obon</Text1>
				<Text2 className="text">Festival</Text2>
				<Chromfire1 className="chromfire" src={fire}></Chromfire1>
				<Chromfire2 className="chromfire" src={fire}></Chromfire2>
			</>
		</Section>
	)
}