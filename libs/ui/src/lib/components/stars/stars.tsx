import styled from 'styled-components';
import Star from '../../primitives/star/star';

/* eslint-disable-next-line */
export interface StarsProps {
  stars?: number;
  onClick: (starIndex: number) => void;
}

const StyledStars = styled.div`
  display: flex;
  max-height: 40px;
  gap: 2px;
`;

const StarContainer = styled.div`
  display: flex;
  max-width: 40px;
`;

export function Stars(props: StarsProps) {
  return (
    <StyledStars>
      {Array.from({ length: 5 }).map((_, index) => (
        <StarContainer
          onClick={() => {
            props.onClick(index);
          }}
          key={index}
        >
          <Star
            mode={getMode({
              currentIndex: index,
              stars: props.stars ?? 0,
            })}
          />
        </StarContainer>
      ))}
    </StyledStars>
  );
}

function getMode(props: { currentIndex: number; stars: number }) {
  if (shouldBeLightUp(props)) {
    return 'on';
  }
  return 'off';
}

function shouldBeLightUp(props: { currentIndex: number; stars: number }) {
  return props.currentIndex < props.stars;
}

export default Stars;
