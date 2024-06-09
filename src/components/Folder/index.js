import { useState, memo } from 'react';

export const Folder = memo(({ 
    name,
    initialExpanded = false,
    children,
}) => {
  const [collapsed, setCollapsed] = useState(initialExpanded);

  const toggleCollapse = () => {
    setCollapsed(prevCollapsed => !prevCollapsed);
  };

  return (
    <div className='folder'>
      <h4 className='folder__title' onClick={toggleCollapse}>
        <span>{name}</span>
        <span>{!collapsed ? '+' : '-'}</span>
      </h4>
      <div className='folder__content'>
        {collapsed && children}
      </div>
    </div>
  );
});

Folder.displayName = 'Folder';
