import { nanoid } from "nanoid";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredCatalog } from "../../../Redux/catalogSlice";
import { fetchFilters, setSearchFilters } from "../../../Redux/filtersSlice";
import icons from "../../../images/icons.svg";
import {
  FormContainer,
  FormElementContainer,
  FormSubmitBtn,
  FormWrapper,
  InputElement,
  InputText,
  SelectBtn,
  SelectBtnIcon,
  SelectBtnText,
  SelectBtnTitle,
  SelectContent,
  SelectOptions,
  SelectOptionsItem,
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
  const { filters, loading: isLoading } = useSelector((state) => state.filters);
  const { catalog } = useSelector((state) => state.catalog);
  const dropdownRef = useRef(null);
  useEffect(() => {
    dispatch(fetchFilters());

    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !selectButton.contains(event.target)
      ) {
        setIsBrandDropDownOpen(false);
      }
    };

    const handleClickOutside2 = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !selectButton2.contains(event.target)
      ) {
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
  const filterCatalog = (filters, items) => {
    return items.filter((item) => {
      return Object.entries(filters).every(([key, value]) => {
        if (key === "make") {
          return value ? item[key] === value : true;
        } else if (key === "rentalPrice") {
          const price = parseFloat(item[key].replace(/\D/g, ""));
          return value ? price === parseFloat(value) : true;
        } else if (key === "mileage") {
          const { from, to } = value;
          const mileage = parseInt(item[key]);

          if (from && to) {
            return mileage >= parseInt(from) && mileage <= parseInt(to);
          } else if (from) {
            return mileage >= parseInt(from);
          } else if (to) {
            return mileage <= parseInt(to);
          }
          return true;
        }
        return true;
      });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filters = {
      make: brandValue,
      rentalPrice: priceValue,
      mileage: {
        from: formFromText,
        to: formToText,
      },
    };
    dispatch(setSearchFilters(filters));

    const filteredItems = filterCatalog(filters, catalog);
    dispatch(setFilteredCatalog(filteredItems));

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
        <FormContainer onSubmit={handleSubmit}>
          <FormElementContainer selectType={"brand"}>
            <SelectBtnTitle>Car brand</SelectBtnTitle>
            <SelectBtn
              id="selectButton"
              onClick={() => {
                setIsBrandDropDownOpen(!isBrandDropDownOpen);
              }}
              selectType={"brand"}
            >
              <SelectBtnText>
                {brandValue ? brandValue : "Enter the text"}
              </SelectBtnText>
              <SelectBtnIcon
                width={20}
                height={20}
                isBrandDropDownOpen={isBrandDropDownOpen}
              >
                <use href={icons + "#arrowDown"} />
              </SelectBtnIcon>
            </SelectBtn>

            <SelectContent ref={dropdownRef} selectType={"brand"}>
              <SelectOptions
                isBrandDropDownOpen={isBrandDropDownOpen}
                selectType={"brand"}
              >
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
              <SelectBtnText>{`To ${
                priceValue ? priceValue : ""
              }$`}</SelectBtnText>
              <SelectBtnIcon
                width={20}
                height={20}
                isBrandDropDownOpen={isPriceDropDownOpen}
              >
                <use href={icons + "#arrowDown"} />
              </SelectBtnIcon>
            </SelectBtn>

            <SelectContent ref={dropdownRef} selectType={"price"}>
              <SelectOptions
                isBrandDropDownOpen={isPriceDropDownOpen}
                selectType={"price"}
              >
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
            <FormWrapper>
              <InputText>To</InputText>
              <InputText>From</InputText>
              <InputElement
                type="number"
                name="formFromText"
                value={formFromText}
                onChange={handleInputChange}
              ></InputElement>
              <InputElement
                type="number"
                name="formToText"
                value={formToText}
                onChange={handleInputChange}
              ></InputElement>
              <FormSubmitBtn type="submit">Search</FormSubmitBtn>
            </FormWrapper>
          </FormElementContainer>
        </FormContainer>
      )}
    </>
  );
};

export default CatalogFilters;
