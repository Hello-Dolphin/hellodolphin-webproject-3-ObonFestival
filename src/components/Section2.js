import styled from 'styled-components';
import mascotGroup from '../images/Mascot_group.png';
import bird from '../images/Bird_tran.png';
import corner from '../images/Vector.png';

const Bg = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(56, 55, 55, 0.67);
    display: flex;
    flex-direction: row;

`;

const BoxLeft = styled.div`
    display: flex;
    flex-direction: column;
    flex: 6;
    justify-content: space-between;
    align-items: center;
`;

const BoxBird = styled.div`

`;

const Bird = styled.img`
    width: 300px;
    height: 300px;
    transform: translateY(90px);
`;

const TextHead = styled.p`
    font-family: Josefin Sans;
    color: black;
    font-style: normal;
    font-weight: bold;
    font-size: 70px;
`;

const Divider = styled.div`
    width: 75px;
    height: 7px;
    background: black;
`;

const Text = styled.p`
    font-family: prompt;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: white;
    text-align: left;
    margin-top: 20px;
`;

const BoxCorner = styled.div`
    text-align: left;
    align-self: flex-start;
`;

const Corner = styled.img`
    width: 500px;
    height: 200px;
    position: relative;
`;

const BoxRight = styled.div`
    flex: 4;
    background-color: rgba(132, 79, 73, 0.9);
    display: flex;
    
    justify-content: center;
`;

const Mascot = styled.img`
    width: 600px;
    height: 1000px;
`;

export default () => {
    return (
        <Bg id="section2">
            <BoxLeft>
                <BoxBird data-aos="fade-left" data-aos-duration="1500">
                    <Bird src={bird} />
                </BoxBird>
                <TextHead data-aos="fade-up" data-aos-duration="1500">
                    ABOUT OBON
                </TextHead>
                <Divider data-aos="flip-down" data-aos-duration="1500">&nbsp;</Divider>
                <Text data-aos="fade-right" data-aos-duration="1500">
                    เทศกาลโคมไฟ หรือ โอบ้ง <br></br> เป็นเทศกาลของญี่ปุ่นจัดขึ้นในช่วงฤดูร้อนเพื่อทำการเซ่นไหว้ถึง <br></br>บรรพบุรุษที่ได้ล่วงลับไปแล้วเชื่อกันว่าวิญญาณของท่านจะกลับมายังโลก <br></br>
                คนญี่ปุ่นจึงพากันกลับมาเยี่ยมญาติพี่น้องที่บ้านของตนเอง <br></br>
                และจัดเตรียมอาหารเพื่อไหว้บรรพบุรุษ อีกทั้งยังมีการจุดไฟ <br></br>
                โอคุริบิ ซึ่งเป็นตะเกียงลอยในแม่น้ำเพื่อส่งดวงวิญญาณกลับ <br></br>
                ไปยังภพภูมิที่ดี
                </Text>
                <BoxCorner data-aos="fade-up-right" data-aos-duration="1500">
                    <Corner src={corner} />
                </BoxCorner>
            </BoxLeft>
            <BoxRight>
                <Mascot src={mascotGroup} data-aos="zoom-out-left" data-aos-duration="1500"></Mascot>
            </BoxRight>
        </Bg>
    )
}