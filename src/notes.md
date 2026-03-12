React Notes

Component structure
- Components go in src/components
- Use PascalCase for components

CSS Issues
- h1/h2 have default margins
- Remove with margin: 0
- justify-content:center centers vertically in flexbox

Dev Server Issues
If npm run dev hangs:
rm -rf node_modules package-lock.json
npm install

Good idea. Writing short technical notes about what you learned while building will help you remember React patterns later.

Here’s a clean set of notes you could write for this project so far.

⸻

Task Manager Project Notes

1. React Component Structure

Each UI piece should be a separate reusable component.

Example structure:

src/
 ├ components/
 │   └ TaskCard.jsx
 ├ App.jsx
 └ main.jsx

TaskCard Component

The TaskCard component represents a single task.

Responsibilities:
	•	Display task title
	•	Display task description
	•	Show priority selector
	•	Show deadline

⸻

2. React State (useState)

To make the priority dropdown interactive, we store its value in state.

Concept:

state = data that changes in the UI

Example pattern:

const [state, setState] = useState(initialValue)

In the project:

priority → current task priority
setPriority → function that updates it

Flow:

User selects option
      ↓
onChange event triggers
      ↓
setPriority updates state
      ↓
React re-renders component


⸻

3. Controlled Inputs

The <select> element is a controlled input.

This means its value is controlled by React state instead of the browser.

Pattern:

<select value={state} onChange={handler}>

Why this matters:
	•	React controls the UI
	•	State always reflects the current value
	•	Easier to manage forms

⸻

4. Rendering Lists with map()

React often renders repeated elements using map.

Example pattern:

array.map(item => JSX)

In this project:

options = ['High','Medium','Low']

Used to generate dropdown options.

⸻

5. React Keys

Whenever rendering lists, each element needs a unique key.

Example:

<option key={option}>

Purpose:
	•	Helps React track which elements change
	•	Improves rendering performance

⸻

6. Event Handling in React

User interactions trigger event handlers.

Example:

onChange={handleChange}

The event object gives access to input values.

Example:

e.target.value

Used to update priority state.

⸻

7. Flexbox Layout

The card layout uses Flexbox.

Main card layout:

display: flex
flex-direction: column

Metadata section:

.timeline {
  display: flex;
  gap: 8px;
}

This aligns priority and deadline horizontally.

⸻

8. CSS Card Design Pattern

Common card UI styles used:

border-radius
box-shadow
padding
background-color

These create a modern card component look.

⸻

9. Default Browser Styles

Some HTML elements have built-in styles.

Examples:
	•	<h1>, <h2> have default margins
	•	<select> has browser styling

These sometimes need to be overridden with CSS.

⸻

10. Component Design Principle

Goal of the component:

Reusable
Simple
Self-contained

Future improvement:

<TaskCard
  title="Finish React Project"
  description="Implement task priority dropdown"
  deadline="March 20"
/>

This will make the component reusable.

⸻

Key Lessons From This Step
	•	React UI updates when state changes
	•	Inputs should often be controlled by state
	•	Lists should be rendered with map()
	•	Each list item needs a key
	•	UI components should be reusable
