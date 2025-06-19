'use client'

import React, { useState } from 'react'

interface Todo {
  id: number
  text: string
  completed: boolean
}

type FilterType = 'all' | 'active' | 'completed'

interface Stats {
  total: number
  completed: number
  active: number
}

export default function ReactAppPage(): React.ReactElement {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Learn Nextra', completed: false },
    { id: 2, text: 'Build custom theme', completed: true },
    { id: 3, text: 'Create React app page', completed: false }
  ])
  const [newTodo, setNewTodo] = useState<string>('')
  const [filter, setFilter] = useState<FilterType>('all')

  const addTodo = (): void => {
    if (newTodo.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: newTodo.trim(),
        completed: false
      }])
      setNewTodo('')
    }
  }

  const toggleTodo = (id: number): void => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id: number): void => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const filteredTodos: Todo[] = todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  const stats: Stats = {
    total: todos.length,
    completed: todos.filter(t => t.completed).length,
    active: todos.filter(t => !t.completed).length
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewTodo(e.target.value)
  }

  const handleFilterChange = (filterType: FilterType): void => {
    setFilter(filterType)
  }

  const filters: FilterType[] = ['all', 'active', 'completed']

  return (
    <div className="px-8 py-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 relative">
          {/* 可爱装饰 */}
          <div className="absolute top-0 left-1/4 animate-bounce text-pink-400 text-2xl">🌸</div>
          <div className="absolute top-4 right-1/3 animate-pulse text-purple-400 text-xl">✨</div>
          
          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            🎮 Claude的可爱任务管理器
          </h1>
          <p className="text-pink-600 text-lg font-medium">
            ～(＾◡＾)～ 这是一个超可爱的React应用，融入Claude的二次元主题 ～(＾◡＾)～
          </p>
          <div className="flex justify-center space-x-4 mt-6 text-sm">
            <span className="px-4 py-2 bg-gradient-to-r from-pink-100 to-pink-200 text-pink-700 rounded-full font-bold border border-pink-300">
              🌸 React Hooks
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-purple-200 text-purple-700 rounded-full font-bold border border-purple-300">
              💜 Interactive
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-700 rounded-full font-bold border border-indigo-300">
              ✨ Real-time
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
            <div className="text-sm text-blue-700">Total Tasks</div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-600">{stats.completed}</div>
            <div className="text-sm text-green-700">Completed</div>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">{stats.active}</div>
            <div className="text-sm text-orange-700">Active</div>
          </div>
        </div>

        {/* Add Todo */}
        <div className="mb-6">
          <div className="flex space-x-2">
            <input
              type="text"
              value={newTodo}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Add a new task..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={addTodo}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Add Task
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex justify-center space-x-2 mb-6">
          {filters.map(filterType => (
            <button
              key={filterType}
              onClick={() => handleFilterChange(filterType)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
                filter === filterType
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filterType}
            </button>
          ))}
        </div>

        {/* Todo List */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          {filteredTodos.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <div className="text-4xl mb-2">📝</div>
              <p>
                {filter === 'active' ? 'No active tasks!' : 
                 filter === 'completed' ? 'No completed tasks!' : 
                 'No tasks yet. Add one above!'}
              </p>
            </div>
          ) : (
            <ul className="divide-y divide-gray-200">
              {filteredTodos.map(todo => (
                <li key={todo.id} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleTodo(todo.id)}
                      className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span
                      className={`flex-1 ${
                        todo.completed
                          ? 'text-gray-500 line-through'
                          : 'text-gray-900'
                      }`}
                    >
                      {todo.text}
                    </span>
                    <button
                      onClick={() => deleteTodo(todo.id)}
                      className="p-1 text-red-600 hover:text-red-800 hover:bg-red-50 rounded transition-colors"
                      aria-label={`Delete task: ${todo.text}`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Features */}
        <div className="mt-12 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
          <h3 className="text-lg font-semibold text-purple-900 mb-3">
            🚀 Features Demonstrated
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-purple-800">
            <div className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>React Hooks (useState, useEffect)</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>Interactive UI Components</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>State Management</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>Custom Nextra Theme Integration</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>Responsive Design</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>TypeScript Support</span>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-gray-500 text-sm">
          This React app works seamlessly within the Nextra custom theme!
        </div>
      </div>
    </div>
  )
} 