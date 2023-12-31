import icons from "../../images/icons.svg";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import {
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
} from "../UI/ComponentList.styled.js";
import { Button } from "../UI/Button.styed";
import { addFavorite, removeFavorite } from "../../Redux/favoritesSlice";
import handleIsFavorite from "../../Helpers/handleIsFavorite";

const Favorite = () => {
  const favorites = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();

  const handleFavoriteClick = (item) => {
    const isFavorite = handleIsFavorite(favorites, item);
    isFavorite ? dispatch(removeFavorite(item)) : dispatch(addFavorite(item));
  };

  return (
    <List>
      {favorites.length !== 0 ? (
        favorites.map((item) => (
          <ListItem key={nanoid()} id={item.id}>
            <Image src={item.img} />
            <FavoriteBtn
              type="button"
              onClick={() => handleFavoriteClick(item)}
            >
              <FavoriteIcon
                isFavorite={handleIsFavorite(favorites, item)}
                width={18}
                height={18}
              >
                <use href={icons + "#heart"} />
              </FavoriteIcon>
            </FavoriteBtn>
            <TitleContainer>
              <Title>
                {item.make} <TitleSpan>{item.model}</TitleSpan>, {item.year}
              </Title>
              <Title>{item.rentalPrice}</Title>
            </TitleContainer>
            <TagsList>
              <Tag>
                {[
                  item.address.split(",").splice(1, 2).join(" | "),
                  item.rentalCompany,
                  item.accessories[2],
                  item.type,
                  item.model,
                  item.id,
                  item.functionalities[0],
                ]
                  .filter((tag) => !!tag)
                  .join(" | ")}
              </Tag>
            </TagsList>
            <Button>Learn more</Button>
          </ListItem>
        ))
      ) : (
        <div>No Favorites Found</div>
      )}
    </List>
  );
};

export default Favorite;
