# Notes App

## Overview

A modern, accessible, and responsive notes app built with HTML, SCSS, and JavaScript. This project features a clean design with dark/light mode support, smooth animations, and full accessibility compliance. The app allows users to create, edit, and delete notes, with all data persisted in local storage.

## Features

- **Note Management:**

  - Create new notes with title, content, category, and date
  - Edit existing notes
  - Delete notes
  - Filter notes by category
  - Persist notes in local storage

- **Theme Support:**

  - Dark/Light mode toggle
  - Theme preference persistence
  - Smooth theme transitions
  - System theme detection

- **Accessibility:**

  - ARIA labels and roles
  - Keyboard navigation
  - Screen reader support
  - Semantic HTML structure
  - High contrast mode support

- **Design Elements:**

  - Responsive layout
  - Modern UI components
  - Smooth animations
  - Custom icon system
  - SVG social icons

- **Performance:**
  - No JavaScript frameworks
  - Optimized assets
  - Minimal dependencies

## File Structure

```text
/assets
├── css/
│   ├── general/
│   │   ├── base.scss       # Base styles and variables
│   │   ├── icons.scss      # Icon font styles
│   │   ├── keyframes.scss  # Animation keyframes
│   │   └── mixin.scss      # SCSS mixins
│   └── index.scss          # Main stylesheet
├── js/
|   |-- funtions.js         # JavaScript functions
|   └── index.js            # Core JavaScript logic
|-- social_svgs/            # Social media icons
index.html                  # Main HTML file
README.md                   # Documentation
```

## Technologies Used

- **HTML5:** Semantic structure and accessibility
- **SCSS/CSS3:** Modern styling and animations
- **JavaScript:** Theme handling and interactions
- **Custom Icon System:** Optimized icon font
- **Local Storage:** Data persistence

## How to Use

**1. Clone the Repository:**

```bash
git clone https://github.com/nvmwhoiam/notes-app-js.git
```

**2. Navigate to the Project Directory:**

```bash
cd notes-app-js
```

**3. Open `index.html` in a Browser** or serve it using a local server like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

## JavaScript Logic

The JavaScript logic for the app includes the following key functionalities:

- **Note Creation:**

  - Users can add new notes with a title, content, category, and date.
  - Notes are saved to local storage and displayed in the UI.

- **Note Editing:**

  - Users can edit existing notes by clicking the edit button.
  - The form is pre-filled with the note's current data for editing.

- **Note Deletion:**

  - Users can delete notes by clicking the delete button.
  - The note is removed from local storage and the UI.

- **Note Filtering:**

  - Users can filter notes by category using the navigation buttons.
  - Notes are dynamically shown or hidden based on the selected category.

- **Local Storage Integration:**
  - Notes are saved to and retrieved from local storage.
  - The app ensures data persistence across page reloads.

## Future Enhancements

- Add note archiving functionality
- Support for note tagging
- Add search functionality for notes
- Export notes to PDF or text files
- Add drag-and-drop reordering of notes

## Contact

If you have any questions or need assistance, please feel free to reach out. You can contact me at [info@lynqis.io](mailto:info@lynqis.io) or open an issue on the [GitHub Repository](https://github.com/nvmwhoiam/notes-app-js).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Author

- nvmwhoiam
- Website: [lynqis.io](https://lynqis.io)
- GitHub: [GitHub Profile](https://github.com/nvmwhoiam/)
