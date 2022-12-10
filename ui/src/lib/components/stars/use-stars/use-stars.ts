import { useState, useCallback } from 'react';
import { StarsProps } from '../stars';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UseStars extends StarsProps {
  setStars: React.Dispatch<React.SetStateAction<number>>;
}

export function useStars(): UseStars {
  const [stars, setStars] = useState(0);
  const onClick = useCallback<StarsProps['onClick']>((starIndex) => {
    return setStars((current) => {
      const newValue = starIndex + 1;
      if (newValue === current) {
        return 0;
      } else {
        return newValue;
      }
    });
  }, []);

  return { onClick, stars, setStars };
}

export default useStars;
