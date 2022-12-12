import { Hotel } from '@hotels/data-access-hotels';
import { Stars } from '@hotels/ui';
import { useState } from 'react';
import styled from 'styled-components';
import { HotelRoom } from './hotel-room';
import Modal from 'react-modal';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Clickable } from 'libs/ui/src/lib/primitives/clickable/cliclable';

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
  const [photos, setPhotos] = useState<string[]>([]);

  return (
    <StyledFeatureHotelsList>
      {props.hotels.map((hotel) => {
        return (
          <>
            <Modal
              isOpen={photos.length > 0}
              onRequestClose={() => setPhotos([])}
            >
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <AiFillCloseCircle
                  onClick={() => setPhotos([])}
                  size="40"
                  style={{ marginLeft: 'auto', cursor: 'pointer' }}
                />
                <div style={{ display: 'flex', alignSelf: 'center' }}>
                  <ImageGallery
                    items={photos.map((photo) => ({
                      original: photo,
                      thumbnail: photo,
                    }))}
                  />
                </div>
              </div>
            </Modal>
            <HotelContainer>
              <HotelHead>
                <Clickable
                  onClick={() =>
                    setPhotos(hotel.images.map((photo) => photo.url))
                  }
                >
                  <HotelImage src={hotel.images[0].url} />
                </Clickable>
                <HotelMeta>
                  <HotelName>{hotel.name}</HotelName>
                  <HotelAddress>{hotel.address1}</HotelAddress>
                  <HotelAddress>{hotel.address2}</HotelAddress>
                </HotelMeta>
                <Stars stars={Number(hotel.starRating)} />
              </HotelHead>
              {hotel.rooms.map((room) => (
                <HotelRoom room={room} key={room.id} />
              ))}
            </HotelContainer>
          </>
        );
      })}
    </StyledFeatureHotelsList>
  );
}
