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
  Title,
  TitleSpan,
  Tag,
} from "./Catalog.styled";
import { Button } from "../UI/Button.styed";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCatalogFetch } from "../../Redux/catalogSlice";
import { nanoid } from "nanoid";
const Catalog = () => {
  const catalog = useSelector((state) => state.catalog.catalog);
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
        {catalog.map(({  model, type, img, accessories }) => (
          <ListItem key={nanoid()}>
            <Image href={img} />
            <Title>
              {model}
              <TitleSpan>{type}</TitleSpan>
              {accessories.map((accessory) => (
                <Tag key={nanoid()}>{accessory}</Tag>
              ))}
            </Title>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Catalog;
