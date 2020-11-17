import styled from 'styled-components';
import pink3 from '../images/pink3.png';
import fire from '../images/toro.png';
import { Link } from 'react-router-dom';

const Bg = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(144, 96, 76, 0.56);
    background-image: url(${pink3});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    padding: 150px;
`;

const Col1 = styled.div`
    
`;

const Col2 = styled.div`
    padding-top: 30px;
    display: flex;
    align-self: center;
`;

const Col3 = styled.div`
    padding-top: 45px;
    display: flex;
    align-self: center;
    margin-bottom: 30px;
`;

const Text_head = styled.p`
    font-family: Josefin Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 50px;
    text-align: left;
    padding-left: 300px;
`;

const Pic = styled.img`
    width: 650px;
    height: 350px;
`;

const Text_content = styled.p`
    font-family: prompt;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    text-align: left;
    padding-right: 25px;
`;

const BoxButton = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex: 1;
    margin-right: 4px;
    margin-bottom: 2px;
`;

const Button = styled.div`
    width: 182px;
    height: 74px;
    background: rgba(18, 27, 34, 0.87);
    font-size: 30px;
    color: white;
    padding-left: 55px;
    padding-top: 10px;
    text-decoration: none;
`;


export default () => {
    return (
        <Bg>
            <Col1>
                <Text_head data-aos="fade-right" data-aos-duration="1500">
                    Toro Nagashi
                </Text_head>
            </Col1>
            <Col2>
                <Pic src={fire} data-aos="zoom-in"
                    data-aos-duration="2000" />
            </Col2>
            <Col3>
                <Text_content data-aos="fade-right"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="1000">
                    จัดขึ้นเป็นครั้งแรกใน 1946 คือ Toro Nagashi หมายถึง <br></br>
                    “ โคมไฟที่ไหลลื่น “ เป็นพิธีชาวญี่ปุ่นที่ผู้ร่วมลอยโคมไฟประดิษฐ์ <br></br>
                    ขึ้นลงแม่น้ำเพื่อระลึกถึงวิญญาณของคนตาย
                </Text_content>
            </Col3>
            <Link to="/">
                <BoxButton>
                    <Button>
                        Back
                        </Button>
                </BoxButton>
            </Link>

        </Bg>
    )
}