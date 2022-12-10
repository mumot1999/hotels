import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useStars, { UseStars } from './use-stars';

describe('useStars', () => {
  let result: { current: UseStars };

  beforeEach(() => {
    result = renderHook(() => useStars()).result;
  });

  it('should render successfully', () => {
    expect(result.current.stars).toBe(0);
  });

  describe('first click on first star', () => {
    beforeEach(() => {
      act(() => {
        result.current.onClick(0);
      });
    });

    it('should light up first star', () => {
      expect(result.current.stars).toBe(1);
    });

    describe('second click on first star', () => {
      beforeEach(() => {
        act(() => {
          result.current.onClick(0);
        });
      });

      it('should light down first star', () => {
        expect(result.current.stars).toBe(0);
      });
    });
  });
});
