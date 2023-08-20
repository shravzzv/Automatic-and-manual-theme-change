# Automatic and Manual Theme Changes

This project is a simple web app that enables users to switch between light and dark themes manually, while also automatically adapting to the system's color scheme preference.

## Features

- Toggle between light and dark themes manually using a button.
- The app automatically adjusts its theme based on the system's color scheme preference.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/shravzzv/Automatic-and-manual-theme-change
   ```

2. Open the project directory:

   ```bash
   cd Automatic-and-manual-theme-change
   ```

3. Open the `index.html` file in your preferred web browser.

## Usage

### Manual Theme Change

1. Click the "Toggle theme" button to switch between light and dark themes.

### Automatic Theme Change

The app automatically adjusts its theme based on the system's color scheme preference.

## How It Works

The project utilizes CSS variables and JavaScript to achieve theme switching functionality:

1. The CSS variables (`--base-text-clr`, `--base-bg-clr`, `--btn-text-clr` and `--btn-bg-clr`) define the colors for both light and dark themes.

2. The JavaScript code toggles a class `changed` on the root element based on the button click.

3. The app responds to the system's color scheme preference using the `prefers-color-scheme` media query.

## Contributions

Contributions to the project are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the [MIT License](https://github.com/shravzzv/Automatic-and-manual-theme-change/blob/main/LICENSE).

---
