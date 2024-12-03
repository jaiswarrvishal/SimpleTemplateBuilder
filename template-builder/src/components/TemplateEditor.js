import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TemplateEditor.css';

const TemplateEditor = () => {
  const [templateName, setTemplateName] = useState('');
  const [templateContent, setTemplateContent] = useState('');
  const navigate = useNavigate(); // To navigate between pages

  // Function to handle Save
  const handleSave = () => {
    if (!templateName || !templateContent) {
      alert('Please fill out both the template name and content.');
      return;
    }

    // Simulate saving by logging to console
    console.log({
      name: templateName,
      content: templateContent,
    });

    alert('Template saved successfully!');
    navigate('/'); // Redirect to Templates List Page
  };

  // Function to handle Back to List
  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="editor-container">
      <h1>Template Editor</h1>

      {/* Template Name */}
      <div className="form-group">
        <label htmlFor="templateName">Template Name:</label>
        <input
          type="text"
          id="templateName"
          value={templateName}
          onChange={(e) => setTemplateName(e.target.value)}
          placeholder="Enter template name"
        />
      </div>

      {/* Template Content */}
      <div className="form-group">
        <label htmlFor="templateContent">Template Content:</label>
        <textarea
          id="templateContent"
          value={templateContent}
          onChange={(e) => setTemplateContent(e.target.value)}
          placeholder="Write your template content here..."
          rows="10"
        />
      </div>

      {/* Buttons */}
      <div className="buttons">
        <button className="save-button" onClick={handleSave}>
          Save
        </button>
        <button className="back-button" onClick={handleBack}>
          Back to List
        </button>
      </div>
    </div>
  );
};

export default TemplateEditor;
