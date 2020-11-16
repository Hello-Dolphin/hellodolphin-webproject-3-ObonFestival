import styled from 'styled-components';
import Sc1_background from '../images/section1_bg.png';
<<<<<<< HEAD
import chromfire from '../images/Chromfire.png';
import keyframe from '../styles/App.css';
=======
import Chromfire from '../images/Chromfire.png';
>>>>>>> 7373a24a0885c366f4d6753b54f1c78a48fa9a20

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
	font-size: 50px;
	letter-spacing: 4px;
	color: white;
	text-transform: uppercase;
	font-family: Josefin Sans;
	transform: translateY(-30px);

`;

const Text2 = styled.h1`
	font-size: 25px;
	letter-spacing: 8px;
	color: #EEE;
	text-transform: uppercase;
	font-family: Josefin Sans;
	transform: translateY(-20px);

`;

<<<<<<< HEAD
const Chromfire = styled.img`
	width: 100px;
    height: 100px;
	position: relative;
	transform: translateY(200px);
	margin-right: 1050px; 
=======
>>>>>>> 7373a24a0885c366f4d6753b54f1c78a48fa9a20





export default () => {
	return (

		<Section id="section1">

			<>
<<<<<<< HEAD
			<Chromfire className="chomfire" src={chromfire}></Chromfire>
				<Text1 className="text">Obon</Text1>
				<Text2 className="text">Festival</Text2>
=======
			<img class ="test" alt="chomfire" src={Chromfire}></img>
			<img class ="test" alt="chomfire" src={Chromfire}></img>

				<Text1>Obon</Text1>
				<Text2>Festival</Text2>
>>>>>>> 7373a24a0885c366f4d6753b54f1c78a48fa9a20
					

			</>
		</Section>
	)
}