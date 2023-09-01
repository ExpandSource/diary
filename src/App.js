import React, { useReducer, useRef } from 'react';
import './App.css';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import Home from './pages/Home';
import New from './pages/New';
import { getEmotionImgById } from './util';
import { Routes, Route, Link } from 'react-router-dom';

const mockData = [
  {
    id: 1,
    date: new Date().getTime(),
    emotionId: 1,
    content: '안녕하세요 일기',
  },
  {
    id: 2,
    date: new Date().getTime(),
    emotionId: 2,
    content: '안녕하세요 일기 mock data2',
  },
  {
    id: 3,
    date: new Date().getTime(),
    emotionId: 3,
    content: '안녕하세요 일기 mock3',
  },
];

function reducer(state, action) {}

export const StateContext = React.createContext();
export const DispatchContext = React.createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(4);

  return (
    <StateContext.Provider value={data}>
      <DispatchContext.Provider value={{}}>
        <div className='App'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/new' element={<New />} />
            <Route path='/diary/:id' element={<Diary />} />
            <Route path='/edit/:id' element={<Edit />} />
          </Routes>
        </div>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
