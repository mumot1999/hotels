import { render } from '@testing-library/react';

import Star from './star';

describe('Star', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Star mode="off" />);
    expect(baseElement).toBeTruthy();
  });
});
