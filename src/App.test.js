import {
  screen,
  render,
  cleanup
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockResizeObserver } from './test-utils';

import App from './App';

beforeEach(() => {
  cleanup();
  mockResizeObserver();
});

test('should set a weekly repeat', async () => {
  const user = userEvent.setup()

  const {debug, getByRole: baseElementGetByRole} = render(
    <App
    />
    // I have also tried with providing:
    // , {baseElement: document.body}
  );

  const button = screen.getByRole('button', { name: /Repeat Frequency/i })

  /**
   * After clicking the button, the test just hangs and nothing happens anymore
   */
  await user.click(button)

  /**
   * This debug statement is never triggered
   */
  // debug()

  /**
   * Then I'm trying to make this kind of action - select a menu item
   */
  // await user.selectOptions(baseElementGetByRole('listbox'), ['WEEKLY'])

  expect(
    button
  ).toHaveTextContent(/weekly/i);
});
