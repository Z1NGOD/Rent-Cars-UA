import {
  MainBackground,
  MainWrapper,
  MainTitle,
  MainText,
  InfoList,
  InfoItem,
  InfoTitle,
  InfoText,
  InfoSublist,
  InfoSubItem,
  InfoSubItemTitle,
  InfoSubItemText,
} from "./Home.styled";

const Home = () => {
  return (
    <MainWrapper>
      <MainBackground />
      <MainTitle>
        Welcome to <b>Rent Cars UA</b>
      </MainTitle>
      <MainText>Discover the Freedom of Exploring Ukraine with Our Car Rental Services!</MainText>

      <InfoList>
        <InfoItem>
          <InfoTitle>Explore Ukraine with Ease</InfoTitle>
          <InfoText>
            {
              "At RCua, we understand that every journey is an adventure waiting to unfold. Whether you're here for business or pleasure, our reliable and diverse fleet of vehicles is at your service. Navigate the scenic roads of Ukraine with comfort and style."
            }
          </InfoText>
        </InfoItem>
        <InfoItem>
          <InfoTitle>Our Fleet</InfoTitle>
          <InfoText>
            {
              "Choose from a wide range of vehicles to suit your travel needs. From compact cars for city exploration to spacious SUVs for family trips, we have the perfect ride for every occasion. All our vehicles are meticulously maintained to ensure a smooth and safe journey."
            }
          </InfoText>
        </InfoItem>
        <InfoItem>
          <InfoTitle>Seamless Rental Experience</InfoTitle>
          <InfoText>
            {
              "We believe in making your car rental experience as seamless as possible. Our user-friendly online booking platform allows you to reserve your preferred vehicle with just a few clicks. Enjoy transparent pricing, flexible rental periods, and convenient pickup/drop-off locations across Ukraine."
            }
          </InfoText>
        </InfoItem>

        <InfoItem>
          <InfoTitle>Why Choose Us?</InfoTitle>
          <InfoSublist>
            <InfoSubItem>
              <InfoSubItemTitle>Quality Vehicles:</InfoSubItemTitle>
              <InfoSubItemText>
                Our fleet consists of well-maintained, modern vehicles from reputable brands.
              </InfoSubItemText>
            </InfoSubItem>
            <InfoSubItem>
              <InfoSubItemTitle>Affordable Rates:</InfoSubItemTitle>
              <InfoSubItemText>Enjoy competitive and transparent pricing with no hidden fees.</InfoSubItemText>
            </InfoSubItem>
            <InfoSubItem>
              <InfoSubItemTitle>Convenience:</InfoSubItemTitle>
              <InfoSubItemText>Pick up and drop off your vehicle at locations convenient for you.</InfoSubItemText>
            </InfoSubItem>
            <InfoSubItem>
              <InfoSubItemTitle>Customer Service:</InfoSubItemTitle>
              <InfoSubItemText>Our dedicated customer support team is ready to assist you at every step.</InfoSubItemText>
            </InfoSubItem>
          </InfoSublist>
        </InfoItem>
        <InfoItem>
          <InfoTitle>Explore Beyond Boundaries</InfoTitle>

          <InfoText>
            {
              "Embark on an unforgettable journey with RCua. Whether you're heading to bustling city centers, serene countryside, or historic landmarks, our cars will take you there with comfort and reliability."
            }
          </InfoText>
        </InfoItem>
      </InfoList>
    </MainWrapper>
  );
};

export default Home;
