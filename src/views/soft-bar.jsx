    //урок 7-8
import React from 'react';

const SortBar = ({ sort, setSort }) => (
  <select 
    value={sort} 
    onChange={e => setSort(e.target.value)} 
    aria-label="Сортировка задач"
    style={{ padding: 4 }}
  >
    <option value="newest">Сначала новые</option>
    <option value="oldest">Сначала старые</option>
  </select>
);

export default SortBar;
