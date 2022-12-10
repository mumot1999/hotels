import { useHotelsQuery } from '@hotels/data-access-hotels';
import styled from 'styled-components';
import NxWelcome from './nx-welcome';


const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  useHotelsQuery()
  return (
    <StyledApp>
      <NxWelcome title="hotels" />
    </StyledApp>
  );
}

export default App;
