import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFiltersFetch } from "../../../Redux/filtersSlice";
import { nanoid } from "nanoid";
import icons from "../../../images/icons.svg";

import {
  FormContainer,
  FormElementContainer,
  SelectBtnTitle,
  SelectBtn,
  SelectBtnText,
  SelectBtnIcon,
  SelectContent,
  SelectOptions,
  SelectOptionsItem,
  FormWrapper,
  InputText,
  InputElement,
  FormSubmitBtn,
} from "./Filters.styled";

const prices = [30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160];

const CatalogFilters = () => {
  const [brandValue, setBrandValue] = useState(null);
  const [isBrandDropDownOpen, setIsBrandDropDownOpen] = useState(false);
  const [priceValue, setPriceValue] = useState(null);
  const [isPriceDropDownOpen, setIsPriceDropDownOpen] = useState(false);
  const [formFromText, setFormFromText] = useState("");
  const [formToText, setFormToText] = useState("");

  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters.filters);
  const isLoading = useSelector((state) => state.filters.loading);

  const dropdownRef = useRef(null);
  useEffect(() => {
    dispatch(getFiltersFetch());

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !selectButton.contains(event.target)) {
        setIsBrandDropDownOpen(false);
      }
    };

    const handleClickOutside2 = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !selectButton2.contains(event.target)) {
        setIsPriceDropDownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("click", handleClickOutside2);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("click", handleClickOutside2);
    };
  }, [dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;

    if (name === "formFromText") {
      setFormFromText(value);
    } else if (name === "formToText") {
      setFormToText(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formFromText.trim() === "" || formToText.trim() === "") {
      return;
    }

    setBrandValue(null);
    setPriceValue(null);
    setFormFromText("");
    setFormToText("");
  };

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <FormContainer>
          <FormElementContainer selectType={"brand"}>
            <SelectBtnTitle>Car brand</SelectBtnTitle>
            <SelectBtn
              id="selectButton"
              onClick={() => {
                setIsBrandDropDownOpen(!isBrandDropDownOpen);
              }}
              selectType={"brand"}
            >
              <SelectBtnText>{brandValue ? brandValue : "Enter the text"}</SelectBtnText>
              <SelectBtnIcon width={20} height={20} isBrandDropDownOpen={isBrandDropDownOpen}>
                <use href={icons + "#arrowDown"} />
              </SelectBtnIcon>
            </SelectBtn>

            <SelectContent ref={dropdownRef} selectType={"brand"}>
              <SelectOptions isBrandDropDownOpen={isBrandDropDownOpen} selectType={"brand"}>
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
          </FormElementContainer>

          <FormElementContainer selectType={"price"}>
            <SelectBtnTitle>Price/ 1 hour</SelectBtnTitle>
            <SelectBtn
              id="selectButton2"
              onClick={() => {
                setIsPriceDropDownOpen(!isPriceDropDownOpen);
              }}
              selectType={"price"}
            >
              <SelectBtnText>{`To ${priceValue ? priceValue : ""}$`}</SelectBtnText>
              <SelectBtnIcon width={20} height={20} isBrandDropDownOpen={isPriceDropDownOpen}>
                <use href={icons + "#arrowDown"} />
              </SelectBtnIcon>
            </SelectBtn>

            <SelectContent ref={dropdownRef} selectType={"price"}>
              <SelectOptions isBrandDropDownOpen={isPriceDropDownOpen} selectType={"price"}>
                {prices.map((price) => (
                  <SelectOptionsItem
                    key={nanoid()}
                    onClick={() => {
                      setPriceValue(price);
                    }}
                    itemValue={price}
                    isItemActive={priceValue}
                  >
                    {price}
                  </SelectOptionsItem>
                ))}
              </SelectOptions>
            </SelectContent>
          </FormElementContainer>

          <FormElementContainer selectType={"input"}>
            <SelectBtnTitle>Сar mileage / km</SelectBtnTitle>
            <FormWrapper onSubmit={handleSubmit}>
              <InputText>To</InputText>
              <InputText>From</InputText>
              <InputElement
                type="number"
                name="formFromText"
                value={formFromText}
                onChange={handleInputChange}
              ></InputElement>
              <InputElement type="number" name="formToText" value={formToText} onChange={handleInputChange}></InputElement>
              <FormSubmitBtn type="submit">Search</FormSubmitBtn>
            </FormWrapper>
          </FormElementContainer>
        </FormContainer>
      )}
    </>
  );
};

export default CatalogFilters;
