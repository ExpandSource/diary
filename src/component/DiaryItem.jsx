import React from 'react';
import './DiaryItem.css';
import { getEmotionImgById } from '../util';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

function DiaryItem({ id, emotionId, content, date }) {
  /* useNavigate 커스텀 훅 위치를 이동키는 함수를 반환. navigate 함수
  -1 : 뒤로가기
  기타문자열 : 해당 path로 이동
  */
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/diary/${id}`);
  };
  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className='DiaryItem'>
      <section
        onClick={goDetail}
        className={['image_section', `image_section_${emotionId}`].join(' ')}
      >
        <img src={getEmotionImgById(emotionId)} alt={id} />
      </section>
      <section onClick={goDetail} className='info_section'>
        <div className='date_wrapper'>
          {new Date(date).toLocaleDateString()}
        </div>
        <div className='content_wrapper'>{content}</div>
      </section>
      <section className='button_section'>
        <Button text='수정하기' onClick={goEdit} />
      </section>
    </div>
  );
}

export default DiaryItem;
