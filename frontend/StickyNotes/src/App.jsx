import './App.css';
import NotesListPage from './pages/NotesListPage'
import NotePage from './pages/NotePage'
import NoteCreatePage from './pages/NoteCreatePage';

import {
  Route,
  Routes
 } from "react-router-dom";

// Wrap your components in a Router and set up routes
const App = () => {
  return (
    <div className="container">
      <div className="app">
        <div className="app-header">StickyNote App!</div>
        <div className="app-body">
          <Routes>
            <Route path='/' element={<NotesListPage/>} />
            <Route path='/note/:noteId' element={<NotePage/>} />
            <Route path='/note/create/' element={<NoteCreatePage/>} />
          </Routes>
        </div>
        <div className="app-footer">Made by Love!</div>
      </div>

    </div>
  );
};

export default App;
