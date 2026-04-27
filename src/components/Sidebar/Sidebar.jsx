import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setStatusFilter, setProjectFilter } from '../../store/filterSlice';
import { LayoutDashboard, CheckCircle2, Circle, ListTodo, Hash } from 'lucide-react';

const Sidebar = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.items);
  const { status, projectId } = useSelector((state) => state.filters);

  return (
    <aside className="sidebar">
      <div>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <CheckCircle2 color="var(--accent-color)" /> TaskMaster
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <button 
            onClick={() => { dispatch(setStatusFilter('ALL')); dispatch(setProjectFilter(null)); }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', background: status === 'ALL' && !projectId ? 'var(--bg-secondary)' : 'transparent', textAlign: 'left' }}
          >
            <LayoutDashboard size={18} /> All Tasks
          </button>
          <button 
            onClick={() => { dispatch(setStatusFilter('ACTIVE')); dispatch(setProjectFilter(null)); }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', background: status === 'ACTIVE' && !projectId ? 'var(--bg-secondary)' : 'transparent', textAlign: 'left' }}
          >
            <Circle size={18} /> Active
          </button>
          <button 
            onClick={() => { dispatch(setStatusFilter('COMPLETED')); dispatch(setProjectFilter(null)); }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', background: status === 'COMPLETED' && !projectId ? 'var(--bg-secondary)' : 'transparent', textAlign: 'left' }}
          >
            <CheckCircle2 size={18} /> Completed
          </button>
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>Projects</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {projects.map((project) => (
            <button 
              key={project.id}
              onClick={() => dispatch(setProjectFilter(project.id))}
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', background: projectId === project.id ? 'var(--bg-secondary)' : 'transparent', textAlign: 'left' }}
            >
              <Hash size={16} color={project.color} /> {project.name}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
