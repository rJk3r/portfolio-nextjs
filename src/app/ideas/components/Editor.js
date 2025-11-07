import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import "../UI.css";

export default function Editor({ content, onChange }) {
  return (
    <div className="editor-wrapper">
      <textarea
        value={content}
        onChange={(e) => onChange(e.target.value)}
        className="markdown-input"
        placeholder="Введите Markdown здесь..."
      />
      <div className="markdown-preview">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    </div>
  );
}