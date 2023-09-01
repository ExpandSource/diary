import React, { useEffect, useState } from 'react';
import './Editor.css';
import Button from './Button';
import { getFormatDate, emotionList } from '../util';
import { useNavigate } from 'react-router-dom';
import EmotionItem from './EmotionItem';

function Editor({ initData }) {
  const navigate = useNavigate();
  const [date, setDate] = useState(getFormatDate(new Date()));
  const [emotionId, setEmotionId] = useState(3);
  const [content, setContent] = useState('');

  // initData가 업데이트 될때마다 실행
  useEffect(() => {
    if (initData) {
      setDate(getFormatDate(new Date(initData.date)));
      setEmotionId(initData.emotionId);
      setContent(initData.content);
    }
  }, [initData]);

  const handleChangeEmotion = (emotionId) => {
    setEmotionId(emotionId);
  };

  const handleBack = () => {
    // 뒤로 가기
    navigate(-1);
  };

  const handleOnChange = (event) => {
    setDate(event.target.value);
  };

  const handleOnChangeContent = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = () => {
    alert('제출했습니다.');
  };

  return (
    <div className='Editor'>
      {/* 오늘 언제? */}
      <section>
        <h3>오늘은 언제?</h3>
        <input type='date' value={date} onChange={handleOnChange} />
      </section>

      {/* 오늘 감정 */}
      <section className='emotion'>
        <h3>오늘의 감정은?</h3>
        <div className='emotion_wrapper'>
          {emotionList.map((item) => (
            <EmotionItem
              key={item.id}
              {...item}
              onClick={handleChangeEmotion}
              isSelected={emotionId === item.id}
            />
          ))}
        </div>
      </section>

      {/* 오늘 일기 */}
      <section>
        <h3>오늘의 일기</h3>
        <textarea
          placeholder='오늘 하루는 어땠나요?'
          value={content}
          onChange={handleOnChangeContent}
        ></textarea>
      </section>

      {/* 작성완료 */}
      <section className='bottom'>
        <Button text={'취소하기'} onClick={handleBack} />
        <Button text={'작성완료'} type='positive' onClick={handleSubmit} />
      </section>
    </div>
  );
}

export default Editor;
