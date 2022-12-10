import '@testing-library/jest-dom';
import { render, RenderResult } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Stars from './stars';

vi.mock('../star/star', async () => {
  return {
    default: (args: any) => {
      return <div data-testid="star" {...args} />;
    },
  };
});

describe('Stars', () => {
  let renderResult: RenderResult;
  let onClick = vi.fn();

  beforeEach(() => {
    onClick = vi.fn();
    renderResult = render(<Stars onClick={onClick} />);
  });

  const getStars = () => {
    return renderResult.getAllByTestId('star');
  };

  it('should render successfully', () => {
    expect(renderResult).toBeTruthy();
  });

  it('should render five stars', async () => {
    expect(getStars().length).toBe(5);
  });

  it('should call onClick(2) when click on 3rd star', async () => {
    await userEvent.click(getStars()[2]);
    expect(onClick).toHaveBeenCalledWith(2);
  });

  describe('stars=3', () => {
    beforeEach(async () => {
      renderResult.rerender(<Stars stars={3} onClick={onClick} />);
    });

    it('1st star should be light up', () => {
      expect(getStars()[0]).toHaveAttribute('mode', 'on');
    });

    it('3rd star should be light up', () => {
      expect(getStars()[2]).toHaveAttribute('mode', 'on');
    });

    it('4th star should be light down', () => {
      expect(getStars()[3]).toHaveAttribute('mode', 'off');
    });

    it('last star should be light down', () => {
      expect(getStars()[4]).toHaveAttribute('mode', 'off');
    });
  });
});
