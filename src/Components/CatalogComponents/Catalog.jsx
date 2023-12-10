import {
  Form,
  Label,
  LeftInput,
  RightInput,
  Select,
  Option,
  List,
  ListItem,
  Image,
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
          <Select>
            <Option>Enter the text</Option>
          </Select>
        </Label>
        <Label>
          <Select>
            <Option>To $</Option>
          </Select>
        </Label>
        <Label>
          <LeftInput type="text" borderSide={true} placeholder="From" />
          <RightInput borderSide={false} placeholder="To" />
        </Label>
        <Button />
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
              description,
              fuelConsumption,
              engineSize,
              accessories,
              functionalities,
              rentalPrice,
              rentalCompany,
              address,
              rentalConditions,
              mileage,
            }) => (
              <ListItem key={nanoid()} id={id}>
                <Image src={img} />
                <TitleContainer>
                  <Title>
                    {make} <TitleSpan>{model}</TitleSpan>, {year}
                  </Title>
                  <Title>{rentalPrice}</Title>
                </TitleContainer>

                <TagsList>
                  {accessories.map((accessory) => (
                    <Tag key={nanoid()}>{accessory}</Tag>
                  ))}
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
