import { Hotel, useHotelsQuery } from '@hotels/data-access-hotels';
import { useMemo } from 'react';
import styled from 'styled-components';
import { it } from 'vitest';
import { HotelsFilter, useHotelsFilter } from './components/hotels-filter';
import { HotelsList } from './components/hotels-list';
/* eslint-disable-next-line */

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export function FeatureHotelsList() {
  const hotels = useHotelsQuery();
  const filter = useHotelsFilter();

  const filteredHotels = useMemo(() => {
    function* filterHotels() {
      for (const hotel of hotels.data ?? []) {
        let flag = true;
        if (filter.stars.stars) {
          if (filter.stars.stars > Number(hotel.starRating)) {
            flag = false;
          }
        }

        if (flag) {
          const rooms = Array.from(filterRooms(hotel));
          if (rooms.length) yield { ...hotel, rooms };
        }
      }
    }

    function* filterRooms(hotel: Hotel) {
      for (const room of hotel.rooms) {
        let flag = true;
        if (filter.children.value) {
          if (filter.children.value > Number(room.occupancy.maxChildren)) {
            flag = false;
          }
        }

        if (filter.adults.value) {
          if (filter.adults.value > Number(room.occupancy.maxAdults)) {
            flag = false;
          }
        }

        if (flag) {
          yield room;
        }
      }
    }

    return Array.from(filterHotels());
  }, [filter]);

  return (
    <Container>
      <HotelsFilter {...filter} />
      <HotelsList hotels={filteredHotels} />
    </Container>
  );
}

export default FeatureHotelsList;
