import icons from "../../images/icons.svg";
import {
  Form,
  Label,
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
} from "./Catalog.styled";
import { Button } from "../UI/Button.styed";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCatalogFetch } from "../../Redux/catalogSlice";
import { nanoid } from "nanoid";
import Loader from "../UI/Loader";

const Catalog = () => {
  const catalog = useSelector((state) => state.catalog.catalog);
  const isLoading = useSelector((state) => state.catalog.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatalogFetch());
  }, [dispatch]);

  return (
    <>
      <Form>
        <Label>
          Car brand
          <SelectContainer>
            <Select>
              <Option>Enter the text</Option>
            </Select>
          </SelectContainer>
        </Label>
        <Label>
          Price/1h
          <Select>
            <Option>To 10$</Option>
            <Option>To 20$</Option>
            <Option>To 30$</Option>
            <Option>To 40$</Option>
            <Option>To 50$</Option>
          </Select>
        </Label>
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <Label>
            Сar mileage / km
            <LeftInput type="text" borderSide={true} placeholder="From" />
          </Label>
          <RightInput borderSide={false} placeholder="To" />
        </div>

        <Button style={{ padding: "16px 44px" }}>Search</Button>
      </Form>

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

export default Catalog;
