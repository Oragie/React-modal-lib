# 🧩 react-modal-lib

A simple, reusable, and accessible modal component for React.

> Inspired by [jquery-modal](https://github.com/kylefox/jquery-modal), rebuilt for the modern React ecosystem.

---

## 📦 Installation

```bash
npm install react-modal-lib
```

---

## 🚀 Usage

```jsx
import React, { useState } from "react";
import { Modal } from "react-modal-lib";

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open modal</button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Hello 👋</h2>
        <p>This is the content of the modal.</p>
      </Modal>
    </>
  );
}
```

---

## 🛠 Props

'
| Prop | Type | Default | Description |
| --------------------- | ------------ | ------- | ----------------------------------------- |
| `isOpen` | `boolean` | — | Controls whether the modal is open |
| `onClose` | `() => void` | — | Called when the modal should close |
| `children` | `ReactNode` | — | Modal content |
| `closeOnOverlayClick` | `boolean` | `true` | Close the modal when clicking the overlay |
| `closeOnEscape` | `boolean` | `true` | Close the modal when pressing `Escape` |
| `showCloseButton` | `boolean` | `true` | Show the "×" close button |

'

---

## 🎨 Styling

The modal uses its own internal Modal.css, but you can override styles via classnames:

```css
.modal-overlay {
  ...;
}
.modal-content {
  ...;
}
.modal-close {
  ...;
}
```

Make sure to import the CSS:

```js
import "react-modal-lib/dist/style.css";
```

Or include it via bundler (already included if you use Vite).

---

## 🧪 Local Testing

To test this library locally:

```bash
# In the library folder
npm run build
npm link

# In your React app
npm link react-modal-lib

```

---

## 📄 License

MIT — free to use and modify.
