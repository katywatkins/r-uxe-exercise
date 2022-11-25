# UXE Exercise

## Prerequisites:
Node 16 (This was build with 16.18.1)

## Project Structure

 * `/src/components` contains generic components that could be part of a design system
 * `/src/components-project` contains components that provide more restrictions and would likely be part of a specific project rather than a general system
 * `stories` contains storybook files for component development & testing


## Commands
* `npm i` to install dependencies
* `npm run start` to see the app
* `npm run storybook` to see generic components
* `npm run lint` for linting
* `npm run test` for tests (though they only test the button on PromoCard )

## Misc Notes
* In an ideal world the card layout would change based on its own width, not the browser's width, but for the sake of time I kept it simple and just used media queries.

* My spacing variables (using ems), in retrospect, are not appropriate for the project as it is currently structured, because it's not using dedicated title text components that prevent text size from affecting margin or padding that is added. It's just what I was most used to working with.
