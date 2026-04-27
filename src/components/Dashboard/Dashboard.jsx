import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const todos = useSelector((state) => state.todos.items);
  const total = todos.length;
  const completed = todos.filter(t => t.completed).length;
  const active = total - completed;
  const progress = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>Overview</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
          <span style={{ color: 'var(--text-secondary)' }}>Progress</span>
          <span style={{ fontWeight: 600 }}>{progress}%</span>
        </div>
        <div style={{ width: '100%', height: '8px', background: 'var(--bg-primary)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
          <div style={{ width: `${progress}%`, height: '100%', background: 'var(--accent-color)', transition: 'width 0.5s ease' }}></div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div style={{ background: 'var(--bg-primary)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
          <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--accent-color)' }}>{active}</div>
          <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Active Tasks</div>
        </div>
        <div style={{ background: 'var(--bg-primary)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
          <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--success)' }}>{completed}</div>
          <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Completed</div>
        </div>
      </div>
      
      <div style={{ marginTop: '1rem' }}>
        <h4 style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>Priority Breakdown</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {['High', 'Medium', 'Low'].map(p => {
            const count = todos.filter(t => !t.completed && t.priority === p).length;
            const colors = { High: 'var(--danger)', Medium: 'var(--warning)', Low: 'var(--accent-color)' };
            return (
              <div key={p} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: colors[p] }}></div>
                  <span style={{ fontSize: '0.875rem' }}>{p}</span>
                </div>
                <span style={{ fontWeight: 500 }}>{count}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
