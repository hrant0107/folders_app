import React, { useState } from 'react';
import { File } from './File';
import { Folder } from './Folder';
import { isFolderIncludesSearch } from '../helpers/isFolderIncludesSearch';

const App = ({ data, expandedFolders: initialExpandedFolders = [] }) => {
  const [expandedFolders, setExpandedFolders] = useState(initialExpandedFolders);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const renderNode = (node, path = '') => {
    const fullPath = `${path}/${node.name}`;
    const isExpanded = expandedFolders.includes(fullPath);
    const isNodeIncludesSearchTerm = isFolderIncludesSearch(node, searchTerm);

    if (node.type === 'FOLDER' && (fullPath.toLowerCase().includes(searchTerm.toLowerCase()) || isNodeIncludesSearchTerm)) {
      return (
        <Folder key={fullPath} name={node.name} initialExpanded={isExpanded}>
          {node.children && node.children.map(child => renderNode(child, fullPath))}
        </Folder>
      );
    } else if (node.type === 'FILE' && fullPath.toLowerCase().includes(searchTerm.toLowerCase())) {
      return <File key={node.name} name={node.name} mime={node.mime} />;
    }
  };

  return (
    <div className='app'>
      <div className='search'>
        <input
          className='search__input'
          type="text"
          onChange={handleSearch}
          placeholder="Search..."
        />
      </div>
      <div className='app__folders'>
        {data.map(node => renderNode(node))}
      </div>
    </div>
  );
};

export default App;
