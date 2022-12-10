import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import { useCountSelector, UseCountSelector } from './use-count-selector';

describe('useCountSelector', () => {
  let result: { current: UseCountSelector };

  beforeEach(() => {
    result = renderHook(() => useCountSelector()).result;
  });

  it('should render successfully', () => {
    expect(result.current.value).toBe(0);
  });

  describe('decrease value', () => {
    beforeEach(() => {
      act(() => result.current.onValueChange(-1));
    });

    it('should not decrease value', () => {
      expect(result.current.value).toBe(0);
    });

    describe('increase value', () => {
      beforeEach(() => {
        act(() => result.current.onValueChange(1));
      });

      it('should increase value to 1', () => {
        expect(result.current.value).toBe(1);
      });
    });
  });
});
