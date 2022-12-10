import '@testing-library/jest-dom';
import { render, RenderResult } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CountSelector from './count-selector';

vi.mock('../../primitives', async () => {
  return {
    Plus: vi.fn(() => <div data-testid="plus" />),
    Minus: vi.fn(() => <div data-testid="minus" />),
    Text: vi.fn((args: any) => <div data-testid="text" {...args} />),
  };
});

describe('CountSelector', () => {
  let renderResult: RenderResult;
  let onValueChange = vi.fn();

  beforeEach(() => {
    onValueChange = vi.fn();
    renderResult = render(
      <CountSelector onValueChange={onValueChange} label="Adults" value={2} />
    );
  });

  it('should render successfully', () => {
    expect(renderResult.baseElement).toBeTruthy();
  });

  it('should render plus button', () => {
    expect(renderResult.getByTestId('plus')).toBeTruthy();
  });

  it('should render minus button', () => {
    expect(renderResult.getByTestId('minus')).toBeTruthy();
  });

  it('should render label', () => {
    expect(renderResult.getByTestId('text')).toHaveAttribute('value', 'Adults');
  });

  it('should render value', () => {
    expect(renderResult.getByText('2')).toBeTruthy();
  });

  describe('click minus button', () => {
    beforeEach(async () => {
      await userEvent.click(renderResult.getByTestId('minus'));
    });

    it('should call onValueChange with -1', () => {
      expect(onValueChange).toHaveBeenCalledWith(-1);
    });
  });

  describe('click plus button', () => {
    beforeEach(async () => {
      await userEvent.click(renderResult.getByTestId('plus'));
    });

    it('should call onValueChange with 1', () => {
      expect(onValueChange).toHaveBeenCalledWith(1);
    });
  });
});
