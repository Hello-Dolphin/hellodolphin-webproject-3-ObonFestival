import styled from 'styled-components';

const Box_name = styled.div`
    width: 100vw;
    height: 35vh;
    display: flex;
    flex-direction: row;
    background: #1e1f21;
    align-items: flex-start;
    padding-top: 75px;
`;

const Box1 = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #1e1f21;
    padding-left: 100px;
`;

const Box2 = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #1e1f21;
`;

const Box3 = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #1e1f21;
    padding-right: 100px;
`;

const Head = styled.p`
    font-family: Josefin Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    color: white;
`;

const Name = styled.p`
    font-family: prompt;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    color: white;
`;

export default () => {
    return (
        <Box_name>
            <Box1>
                <Head>
                    WEB DESIGN
                </Head>
                <Name>
                    นางสาวเกศดารา ศิลารัตน์
                </Name>
                <Name>
                    นางสาวรดากรณ์ ทองวิไล
                </Name>
            </Box1>
            <Box2>
                <Head>
                    FRONT-END
                </Head>
                <Name>
                    นายธนกฤต แคนขา
                </Name>
                <Name>
                    นายธีรภัทร เนียมหอม
                </Name>
                <Name>
                    นายวริศชัย สุรชัยธรวัฒน์
                </Name>
            </Box2>
            <Box3>
                <Head>
                    INFRASTRUCTURE
                </Head>
                <Name>
                    นายชิษณุชา สมบูรณ์วรรณะ
                </Name>
            </Box3>
        </Box_name>
    )
}