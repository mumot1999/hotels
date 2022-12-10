import { HotelRoom as HotelRoomEntity } from '@hotels/data-access-hotels';
import styled from 'styled-components';
import { Text } from '@hotels/ui';

export type HotelRoomProps = {
  room: HotelRoomEntity;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  border-top: solid;
  padding: 1em;
`;

const RoomMeta = styled.div`
  display: flex;
  flex-direction: column;
`;

const RoomName = styled.span`
  font-weight: bold;
  margin-bottom: 0.5em;
  white-space: nowrap;
`;

const RoomInfo = styled.div`
  display: flex;
  gap: 5px;
`;

const RoomDescription = styled.div``;

export const HotelRoom = ({ room }: HotelRoomProps) => {
  return (
    <Container>
      <RoomName>{room.name}</RoomName>
      <div style={{ display: 'flex', gap: "1.5em" }}>
        <RoomMeta>
          <RoomInfo>
            <Text value="Adults:" />
            {room.occupancy.maxAdults}
          </RoomInfo>
          <RoomInfo>
            <Text value="Children:" />
            {room.occupancy.maxChildren}
          </RoomInfo>
        </RoomMeta>
        <RoomDescription>{room.longDescription}</RoomDescription>
      </div>
    </Container>
  );
};
