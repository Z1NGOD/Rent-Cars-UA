import styled from "@emotion/styled";

const LearnMoreWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 541px;
  height: 752px;
  padding: 40px;

  border-radius: 24px;
  background: #fff;
`;

const ExitBtn = styled.svg`
  position: absolute;
  top: 16px;
  right: 16px;

  stroke: #121417;
  fill: none;

  width: 24px;
  height: 24px;

  transition: 300ms;
  cursor: pointer;

  &:hover {
    stroke: #3470ff;
  }
`;

const CarImageWrapper = styled.div`
  border-radius: 14px;
  background: #f3f3f2;
  width: 461px;
  height: 248px;
  overflow: hidden;

  background-image: url(${(props) => props.imgLink});
  background-size: cover;
  background-position: center;
`;

const CarTitle = styled.h3`
  color: #121417;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-top: 16px;
`;

const CarDesc = styled.p`
  color: #121417;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-top: 14px;
`;

const CarAccessoriesTitle = styled.h3`
  color: #121417;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-top: 24px;
`;

const CarAccessories = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-top: 8px;
`;

const CarConditionsTitle = styled.h3`
  color: #121417;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-top: 24px;
`;

const CarConditionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  width: 461px;
  height: 72px;
  margin-top: 8px;
`;

const CarCondition = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  height: 32px;
  padding: 0 14px;
  border-radius: 35px;
  background: #f9f9f9;
`;

const CarConditionText = styled.p`
  color: #363535;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.24px;
`;

const CarConditionTextSpan = styled.span`
  color: #3470ff;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.24px;
`;

const ContactBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 168px;
  height: 44px;
  margin-top: 24px;
  border-radius: 12px;
  background: #3470ff;

  cursor: pointer;

  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
`;

export {
  LearnMoreWrapper,
  ExitBtn,
  CarImageWrapper,
  CarTitle,
  CarDesc,
  CarAccessoriesTitle,
  CarAccessories,
  CarConditionsTitle,
  CarConditionsWrapper,
  CarCondition,
  CarConditionText,
  CarConditionTextSpan,
  ContactBtn,
};
