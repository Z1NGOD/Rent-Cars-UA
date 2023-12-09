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
const Catalog = () => {
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
        <ListItem>
          <Image />
          <Title>
            jopa
            <TitleSpan>moja</TitleSpan>
            <Tag>TAg</Tag>
          </Title>
        </ListItem>
      </List>
    </>
  );
};

export default Catalog;
