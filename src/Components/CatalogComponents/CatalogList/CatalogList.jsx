import icons from "../../../images/icons.svg";
import { useEffect, useState } from "react";
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
} from "../../UI/ComponentList.styled.js";
import { Button } from "../../UI/Button.styed";
import { fetchCatalog } from "../../../Redux/catalogSlice";
import { addFavorite, removeFavorite } from "../../../Redux/favoritesSlice";
import Loader from "../../UI/Loader";
import handleIsFavorite from "../../../Helpers/handleIsFavorite";
import Modal from "../../UI/Modal/Modal.jsx";
import LearnMoreContent from "./LearnMoreContent/LearnMoreContent.jsx";

const CatalogList = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [limit, setLimit] = useState(12);
  const catalog = useSelector((state) => state.catalog.catalog);
  const loading = useSelector((state) => state.catalog.loading);
  const error = useSelector((state) => state.catalog.error);
  const favorites = useSelector((state) => state.favorites.favorites);
  const filteredCatalog = useSelector((state) => state.catalog.filteredCatalog);
  const dispatch = useDispatch();
  const page = 1;
  const searchParams = `page=${page}&limit=${limit}`;
  useEffect(() => {
    dispatch(fetchCatalog(searchParams));
  }, [dispatch, searchParams, limit]);

  const handleFavoriteClick = (item) => {
    const isFavorite = handleIsFavorite(favorites, item);
    isFavorite ? dispatch(removeFavorite(item)) : dispatch(addFavorite(item));
  };

  return (
    <List>
      {error && <div>{error}</div>}
      {loading ? (
        <Loader />
      ) : (
        (filteredCatalog.length > 0 ? filteredCatalog : catalog).map((item) => (
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
      {catalog.length > 25 ? null : (
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

export default CatalogList;
