import { Hotel } from '@hotels/data-access-hotels';
import { Stars } from '@hotels/ui';
import styled from 'styled-components';
import { HotelRoom } from './hotel-room';

const StyledFeatureHotelsList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4em;
  gap: 2em;
@media (min-width: 1400px) {
  width: 60%;
}
align-self: center;
width: 80%;
`;

const HotelContainer = styled.div`
  border: solid;
  overflow: hidden;
`;

const HotelHead = styled.div`
  display: flex;
  gap: 2em;
  padding: 1em;
`;

const HotelImage = styled.img`
  max-width: 300px;
  max-height: 200px;
`;

const HotelMeta = styled.div`
  width: 100%;
  gap: 0.5em;
  display: flex;
  flex-direction: column;
`;

const HotelName = styled.div`
  font-size: large;
  font-weight: bold;
`;
const HotelAddress = styled.div``;

export type HotelsListProps = {
  hotels: Hotel[];
};
export function HotelsList(props: HotelsListProps) {
  return (
    <StyledFeatureHotelsList>
      {props.hotels.map((hotel) => {
        return (
          <HotelContainer>
            <HotelHead>
              <HotelImage src={hotel.images[0].url} />
              <HotelMeta>
                <HotelName>{hotel.name}</HotelName>
                <HotelAddress>{hotel.address1}</HotelAddress>
                <HotelAddress>{hotel.address2}</HotelAddress>
              </HotelMeta>
              <Stars stars={Number(hotel.starRating)} onClick={() => {}} />
            </HotelHead>
            {hotel.rooms.map((room) => (
              <HotelRoom room={room} key={room.id} />
            ))}
          </HotelContainer>
        );
      })}
    </StyledFeatureHotelsList>
  );
}
