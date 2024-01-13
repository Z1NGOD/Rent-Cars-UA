import { nanoid } from "nanoid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import handleIsFavorite from "../../../Helpers/handleIsFavorite.js";
import { addFavorite, removeFavorite } from "../../../Redux/favoritesSlice.js";
import icons from "../../../images/icons.svg";
import { Button } from "../../UI/Button.styed.js";
import {
  FavoriteBtn,
  FavoriteIcon,
  Image,
  List,
  ListItem,
  Tag,
  TagsList,
  Title,
  TitleContainer,
  TitleSpan,
} from "../../UI/ComponentList.styled.js";
import Loader from "../../UI/Loader.jsx";
import Modal from "../../UI/Modal/Modal.jsx";
import LearnMoreContent from "./LearnMoreContent/LearnMoreContent.jsx";
import { useGetCarsQuery } from "../../../Redux/API/RTK.js";
import { useSearchParams } from "react-router-dom";

const CList = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const favorites = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const searchParamsObject = Object.fromEntries(searchParams.entries());

  const [limit, setLimit] = useState(12);
  const { data, error, isLoading } = useGetCarsQuery({
    params: {
      ...searchParamsObject,
      limit,
    },
  });

  const handleFavoriteClick = (item) => {
    const isFavorite = handleIsFavorite(favorites, item);
    isFavorite ? dispatch(removeFavorite(item)) : dispatch(addFavorite(item));
  };

  const tagsList = ({
    address,
    rentalCompany,
    accessories,
    type,
    model,
    id,
    functionalities,
  }) => {
    return [
      address.split(",").splice(1, 2).join(" | "),
      rentalCompany,
      accessories[2],
      type,
      model,
      id,
      functionalities[0],
    ]
      .filter((tag) => !!tag)
      .join(" | ");
  };

  return (
    <List>
      {error && <div>{error}</div>}
      {isLoading ? (
        <Loader />
      ) : (
        data.cars.map((item) => (
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
              <Tag>{tagsList(item)}</Tag>
            </TagsList>
            <Button
              type="button"
              onClick={() => {
                setModalData(item);
                setShowModal(!showModal);
              }}
            >
              Learn more
            </Button>
          </ListItem>
        ))
      )}
      {data?.totalCount > limit && (
        <Button
          type="button"
          onClick={() => setLimit((prevLimit) => prevLimit + 12)}
        >
          Load more
        </Button>
      )}

      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
          }}
          showModal={showModal}
        >
          <LearnMoreContent
            data={modalData}
            onCrossClick={() => {
              setShowModal(false);
            }}
          />
        </Modal>
      )}
    </List>
  );
};

export default CList;
