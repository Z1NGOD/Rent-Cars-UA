import styled from "@emotion/styled";

const BASE_TEXT_STYLE = `color: #fff;
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px;`;

const MainBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background-image: url("https://media.architecturaldigest.com/photos/5de6d78c34c35b000880a948/16:9/w_2991,h_1682,c_limit/10_ss300p_ehra-lessien.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  z-index: -1;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px 0 80px 0;
`;

const MainTitle = styled.h1`
  ${BASE_TEXT_STYLE}
  font-size: 42px;
  margin: 0 auto;
`;

const MainText = styled.p`
  ${BASE_TEXT_STYLE}
  margin: 20px auto 0 auto;
  font-size: 20px;
`;

const InfoList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 80px;

  margin-top: 94px;
`;

const InfoItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 20px;

  background-image: linear-gradient(#000000dd, #000000dd);
  border-radius: 20px;
  padding: 20px;
  width: 1200px;

  transition: 300ms;

  &:hover {
    background-color: #000000;
  }
  &:hover p {
    text-shadow: 0 0 10px #ffffffbb;
  }
`;

const InfoTitle = styled.h2`
  ${BASE_TEXT_STYLE}
  margin: 0 auto;
  font-weight: 700;
  font-size: 24px;
`;

const InfoText = styled.p`
  ${BASE_TEXT_STYLE}
  margin: 0 auto;

  text-align: center;

  transition: 300ms;
`;

const InfoSublist = styled.ul`
  display: flex;
  justify-content: center;

  gap: 20px;
`;

const InfoSubItem = styled.li`
  display: flex;
  flex-direction: column;
`;

const InfoSubItemTitle = styled.h3`
  ${BASE_TEXT_STYLE}

  width: 100%;
  text-align: center;

  font-weight: 700;
`;

const InfoSubItemText = styled.p`
  ${BASE_TEXT_STYLE}
  width: 260px;
  text-align: center;

  transition: 300ms;
`;

export {
  MainBackground,
  MainWrapper,
  MainTitle,
  MainText,
  InfoList,
  InfoItem,
  InfoTitle,
  InfoText,
  InfoSublist,
  InfoSubItem,
  InfoSubItemTitle,
  InfoSubItemText,
};
