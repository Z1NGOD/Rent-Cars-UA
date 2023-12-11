// import { Form, Label, LeftInput, RightInput, SelectContainer, Select, Option } from "../Catalog.styled";
// import { Button } from "../../UI/Button.styed";
import {
  FormContainer,
  SelectCarBrandContainer,
  SelectBtnTitle,
  SelectBtn,
  SelectBtnText,
  SelectBtnIcon,
  SelectContent,
  SelectOptions,
  SelectOptionsItem,
} from "./Filters.styled";

import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFiltersFetch } from "../../../Redux/filtersSlice";
import { nanoid } from "nanoid";
import icons from "../../../images/icons.svg";

const CatalogFilters = () => {
  const [brandValue, setBrandValue] = useState(null);
  const [isBrandDropDownOpen, setIsBrandDropDownOpen] = useState(false);

  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters.filters);
  const isLoading = useSelector((state) => state.filters.loading);

  useEffect(() => {
    dispatch(getFiltersFetch());

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !selectButton.contains(event.target)) {
        setIsBrandDropDownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dispatch]);

  const dropdownRef = useRef(null);
  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <FormContainer>
          <SelectCarBrandContainer>
            <SelectBtnTitle>Car brand</SelectBtnTitle>
            <SelectBtn
              id="selectButton"
              onClick={() => {
                setIsBrandDropDownOpen(!isBrandDropDownOpen);
              }}
            >
              <SelectBtnText>{brandValue ? brandValue : "Enter the text"}</SelectBtnText>
              <SelectBtnIcon width={20} height={20} isBrandDropDownOpen={isBrandDropDownOpen}>
                <use href={icons + "#arrowDown"} />
              </SelectBtnIcon>
            </SelectBtn>

            <SelectContent ref={dropdownRef}>
              <SelectOptions isBrandDropDownOpen={isBrandDropDownOpen}>
                {filters.map((filter) => (
                  <SelectOptionsItem
                    key={nanoid()}
                    onClick={() => {
                      setBrandValue(filter);
                    }}
                    itemValue={filter}
                    isItemActive={brandValue}
                  >
                    {filter}
                  </SelectOptionsItem>
                ))}
              </SelectOptions>
            </SelectContent>
          </SelectCarBrandContainer>
        </FormContainer>
      )}
    </>
  );
};

export default CatalogFilters;

// <Form>
//   <Label>
//     Car brand
//     <SelectContainer>
//       <Select>
//         {filters.map((filter) => (
//           <Option key={nanoid()}>{filter}</Option>
//         ))}
//       </Select>
//     </SelectContainer>
//   </Label>
//   <Label>
//     Price/1h
//     <Select>
//       <Option>To 10$</Option>
//       <Option>To 20$</Option>
//       <Option>To 30$</Option>
//       <Option>To 40$</Option>
//       <Option>To 50$</Option>
//     </Select>
//   </Label>
//   <div style={{ display: "flex", alignItems: "flex-end" }}>
//     <Label>
//       Сar mileage / km
//       <LeftInput type="text" borderSide={true} placeholder="From" />
//     </Label>
//     <RightInput borderSide={false} placeholder="To" />
//   </div>

//   <Button style={{ padding: "16px 44px" }}>Search</Button>
// </Form>
