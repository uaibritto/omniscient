# Changelog

All changes made to the project will be documented here.

## v`0.0.3` | `November 6, 2025`

Initial release

- Snippets;
- Key bindings.

## v`0.0.4` | `November 6, 2025`

### Added

- CSS class utility for JSX/TSX.

## v`0.0.5` | `November 6, 2025`

### Corrections

- Fixed issue with JSX/TSX snippets;
- Fixed issue with shortcut keys.

## v`0.0.7` | `November 14, 2025`

### Corrections

- Problem fixed with excerpts from biome.json;
- The Tanstack Query and React Router commands generate a complete component;
- Corrections and improvements to the README.

### Added

- Server script snippet for Prisma, Biome, and Bun;
- Utility for creating routes on the server.

## v`0.0.8` | `November 24, 2025`

### Added

- New snippet: "Function Form Actions" for JavaScript, JavaScript React, TypeScript, and TypeScript React, providing a structured template for handling form actions and requests.
- Improved code snippet definitions for better usability and consistency.

### Corrections

- Minor documentation and snippet description adjustments.
- Package.json snippet registration improvements to ensure all relevant languages and file types receive new actions.

## v`0.0.9` | `November 14, 2025`

### Added

- Added snippet for inserting the default Biome config (`bio`) for JSON files.

### Corrections

- Improved README to document new snippets, including images and usage instructions for Biome config and server scripts.
- General README enhancements for clarity and completeness.

## v`0.1.0` | `November 26, 2025`

### Added

- New snippet for adding favicons to your pages.

### Corrections and improvements

- The code snippets for creating components have been improved and divided into two parts:
    - `Components with props`
    - `Components without props`

This ensures the true usefulness of each component, since larger components, such as a card or a page, are incompatible with how props were previously defined.

- Improvements to the documentation to maintain consistency and fidelity with the code snippets.

## v`0.1.1` | `November 26, 2025`

### Added

- New "Form Actions Function" snippet available for JavaScript, JavaScript React, TypeScript, and TypeScript React (`faf`). This snippet adds a structured template for handling form actions and requests, making it easier to create asynchronous functions that process data from forms.

- All relevant snippet files have been updated to include the shortcut and documentation for the new snippet.

### Fixes and improvements

- Registration of the "Form Actions Function" snippets ensured in `"snippets/utils-js.code-snippets"` and `"snippets/utils-ts.code-snippets"`, covering React and non-React environments.

- Expanded documentation in the README to detail the new snippet, including syntax, usage, and supported scopes.

- Improved matching between documentation and registered snippets, ensuring clarity on the shortcuts available for each language.

## v`0.1.3` | `November 26, 2025`

Update to version 0.1.3 with snippet enhancements and README updates.

- Modified JavaScript and TypeScript snippets to improve form handling by changing parameters and adding "use server" directive.
- Updated images in README for the "Form Actions Function" to reflect new content.

## v`0.1.6` | `December 17, 2025`

Update dependencies and enhance snippets for improved functionality.

- Added new snippets for Drizzle and Prisma configurations with Postgres.
- Improved README with new images and documentation for added snippets.
- Refactored button component to accept props for better flexibility.

## v`0.2.6` | `December 17, 2025`

Update dependencies, enhance snippets, and modify configuration files for improved functionality.

- Updated Biome schema to version 2.3.9.
- The Docker Compose snippets have been removed because there was a bug in the snippet generation that cannot be fixed at this time.
