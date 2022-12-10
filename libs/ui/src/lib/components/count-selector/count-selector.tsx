import styled from 'styled-components';
import { Minus, Plus, Text } from '../../primitives';

/* eslint-disable-next-line */
export interface CountSelectorProps {
  onValueChange: (number: number) => void;
  label: string;
  value: number;
}

const StyledCountSelector = styled.div`
  display: flex;
  gap: 1em;
`;

export function CountSelector(props: CountSelectorProps) {
  return (
    <StyledCountSelector>
      <Text value={props.label} />
      <div onClick={() => props.onValueChange(1)}>
        <Plus />
      </div>
      {props.value}
      <div onClick={() => props.onValueChange(-1)}>
        <Minus />
      </div>
    </StyledCountSelector>
  );
}

export default CountSelector;
