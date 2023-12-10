import styled from "@emotion/styled";

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 34px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
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
  outline: none;

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

const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 170px;
  height: 48px;
  border-radius: 14px;
`;

const Select = styled.select`
  border: none;
  padding: 14px 69px 14px 18px;
  background: #f7f7fb;
  outline: none;
  width: 100%;
  border-radius: 14px;
  appearance: none;
`;

const Option = styled.option``;

export {
  Form,
  Label,
  Input,
  LeftInput,
  RightInput,
  SelectContainer,
  Select,
  Option,
};
