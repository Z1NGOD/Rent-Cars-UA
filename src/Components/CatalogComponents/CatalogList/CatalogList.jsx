import icons from "../../../images/icons.svg";
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
} from "../Catalog.styled";
import { Button } from "../../UI/Button.styed";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCatalogFetch } from "../../../Redux/catalogSlice";
import { nanoid } from "nanoid";
import Loader from "../../UI/Loader";

const CatalogList = () => {
  const catalog = useSelector((state) => state.catalog.catalog);
  const isLoading = useSelector((state) => state.catalog.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatalogFetch());
  }, [dispatch]);

  return (
    <>
      <List>
        {isLoading ? (
          <Loader />
        ) : (
          catalog.map(
            ({
              id,
              year,
              make,
              model,
              type,
              img,
              accessories,
              functionalities,
              rentalPrice,
              rentalCompany,
              address,
            }) => (
              <ListItem key={nanoid()} id={id}>
                <Image src={img} />
                <FavoriteBtn type="submit">
                  <FavoriteIcon width={18} height={18}>
                    <use href={icons + "#heart"} />
                  </FavoriteIcon>
                </FavoriteBtn>
                <TitleContainer>
                  <Title>
                    {make} <TitleSpan>{model}</TitleSpan>, {year}
                  </Title>
                  <Title>{rentalPrice}</Title>
                </TitleContainer>

                <TagsList>
                  <Tag>
                    {[
                      address.split(",").splice(1, 2).join(" | "),
                      rentalCompany,
                      accessories[2],
                      type,
                      model,
                      id,
                      functionalities[0],
                    ]
                      .filter((tag) => !!tag)
                      .join(" | ")}
                  </Tag>
                </TagsList>
                <Button>Learn more</Button>
              </ListItem>
            )
          )
        )}
      </List>
    </>
  );
};

export default CatalogList;
