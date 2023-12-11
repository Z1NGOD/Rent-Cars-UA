import styled from "@emotion/styled";

const FormContainer = styled.div`
  display: flex;
  align-items: flex-end;

  margin: 0 auto;
  width: 859px;
  height: 74px;
`;

const SelectCarBrandContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 224px;
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
  gap: 32px;

  width: 224px;
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

  width: 100%;
`;

const SelectOptions = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  width: 100%;
  height: 272px;
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

export {
  FormContainer,
  SelectCarBrandContainer,
  SelectBtnTitle,
  SelectBtn,
  SelectBtnText,
  SelectBtnIcon,
  SelectContent,
  SelectOptions,
  SelectOptionsItem,
};
