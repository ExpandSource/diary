import React, { useContext, useEffect, useState } from 'react';
import './DiaryList.css';
import Button from './Button';
import DiaryItem from './DiaryItem';
import { StateContext } from '../App';
import { useNavigate } from 'react-router-dom';

// 정렬을 위한 옵션 리스트
// (컴포넌트 외부에 작성 : 다시 생성할 필요가 없기 때문)
const sortOptionList = [
  { value: 'latest', name: '최신순' },
  { value: 'oldest', name: '오래된 순' },
];

function DiaryList({ data }) {
  // select 태그 정렬타입 => 상태값
  const [sortType, setSortType] = useState('latest');
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    const compare = (a, b) => {
      if (sortType === 'latest') {
        return Number(b.date) - Number(a.date);
      } else {
        return Number(a.date) - Number(b.date);
      }
    };
    // 정렬
    const sortedList = data.slice().sort(compare);
    // 정렬된 데이터를 설정
    setSortedData(sortedList);
  }, [data, sortType]);

  const handleOnChange = (event) => {
    setSortType(event.target.value);
  };

  const naviagate = useNavigate();
  const goNew = () => {
    naviagate('/new');
  };
  return (
    <div className='DiaryList'>
      {/* 상단부 : 정렬 및 새 일기쓰기*/}
      <div className='menu_wrapper'>
        <div className='left'>
          <select value={sortType} onChange={handleOnChange}>
            {sortOptionList.map((item, idx) => (
              <option key={idx} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className='right'>
          <Button text='새 일기 쓰기' type={'positive'} onClick={goNew} />
        </div>
      </div>
      {/* 하단부 : 일기 목록*/}
      <div>
        {sortedData.map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default DiaryList;
