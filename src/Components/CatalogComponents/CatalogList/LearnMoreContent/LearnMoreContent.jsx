import { nanoid } from "nanoid";
import icons from "../../../../images/icons.svg";
import {
  LearnMoreWrapper,
  ExitBtn,
  CarImageWrapper,
  CarTitle,
  CarDesc,
  CarAccessoriesTitle,
  CarAccessories,
  CarConditionsTitle,
  CarConditionsWrapper,
  CarCondition,
  CarConditionText,
  CarConditionTextSpan,
  ContactBtn,
} from "./LearnMoreContent.styled";

const LearnMoreContent = (data) => {
  const item = data.data;

  return (
    <LearnMoreWrapper>
      <ExitBtn onClick={data.onCrossClick}>
        <use href={icons + "#cross"} />
      </ExitBtn>

      <CarImageWrapper imgLink={item.img} />

      <CarTitle>
        {item.make} <span style={{ color: "#3470FF" }}>{item.model}</span> {item.year}
      </CarTitle>

      <CarAccessories>
        {item.address.split(",").splice(1, 2).join(" | ")} | id: {item.id} | Year: {item.year} | Type: {item.type} | Fuel
        Consumption: {item.fuelConsumption} | Engine Size: {item.engineSize}
      </CarAccessories>

      <CarDesc>{item.description}</CarDesc>

      <CarAccessoriesTitle>Accessories and functionalities:</CarAccessoriesTitle>

      <CarAccessories>{item.accessories.concat(item.functionalities).join(" | ")}</CarAccessories>

      <CarConditionsTitle>Rental Conditions:</CarConditionsTitle>

      <CarConditionsWrapper>
        {item.rentalConditions.split("\n").map((condition) => (
          <CarCondition key={nanoid()}>
            {condition.split(" ").map((cond) => {
              if (Number(cond)) {
                return (
                  <CarConditionTextSpan key={nanoid()} style={{ color: "#3470FF" }}>
                    {cond}
                  </CarConditionTextSpan>
                );
              }
              return <CarConditionText key={nanoid()}>{cond}</CarConditionText>;
            })}
          </CarCondition>
        ))}
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
