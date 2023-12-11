import styled from "@emotion/styled";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 18px;

  margin: 0 auto;
  width: 859px;
  height: 74px;
`;

const FormElementContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: ${(props) => {
    switch (props.selectType) {
      case "brand":
        return "224px";
      case "price":
        return "125px";
      case "input":
        return "474px";

      default:
        break;
    }
  }};
  height: 74px;
`;

const SelectBtnTitle = styled.span`
  color: #8a8a89;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;

const SelectBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: ${(props) => {
    return props.selectType === "brand" ? "224px" : "125px";
  }};
  height: 48px;
  padding: 0 18px;

  border-radius: 14px;
  background: #f7f7fb;

  cursor: pointer;
  user-select: none;
`;

const SelectBtnText = styled.span`
  color: #121417;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

const SelectBtnIcon = styled.svg`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 20px;

  fill: none;

  transition: 300ms;

  transform: rotate(
    ${(props) => {
      return props.isBrandDropDownOpen ? "180deg" : "0";
    }}
  );
`;

const SelectContent = styled.div`
  position: absolute;
  top: 78px;
  left: 0;

  display: flex;

  width: ${(props) => {
    return props.selectType === "brand" ? "224px" : "125px";
  }};
`;

const SelectOptions = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  width: 100%;
  height: ${(props) => {
    return props.selectType === "brand" ? "272px" : "188px";
  }};
  padding: 14px 8px 14px 18px;

  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);
  background: #fff;
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);

  transition: 300ms;

  overflow-y: scroll;
  opacity: ${(props) => {
    return props.isBrandDropDownOpen ? "1" : "0";
  }};

  pointer-events: ${(props) => {
    return props.isBrandDropDownOpen ? "all" : "none";
  }};
  z-index: 2;
`;

const SelectOptionsItem = styled.li`
  width: 190px;
  color: ${(props) => {
    return props.itemValue === props.isItemActive ? "rgba(18, 20, 23)" : "rgba(18, 20, 23, 0.2)";
  }};
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  transition: 150ms;
  cursor: pointer;

  &:hover {
    color: #121417;
  }
`;

const FormWrapper = styled.div`
  position: relative;
  display: flex;

  width: 474px;
  height: 48px;
`;

const InputText = styled.span`
  position: absolute;

  color: #121417;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  pointer-events: none;

  &:nth-last-of-type(1) {
    top: 14px;
    left: 24px;
  }
  &:nth-last-of-type(2) {
    top: 14px;
    left: 184px;
  }
`;

const InputElement = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 160px;
  height: 48px;

  border: none;
  outline: none;
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background: #f7f7fb;
  padding-left: 68px;

  color: #121417;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  &:nth-last-of-type(1) {
    border-radius: 0px 14px 14px 0px;
    border-right: none;
    margin-right: 1px;
    padding-left: 48px;
  }
`;

const FormSubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 136px;
  height: 48px;
  margin-left: 18px;
  border-radius: 12px;
  background: #3470ff;
  border: none;
  outline: none;

  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;

  cursor: pointer;
`;

export {
  FormContainer,
  FormElementContainer,
  SelectBtnTitle,
  SelectBtn,
  SelectBtnText,
  SelectBtnIcon,
  SelectContent,
  SelectOptions,
  SelectOptionsItem,
  FormWrapper,
  InputText,
  InputElement,
  FormSubmitBtn,
};
