import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TemplatesList from './components/TemplatesList';
import TemplateEditor from './components/TemplateEditor';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TemplatesList />} />
        <Route path="/editor" element={<TemplateEditor />} />
      </Routes>
    </Router>
  );
}

export default App;
