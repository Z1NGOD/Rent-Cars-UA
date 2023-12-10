import styled from "@emotion/styled";
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