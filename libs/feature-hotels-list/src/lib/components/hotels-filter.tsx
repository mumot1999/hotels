import {
  Stars,
  useStars,
  CountSelector,
  useCountSelector,
  UseStars,
  UseCountSelector,
} from '@hotels/ui';
import styled from 'styled-components';

export type UseHotelsFilter = {
  stars: UseStars;
  adults: UseCountSelector;
  children: UseCountSelector;
};

const Container = styled.div`
  border: solid;
  width: fit-content;
  overflow: hidden;
`;

const Filters = styled.div`
  display: flex;
  padding: 0.8em;
  justify-content: center;
  align-items: center;
  gap: 2em;
`;

export const useHotelsFilter = (): UseHotelsFilter => {
  const stars = useStars();
  const adults = useCountSelector();
  const children = useCountSelector();

  return { stars, adults, children };
};

export const HotelsFilter = ({ adults, children, stars }: UseHotelsFilter) => {
  return (
    <Container>
      <Filters>
        <div style={{ overflow: 'hidden' }}>
          <Stars {...stars} />
        </div>
        <CountSelector label="Adults" {...adults} />
        <CountSelector label="Children" {...children} />
      </Filters>
    </Container>
  );
};
