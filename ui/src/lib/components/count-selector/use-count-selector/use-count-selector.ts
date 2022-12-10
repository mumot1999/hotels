import { useState, useCallback } from 'react';
import { CountSelectorProps } from '../count-selector';

export interface UseCountSelector
  extends Pick<CountSelectorProps, 'value' | 'onValueChange'> {
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

export function useCountSelector(): UseCountSelector {
  const [value, setValue_] = useState(0);
  
  const setValue = useCallback<React.Dispatch<React.SetStateAction<number>>>(
    (setStateAction) => {
      setValue_((current) => {
        const getNewValue = (newValue: number) => {
          if (newValue < 0) {
            return 0;
          }
          return newValue;
        };

        if (typeof setStateAction === 'function') {
          const newValue = setStateAction(current);
          return getNewValue(newValue);
        } else {
          return getNewValue(setStateAction);
        }
      });
    },
    []
  );

  const onValueChange = useCallback<CountSelectorProps['onValueChange']>(
    (number) => {
      setValue((prevState) => {
        return prevState + number;
      });
    },
    []
  );

  return { value, onValueChange, setValue };
}

export default useCountSelector;
