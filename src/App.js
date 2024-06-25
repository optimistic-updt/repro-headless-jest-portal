import React, { useState } from 'react'
import { Field, Label, Listbox, ListboxButton,  ListboxOptions, ListboxOption } from "@headlessui/react";

export const FREQUENCY_OPTION = {
  daily: 'DAILY',
  weekly: 'WEEKLY',
  monthly: 'MONTHLY',
  yearly: 'YEARLY',
};

export const App = () => {
  const [frequency, setfrequency] = useState(FREQUENCY_OPTION['daily'])

  return (
    <div className="sm:flex sm:items-center sm:space-x-4">
      <span className="text-gray-text mb-1 block shrink-0 sm:mb-0">
        Repeat every:
      </span>

      <div className="flex grow items-center space-x-2">
        <label htmlFor="interval">
          <span className="sr-only">Repeat interval</span>
          <input
            type="number"
            name="interval"
            id="interval"
            className="placeholder-gray focus:border-orange-hank border-gray-lightest w-16 rounded-md border bg-white px-4 py-3 text-center text-sm font-normal text-black focus:outline-none disabled:cursor-not-allowed sm:w-20 sm:text-xl"
          />
        </label>

        <Field>
          <Label className="sr-only">Repeat Frequency</Label>
          <Listbox
            value={frequency}
            onChange={setfrequency
            }
          >
            <ListboxButton className="border-gray-lightest focus:border-orange-hank relative flex w-full cursor-default items-center justify-between truncate rounded-md border bg-white py-3 pl-3 pr-3 text-left text-sm capitalize focus:outline-none disabled:cursor-not-allowed sm:w-[175px] sm:text-xl">
              {frequency}
            </ListboxButton>
            <ListboxOptions
              anchor="bottom"
              className="z-dropdown xs:w-64 w-32 rounded-md bg-white p-2 shadow-lg"
            >
              {Object.values(FREQUENCY_OPTION).map((frequency) => (
                <ListboxOption
                  key={frequency}
                  value={frequency}
                  className="data-[selected]:text-primary hover:bg-gray-hover cursor-pointer rounded-sm px-2 py-1 capitalize"
                >
                  {frequency}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Listbox>
        </Field>
      </div>
    </div>
  );
};


export default App;
