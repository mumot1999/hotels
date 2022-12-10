import { useHotelsQuery } from '@hotels/data-access-hotels';
import styled from 'styled-components';
import { FeatureHotelsList } from '@hotels/feature-hotels-list';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  useHotelsQuery();
  return (
    <StyledApp>
      <FeatureHotelsList />
    </StyledApp>
  );
}

export default App;
