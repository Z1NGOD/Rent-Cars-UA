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

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 29px;
  margin-top: 50px;
`;

const ListItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 274px;
  height: 426px;
  border-radius: 14px;
  align-self: stretch;
`;

const Image = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 268px;
  border-radius: 14px;
  margin-bottom: 14px;

  object-fit: cover;
`;

const FavoriteBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--clr-brand-blue-lt);
  border: none;
  outline: none;

  z-index: 2;

  &:hover svg {
    scale: 1.2;
  }
`;

const FavoriteIcon = styled.svg`
  display: flex;
  justify-content: center;
  align-items: center;
  stroke: ${(props) => {
    return props.isFavorite ? "#3470FF" : "#fff";
  }};
  fill: ${(props) => {
    return props.isFavorite ? "#3470FF" : "none";
  }};

  width: 18px;
  height: 18px;

  transition: 300ms;
`;

const Title = styled.h3`
  color: #121417;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitleSpan = styled.span`
  color: #3470ff;
`;

const TagsList = styled.ul`
  margin-bottom: 28px;
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
  SelectContainer,
  Select,
  Option,
  List,
  ListItem,
  Image,
  FavoriteBtn,
  FavoriteIcon,
  TitleContainer,
  Title,
  TitleSpan,
  TagsList,
  Tag,
};
