import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TemplatesList.css';


const TemplatesList = () => {
    const navigate = useNavigate();
  // Mock data for templates
  const templatesLibrary = [
    { id: 1, name: 'Library Template 1', createdAt: '2024-11-20' },
    { id: 2, name: 'Library Template 2', createdAt: '2024-11-22' },
  ];

  const templatesSaved = [
    { id: 3, name: 'My Template 1', createdAt: '2024-11-25' },
  ];

  // State to track the active tab
  const [activeTab, setActiveTab] = useState('library');

  // Function to switch tabs
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="templates-container">
      <h1>Templates List</h1>
  
      {/* Tabs */}
      <div className="tabs">
        <button
          className={activeTab === 'library' ? 'active' : ''}
          onClick={() => handleTabChange('library')}
        >
          Template Library
        </button>
        <button
          className={activeTab === 'saved' ? 'active' : ''}
          onClick={() => handleTabChange('saved')}
        >
          Saved Templates
        </button>
      </div>
  
      {/* List of Templates */}
      <div>
        {(activeTab === 'library' ? templatesLibrary : templatesSaved).map(
          (template) => (
            <div key={template.id} className="template-card">
              <h3>{template.name}</h3>
              <p>Created At: {new Date(template.createdAt).toLocaleDateString()}</p>
            </div>
          )
        )}
      </div>
  
      {/* Create Template Button */}
      {/* Other code */}
      <button className="create-button" onClick={() => navigate('/editor')}>
        Create Template
      </button>
    </div>
  );
}

export default TemplatesList;
