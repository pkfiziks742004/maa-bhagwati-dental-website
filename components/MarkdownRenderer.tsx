import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  // Ultra-simple markdown parser for our specific blog needs
  const renderLine = (line: string, index: number) => {
    // Headers
    if (line.startsWith('### ')) {
      return <h3 key={index} className="text-2xl font-bold text-text mt-8 mb-4">{line.replace('### ', '')}</h3>;
    }
    if (line.startsWith('## ')) {
      return <h2 key={index} className="text-3xl font-bold text-text mt-10 mb-6">{line.replace('## ', '')}</h2>;
    }
    // Lists
    if (line.startsWith('- ') || line.match(/^\d+\.\s/)) {
      const isOrdered = line.match(/^\d+\.\s/);
      const text = line.replace(/^-\s/, '').replace(/^\d+\.\s/, '');
      
      // Parse inline bold
      const parts = text.split(/(\*\*.*?\*\*)/g);
      const formattedText = parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i} className="font-bold text-text">{part.slice(2, -2)}</strong>;
        }
        return part;
      });

      return (
        <li key={index} className="ml-6 mb-2 list-outside flex items-start">
           <span className="text-primary mr-2 font-bold">{isOrdered ? '•' : '•'}</span>
           <span>{formattedText}</span>
        </li>
      );
    }
    // Empty line
    if (line.trim() === '') {
      return <div key={index} className="h-4" />;
    }
    
    // Paragraph
    return <p key={index} className="text-text/80 text-lg leading-relaxed mb-4">{line}</p>;
  };

  const lines = content.split('\n');
  
  return (
    <div className="markdown-content">
      {lines.map((line, index) => renderLine(line, index))}
    </div>
  );
};
