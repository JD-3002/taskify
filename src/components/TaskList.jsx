import React, { useState } from 'react'
import { format } from 'date-fns'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'
import TaskForm from './TaskForm'

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  const [expandedTaskId, setExpandedTaskId] = useState(null)
  const [editingTaskId, setEditingTaskId] = useState(null)

  const toggleExpand = (taskId) => {
    setExpandedTaskId(prevId => (prevId === taskId ? null : taskId))
  }

  const handleEdit = (task) => {
    setEditingTaskId(null)
    updateTask(task)
  }

  return (
    <div className="space-y-4">
      {tasks.map(task => (
        <div
          key={task.id}
          className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden"
        >
          <div
            className="p-4 flex items-center justify-between cursor-pointer"
            onClick={() => toggleExpand(task.id)}
          >
            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => updateTask({ ...task, completed: !task.completed })}
                onClick={e => e.stopPropagation()}
                className="h-5 w-5 text-teal-600"
              />
              <div>
                <h3 className={`font-semibold ${task.completed ? 'line-through text-gray-500' : ''}`}>
                  {task.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Due Date: {format(new Date(task.dueDate), 'dd MMM yyyy')}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className={`px-2 py-1 rounded-full text-sm ${
                task.priority === 'high' ? 'bg-red-100 text-red-800' :
                task.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                'bg-green-100 text-green-800'
              }`}>
                {task.priority}
              </span>
              {expandedTaskId === task.id ? (
                <ChevronUpIcon className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDownIcon className="h-5 w-5 text-gray-500" />
              )}
            </div>
          </div>
          {expandedTaskId === task.id && (
            <div className="p-4 border-t dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>Description:</strong> {task.description}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>Due Date:</strong> {format(new Date(task.dueDate), 'dd MMM yyyy - HH:mm')}
              </p>
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setEditingTaskId(task.id)}
                  className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          )}
          {editingTaskId === task.id && (
            <TaskForm
              task={task}
              onSubmit={handleEdit}
              onCancel={() => setEditingTaskId(null)}
            />
          )}
        </div>
      ))}
    </div>
  )
}

export default TaskList