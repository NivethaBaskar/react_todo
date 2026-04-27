import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { items: todos } = useSelector((state) => state.todos);
  const { status, projectId, searchQuery } = useSelector((state) => state.filters);

  const filteredTodos = todos.filter((todo) => {
    // Status filter
    if (status === 'ACTIVE' && todo.completed) return false;
    if (status === 'COMPLETED' && !todo.completed) return false;
    
    // Project filter
    if (projectId && todo.projectId !== projectId) return false;
    
    // Search filter
    if (searchQuery && !todo.title.toLowerCase().includes(searchQuery.toLowerCase()) && !todo.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  if (filteredTodos.length === 0) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--text-secondary)' }}>
        <p>No tasks found.</p>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
