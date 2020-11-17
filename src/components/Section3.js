import { Link } from 'react-router-dom';
import styled from 'styled-components';
import img_1 from '../images/Chroms.png';
import img_2 from '../images/Vector_2.png';
import img_3 from '../images/Vector_3.png';

const Bg = styled.div`
    width: 100vw;
    height: 100vh;
    background: #E5E5E5;
    display: flex;
    flex-direction: column;
`;

const Text = styled.div`
    font-family: Josefin Sans;
    font-style: normal;
    text-transform: uppercase;
    color: black;
    font-weight: bold;
    font-size: 64px;
    margin-top: 110px;
    text-align: center;
`;

const Box = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const Divider = styled.div`
    width: 75px;
    height: 7px;
    background: black;
`;

const Divider2 = styled.div`
    width: 75px;
    height: 7px;
    background: #E5E5E5;
`;

const BoxCard = styled.div`
    display: flex;
    margin-top: 30px;
    padding: 0 100px;
    flex-direction: row;

    > * {
        margin: 30px;
    }
`;

const Card1 = styled.div`
    width: 365px;
    height: 500px;
    flex: 1;
    background: rgba(144, 96, 76, 0.56);
    display: flex;
    flex-direction: column;
    align-items: center;
`;


const Card2 = styled.div`
    width: 365px;
    height: 500px;
    flex: 1;
    background: #C4C4C4;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Card3 = styled.div`
    width: 300px;
    height: 500px;
    flex: 1;
    background: #C4C4C4;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Img = styled.img`
    align-self: flex-start;
    width: 380px;
`;

const TextCard = styled.h1`
    font-family: Josefin Sans;
    font-size: 36px;
    font-weight: bold;
    margin-top: 30px;
`;

const Button = styled.div`
    width: 190px;
    height: 80px;
    background: rgba(18, 27, 34, 0.87);
    position: relative;
    transform: translateY(60px);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
`;

export default () => {
    return (
        <Bg id="section3">
            <Text data-aos="fade-down" data-aos-duration="2000">
                Activities
            </Text>
            <Box>
                <Divider></Divider>
                <Divider2></Divider2>
                <Divider></Divider>
            </Box>
            <BoxCard>
                <Card1 data-aos="flip-left" data-aos-duration="2000">
                    <Img src={img_1} />
                    <TextCard>
                        Toro Nagashi
                    </TextCard>
                    <Link to="/toro" data-aos="zoom-in" data-aos-duration="3000">
                        <Button>とうろう流し)</Button>
                    </Link>
                </Card1>
                <Card2 data-aos="flip-left" data-aos-duration="2000">
                    <Img src={img_2} />
                    <TextCard>
                        Bon Odori dance
                    </TextCard>
                    <Link to="/bon" data-aos="zoom-in" data-aos-duration="3000">
                        <Button>盆踊りダンス</Button>
                    </Link>
                </Card2>
                <Card3 data-aos="flip-left" data-aos-duration="2000">
                    <Img src={img_3} />
                    <TextCard>
                        Pay respect to ancestor
                    </TextCard>
                    <Link to="/respect" data-aos="zoom-in" data-aos-duration="3000">
                        <Button>おぼん</Button>
                    </Link>
                </Card3>
            </BoxCard>
        </Bg>
    )
}