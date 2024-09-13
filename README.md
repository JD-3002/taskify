

## Taskify - A To-Do Task Manager 
https://taskify-eight-topaz.vercel.app/

This project is a **To-Do Task Manager** built with **React** and **Vite**, designed to manage tasks efficiently with features like task creation, editing, priority setting, due dates, and more. The project follows a milestone-based development approach.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Milestones](#milestones)
  - [Milestone 1 (Basic Features)](#milestone-1-basic-features)
  - [Milestone 2 (Intermediate Features)](#milestone-2-intermediate-features)
  - [Advanced Features (Good to Have)](#advanced-features-good-to-have)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Technologies Used](#technologies-used)
- [License](#license)

## Project Overview

This **To-Do Task Manager** is a React application designed to help users manage their daily tasks by providing features such as adding, deleting, editing, and prioritizing tasks. It includes essential features like due dates, task completion tracking, search functionality, and more.

## Features

- **Task Creation and Management**: Add, delete, and edit tasks.
- **Task Properties**: Set due dates and prioritize tasks (Low, Medium, High).
- **Task Completion**: Mark tasks as completed and visually distinguish them.
- **Search and Filter**: Search tasks by title and filter them based on priority or due date.
- **Responsive Design**: Works seamlessly across desktop and mobile devices.
- **Dark Mode**: Toggle between light and dark themes.
- **Advanced Task Sorting**: Sort tasks by priority and due dates.
- **Local Storage**: Persistent task storage across page reloads.

## Milestones

###Basic Features

1. **Task List Display**: 
   - Display tasks with title and description.
   - Add basic functionality to create and delete tasks.

2. **Task Form**:
   - Form to add tasks with title and description.
   - Implement basic validation (title and description required).

3. **State Management**:
   - Use `useState` to manage the list of tasks.

4. **Styling**:
   - Basic CSS for presentation.

###Intermediate Features

1. **Enhanced Task Properties**:
   - Add due dates and priority levels (Low, Medium, High).
   - Allow users to edit existing tasks.

2. **Advanced Validation**:
   - Ensure task titles are unique.
   - Validate that due dates are today or in the future.

3. **Task Interactions**:
   - Mark tasks as completed with a visual distinction.
   - Implement search functionality to filter tasks by title.

4. **Improved State Management**:
   - Use `useReducer` or **Context API** for better state management.

5. **Responsive Design**:
   - Ensure the app is mobile-friendly.

### Advanced Features

1. **Performance Optimization**:
   - Implement list virtualization for large sets of tasks.
   - Use `React.memo()` and `useCallback()` to optimize rendering.

2. **Advanced Features**:
   - Add a snooze feature to postpone due dates.
   - Sort tasks by priority and due date.
   - Implement accordion-style task details.

3. **UI/UX Enhancements**:
   - Dark mode with smooth transitions.
   - Drag-and-drop functionality to reorder tasks.

4. **Data Persistence**:
   - Save tasks in `localStorage` for persistence between page reloads.

5. **Error Handling**:
   - Implement error boundaries with user-friendly error messages.

6. **Analytics Dashboard**:
   - Show task completion rates and overdue tasks.

## Installation

To install and set up the project locally:

```bash
# Clone the repository
git clone https://github.com/your-username/todo-task-manager.git

# Navigate into the project directory
cd todo-task-manager

# Install the dependencies
npm install
```

## Running the Project

To start the development server:

```bash
npm run dev
```

This will start the Vite development server. The app will be accessible at `http://localhost:3000`.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **Vite**: Fast build tool for modern web development.
- **TypeScript**: Strongly typed programming language for better development experience.
- **React Router**: For handling routing in the app.
- **Styled Components**: For component-level styling.
- **useState, useReducer, Context API**: State management solutions.
- **LocalStorage**: For persisting tasks across sessions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to modify any sections to better fit your project’s specific details or add more sections if necessary!
