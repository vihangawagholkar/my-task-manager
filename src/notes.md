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

```text
src/
 ├ components/
 │   └ TaskCard.jsx
 ├ App.jsx
 └ main.jsx
```

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

```javascript
const [state, setState] = useState(initialValue)
```

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

```jsx
<select value={state} onChange={handler}>
```

Why this matters:
	•	React controls the UI
	•	State always reflects the current value
	•	Easier to manage forms

⸻

4. Rendering Lists with map()

React often renders repeated elements using map.

Example pattern:

```javascript
array.map(item => JSX)
```

In this project:

options = ['High','Medium','Low']

Used to generate dropdown options.

⸻

5. React Keys

Whenever rendering lists, each element needs a unique key.

Example:

```jsx
<option key={option}>
```

Purpose:
	•	Helps React track which elements change
	•	Improves rendering performance

⸻

6. Event Handling in React

User interactions trigger event handlers.

Example:

```jsx
onChange={handleChange}
```

The event object gives access to input values.

Example:

e.target.value

Used to update priority state.

⸻

7. Flexbox Layout

The card layout uses Flexbox.

Main card layout:

```css
display: flex;
flex-direction: column;
```

Metadata section:

```css
.timeline {
  display: flex;
  gap: 8px;
}
```

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



11. Lifting State Up

State should live in the closest common parent component that needs it.

In the task manager:

App.jsx
   ↓
TaskCard.jsx

App owns the tasks state and passes data down as props.

Example pattern:

const [tasks, setTasks] = useState([]);

Child components do not modify state directly.
They call functions passed through props.

Example:

<TaskCard deleteTask={() => deleteTask(index)} />

Flow:

Child component action
        ↓
calls parent function
        ↓
parent updates state
        ↓
React re-renders UI


⸻

12. Updating Arrays in React State

React state should never be mutated directly.

Wrong:

```javascript
tasks.push(newTask)
```

Correct approach: create a new array.

Add task:

```javascript
setTasks([...tasks, newTask])
```

Delete task:

```javascript
setTasks(tasks.filter((task, i) => i !== index))
```

Update task:

```javascript
setTasks(
  tasks.map((task, i) =>
    i === index ? { ...task, completed: !task.completed } : task
  )
)
```

Key idea:

React detects state changes through new references.


⸻

13. Immutable Object Updates

When updating objects inside arrays, use spread operator.

Example:

```javascript
{ ...task, completed: !task.completed }
```

This creates a new object instead of modifying the existing one.

⸻

14. Passing Functions as Props

Functions can be passed from parent components to children.


Example:

```jsx
<TaskCard
  deleteTask={() => deleteTask(index)}
  toggleCompleted={() => toggleCompleted(index)}
/>
```

This allows child components to trigger actions in the parent.

⸻

15. Conditional Rendering

React components can render different UI depending on state.

Example in your project:

if (isEditing) {
  return <EditMode />
}
return <ViewMode />

Used to switch between:

Task display mode
Task editing mode


⸻

16. Form Handling in React

Forms should use controlled inputs.


Example pattern:

```javascript
const [title, setTitle] = useState('')
```

```jsx
<input
  value={title}
  onChange={(e) => setTitle(e.target.value)}
/>
```

Form submission pattern:

```javascript
const handleSubmit = (e) => {
  e.preventDefault();
}
```

Purpose:

Prevent page refresh
Handle data inside React


⸻

17. Local Storage Persistence

Browser localStorage can store data between page refreshes.

Example:

```javascript
localStorage.setItem('tasks', JSON.stringify(title))
```

Load data when component initializes:

```javascript
const saved = localStorage.getItem('tasks')
```

Use lazy initialization:

```javascript
useState(() => {
  const saved = localStorage.getItem('title')
  return saved ? JSON.parse(saved) : ""
})
```

Concept:

localStorage → React state
React state → localStorage

This allows the app to remember data after refresh.

⸻

18. useEffect

useEffect runs side effects after rendering.

Example:

```javascript
useEffect(() => {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}, [tasks])
```

Meaning:

Whenever tasks changes → run effect

Common uses:
	•	saving data
	•	fetching APIs
	•	timers
	•	subscriptions

⸻
17. Stale State (VERY IMPORTANT)

Problem:

```javascript

setTasks([...tasks, newTask])

```

	•	tasks might be outdated

```javascript

setTasks(prev => [...prev, newTask])

```
Rule:

Always use previous state when updating based on existing state.

One Extra Note I Recommend

Add a “Project Architecture” section.

Example:

```text
App.jsx
 ├ AddTaskForm.jsx
 └ TaskCard.jsx
```

Responsibilities:

App
- manages tasks state
- handles CRUD logic

AddTaskForm
- handles user input
- creates new tasks

TaskCard
- displays a task
- allows edit/delete/complete

This kind of note helps when projects get larger.

⸻

