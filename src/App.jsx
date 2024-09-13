import React, { useState, useEffect, useCallback } from 'react'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import Header from './components/Header'
import { PlusIcon } from '@heroicons/react/24/outline'

const App = () => {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('all')
  const [isAddingTask, setIsAddingTask] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks')
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = useCallback((task) => {
    setTasks(prevTasks => [...prevTasks, task])
    setIsAddingTask(false)
  }, [])

  const updateTask = useCallback((updatedTask) => {
    setTasks(prevTasks =>
      prevTasks.map(task => (task.id === updatedTask.id ? updatedTask : task))
    )
  }, [])

  const deleteTask = useCallback((taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId))
  }, [])

  const toggleDarkMode = useCallback(() => {
    setDarkMode(prevMode => !prevMode)
  }, [])

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true
    if (filter === 'done') return task.completed
    return task.priority.toLowerCase() === filter && !task.completed
  })

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Task List View</h1>
            <button
              onClick={() => setIsAddingTask(true)}
              className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center"
            >
              <PlusIcon className="h-5 w-5 mr-2" />
              Add New Task
            </button>
          </div>
          <div className="mb-6 flex space-x-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full ${filter === 'all' ? 'bg-gray-200 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'}`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('high')}
              className={`px-4 py-2 rounded-full ${filter === 'high' ? 'bg-gray-200 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'}`}
            >
              High
            </button>
            <button
              onClick={() => setFilter('medium')}
              className={`px-4 py-2 rounded-full ${filter === 'medium' ? 'bg-gray-200 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'}`}
            >
              Medium
            </button>
            <button
              onClick={() => setFilter('low')}
              className={`px-4 py-2 rounded-full ${filter === 'low' ? 'bg-gray-200 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'}`}
            >
              Low
            </button>
            <button
              onClick={() => setFilter('done')}
              className={`px-4 py-2 rounded-full ${filter === 'done' ? 'bg-gray-200 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'}`}
            >
              Done
            </button>
          </div>
          <TaskList
            tasks={filteredTasks}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
          {isAddingTask && (
            <TaskForm
              onSubmit={addTask}
              onCancel={() => setIsAddingTask(false)}
            />
          )}
        </main>
      </div>
    </div>
  )
}

export default App