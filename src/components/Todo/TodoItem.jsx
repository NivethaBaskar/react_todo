import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTodo, deleteTodo } from '../../store/todoSlice';
import { Trash2, Edit, Calendar, Check } from 'lucide-react';
import { format } from 'date-fns';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.items);
  const project = projects.find(p => p.id === todo.projectId);

  const priorityColors = {
    High: 'var(--danger)',
    Medium: 'var(--warning)',
    Low: 'var(--accent-color)'
  };

  return (
    <div className="glass-panel" style={{ 
      padding: '1.25rem', 
      display: 'flex', 
      alignItems: 'flex-start', 
      gap: '1rem',
      opacity: todo.completed ? 0.6 : 1,
      transition: 'all 0.3s ease',
      borderLeft: `4px solid ${priorityColors[todo.priority] || 'var(--border-color)'}`
    }}>
      <button 
        onClick={() => dispatch(toggleTodo(todo.id))}
        style={{ 
          width: '24px', 
          height: '24px', 
          borderRadius: '50%', 
          border: `2px solid ${todo.completed ? 'var(--success)' : 'var(--border-color)'}`,
          background: todo.completed ? 'var(--success)' : 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '0.25rem'
        }}
      >
        {todo.completed && <Check size={14} color="white" />}
      </button>

      <div style={{ flex: 1 }}>
        <h3 style={{ 
          fontSize: '1rem', 
          fontWeight: 500, 
          marginBottom: '0.25rem',
          textDecoration: todo.completed ? 'line-through' : 'none',
          color: todo.completed ? 'var(--text-secondary)' : 'var(--text-primary)'
        }}>
          {todo.title}
        </h3>
        {todo.description && (
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
            {todo.description}
          </p>
        )}
        
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
          {todo.dueDate && (
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <Calendar size={12} /> {format(new Date(todo.dueDate), 'MMM d, yyyy')}
            </span>
          )}
          {project && (
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', background: `${project.color}20`, color: project.color, padding: '0.125rem 0.5rem', borderRadius: '1rem' }}>
              {project.name}
            </span>
          )}
        </div>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button style={{ color: 'var(--text-secondary)', padding: '0.25rem' }} className="action-btn">
          <Edit size={16} />
        </button>
        <button 
          onClick={() => dispatch(deleteTodo(todo.id))}
          style={{ color: 'var(--danger)', padding: '0.25rem' }} 
          className="action-btn"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
