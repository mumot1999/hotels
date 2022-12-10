import { render } from '@testing-library/react';

import FeatureHotelsList from './feature-hotels-list';

describe('FeatureHotelsList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureHotelsList />);
    expect(baseElement).toBeTruthy();
  });
});
