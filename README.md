#  DevStack

> Build, compare, and assemble your dream development stack in seconds.

DevStack is an interactive web platform designed to help developers explore modern web tools, frameworks, and databases across multiple categories. With real-time stack tracking, responsive cards, and clean UI feedback, picking the right tools for your next project has never been easier.

---

###  Built With

* **React**
* **TypeScript** 
* **Tailwind CSS** 
* **DaisyUI** 
* **React Icons** 
* **React Toastify**

---

###  Key Features

* **Interactive Stack Builder:** Add tools dynamically to your personal stack sidebar with real-time feedback and state tracking.
* **Smart Card States:** Cards disable automatically once added, complete with custom deep-pink accents, badges, and a crossed-circle cursor to prevent duplicates.
* **Category & Difficulty Insights:** Instant scannability with difficulty tags, community ratings, and technology category chips.

---

##  React Concepts & Questions

#### 1. What is JSX, and why is it used in React?
JSX is an HTML-like syntax inside JavaScript. It lets us write UI markup and component logic in the same file, making components much easier to read, write, and visualize compared to plain `React.createElement` calls.

#### 2. What is the difference between props and state?
* **Props** are read-only values passed down from a parent component to a child (like inputs to a function).
* **State** is internal data managed inside the component that can change over time and triggers a re-render when updated.

#### 3. What does the useState hook do, and where did you use it in this project?
`useState` lets a functional component store and update dynamic data. In DevStack, we used it in `CardItem` (`isAdded`) to toggle the button from "Add to Stack" to "Added to Stack", and in the parent to track the stack count (`stackCount`).

#### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
`useEffect` handles side effects outside normal rendering—like fetching data or setting timers. We use it to fetch the local or remote technology JSON list once when the component mounts so we don't trigger infinite re-renders.

#### 5. Why does every item in a .map() list need a unique key prop?
React uses the `key` prop to identify which items were added, removed, or re-ordered in the DOM. Without unique keys, React has to re-render the entire list instead of just updating the specific changed element.

#### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different UI elements based on whether a condition is true or false. 
* **Example in DevStack:** Showing the dashed "Your stack is empty" box when `selectedCount === 0`, and swapping the button text/style between `"Add to Stack"` and `"Added to Stack"` using `isAdded ? ... : ...`.

#### 7. How do you pass data from a parent component to a child, and how does a child send something back?
* **Parent to Child:** Pass data directly down via custom props (e.g., `<CardItem stack={item} />`).
* **Child to Parent:** The parent sends a callback function as a prop (e.g., `onSelect={handleSelect}`), and the child invokes that function with the needed data when an event happens (like a button click).