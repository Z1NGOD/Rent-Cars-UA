import { nanoid } from "nanoid";
import icons from "../../../../images/icons.svg";
import {
  CarAccessories,
  CarAccessoriesTitle,
  CarCondition,
  CarConditionText,
  CarConditionTextSpan,
  CarConditionsTitle,
  CarConditionsWrapper,
  CarDesc,
  CarImageWrapper,
  CarTitle,
  ContactBtn,
  ExitBtn,
  LearnMoreWrapper,
} from "./LearnMoreContent.styled";

const LearnMoreContent = (data) => {
  const item = data.data;

  // нам приходять дані розділені спецсимволом \n тому ми видаляємо його
  const fixedItemConditions = item.rentalConditions.split("\n");

  // тут ми приймаємо condition та перевіряємо наявність у нього числового значення, 
  // якщо воно є то виділяємо його кольором
  const conditionElementSpanDecorator = (condition) => {
    if (Number(condition)) {
      return (
        <CarConditionTextSpan key={nanoid()} style={{ color: "#3470FF" }}>
          {condition}
        </CarConditionTextSpan>
      );
    }

    return <CarConditionText key={nanoid()}>{condition}</CarConditionText>;
  };

  // тут ми беремо масив conditions та на кожен кондишн створюємо елемент який проганяємо через декоратор
  // числового значення нашого кондишина
  const carConditions = fixedItemConditions.map((condition) => (
    <CarCondition key={nanoid()}>
      {condition.split(" ").map(conditionElementSpanDecorator)}
    </CarCondition>
  ));

  return (
    <LearnMoreWrapper>
      <ExitBtn onClick={data.onCrossClick}>
        <use href={icons + "#cross"} />
      </ExitBtn>

      <CarImageWrapper imgLink={item.img} />

      <CarTitle>
        {item.make} <span style={{ color: "#3470FF" }}>{item.model}</span>{" "}
        {item.year}
      </CarTitle>

      <CarAccessories>
        {item.address.split(",").splice(1, 2).join(" | ")} | id: {item.id} |
        Year: {item.year} | Type: {item.type} | Fuel Consumption:{" "}
        {item.fuelConsumption} | Engine Size: {item.engineSize}
      </CarAccessories>

      <CarDesc>{item.description}</CarDesc>

      <CarAccessoriesTitle>
        Accessories and functionalities:
      </CarAccessoriesTitle>

      <CarAccessories>
        {item.accessories.concat(item.functionalities).join(" | ")}
      </CarAccessories>

      <CarConditionsTitle>Rental Conditions:</CarConditionsTitle>

      <CarConditionsWrapper>
        {carConditions}
        <CarCondition>
          Mileage: <CarConditionTextSpan>{item.mileage}</CarConditionTextSpan>
        </CarCondition>
        <CarCondition>
          Price: <CarConditionTextSpan>{item.rentalPrice}</CarConditionTextSpan>
        </CarCondition>
      </CarConditionsWrapper>

      <ContactBtn href="tel: +380730000000">Rental car</ContactBtn>
    </LearnMoreWrapper>
  );
};

export default LearnMoreContent;
