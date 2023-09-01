import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Button from '../component/Button';
import Header from '../component/Header';
import Editor from '../component/Editor';

function Home() {
  // 쿼리 스트링 가져오기 {path}?key=value
  const [URLSearchParams, SetURLSearchParams] = useSearchParams();
  console.log(URLSearchParams.get('sort'));
  return (
    <div>
      <Header
        title='제목'
        left={<Button text='<' />}
        right={<Button text='>' />}
      />
      <Editor
        initData={{
          date: new Date().getTime(),
          emotionId: 1,
          content: '이전 일기',
        }}
      />
      Home
      {/* 
      <Button text={'부정'} type='negative' onClick={() => alert('싫어요')} />
      <Button text={'긍정'} type='positive' onClick={() => alert('좋아요')} />
      <Button text={'기본버튼'} onClick={() => alert('안녕하세요')} />
       */}
    </div>
  );
}

export default Home;
