/* eslint-disable no-console */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import PromoCard from './PromoCard';

test('displays a clickable button', () => {
  render(<PromoCard
    onButtonClick={() => console.log('clicked')}
    buttonText="Click Me"
    text="Some text"
    imgAltText="alt"
    imgSource="test"
    mainTitle="Title"
  />);
  expect(screen.getByRole('button')).toHaveTextContent('Click Me');
});

test('button is usable via keyboard', async () => {
  const handleClick = jest.fn();
  render(<PromoCard
    onButtonClick={handleClick}
    buttonText="Click Me"
    text="Some text"
    imgAltText="alt"
    imgSource="test"
    mainTitle="Title"
  />);
  const button = screen.getByRole('button');
  button.focus();
  userEvent.keyboard('{enter}');
  await waitFor(() => expect(handleClick).toHaveBeenCalledTimes(1));
});
