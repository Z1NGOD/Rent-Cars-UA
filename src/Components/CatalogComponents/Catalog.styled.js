import styled from "@emotion/styled";
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 34px;
`;
const Label = styled.label`
  display: flex;
  color: #8a8a89;
  font-weight: 500;
  line-height: 18px;
`;
const Input = styled.input`
  display: flex;
  width: 160px;
  height: 48px;
  padding: 14px 93px 14px 24px;
  align-items: center;
  background: #f7f7fb;
  border: none;
  &::placeholder {
    color: #121417;
    font-size: 16px;
    font-weight: 500;
  }
`;
const LeftInput = styled(Input)`
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
`;
const RightInput = styled(Input)`
  border-radius: 0px 14px 14px 0px;
  border-left: 1px solid rgba(138, 138, 137, 0.2);
`;
const Select = styled.select`
  display: flex;
  padding: 14px 89px 14px 18px;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  gap: 32px;
  background: #f7f7fb;
  border: none;
`;
const Option = styled.option`
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: calc((100% - 3 * 38px) / 4);
  border-radius: 14px;
`;
const Image = styled.img`
  border-radius: 14px;
`;
const Title = styled.h3`
  color: #121417;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;
const TitleSpan = styled.span`
  color: #3470ff;
`;
const Tag = styled.p`
  color: rgba(18, 20, 23, 0.5);
`;
export {
  Form,
  Label,
  Input,
  LeftInput,
  RightInput,
  Select,
  Option,
  List,
  ListItem,
  Image,
  Title,
  TitleSpan,
  Tag,
};
