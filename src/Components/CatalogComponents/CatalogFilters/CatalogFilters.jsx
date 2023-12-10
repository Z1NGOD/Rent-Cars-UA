import {
  Form,
  Label,
  LeftInput,
  RightInput,
  SelectContainer,
  Select,
  Option,
} from "../Catalog.styled";
import { Button } from "../../UI/Button.styed";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getFiltersFetch } from "../../../Redux/filtersSlice";
import { nanoid } from "nanoid";
import Loader from "../../UI/Loader";

const CatalogFilters = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters.filters);
  const isLoading = useSelector((state) => state.filters.loading);
  useEffect(() => {
    dispatch(getFiltersFetch());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Form>
          <Label>
            Car brand
            <SelectContainer>
              <Select>
                {filters.map((filter) => (
                  <Option key={nanoid()}>{filter}</Option>
                ))}
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
      )}
    </>
  );
};

export default CatalogFilters;
