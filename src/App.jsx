import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import TodoList from './components/Todo/TodoList';
import TodoFormModal from './components/Todo/TodoFormModal';
import { Plus, Search } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from './store/filterSlice';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <header className="header">
          <div className="search-bar" style={{ position: 'relative', width: '300px' }}>
            <Search size={18} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
            <input 
              type="text" 
              placeholder="Search tasks..." 
              onChange={handleSearch}
              style={{ width: '100%', paddingLeft: '35px' }}
            />
          </div>
          <button className="btn-primary" onClick={() => setIsModalOpen(true)}>
            <Plus size={20} />
            Add Task
          </button>
        </header>
        
        <div style={{ display: 'flex', gap: '2rem', flex: 1, overflow: 'hidden' }}>
          <div style={{ flex: 1, overflowY: 'auto', paddingRight: '1rem' }}>
            <TodoList />
          </div>
          <div style={{ width: '350px' }}>
            <Dashboard />
          </div>
        </div>
      </main>

      {isModalOpen && <TodoFormModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
// test PR tigger

export default App;
