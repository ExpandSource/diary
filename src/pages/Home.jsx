import React, { useContext, useEffect, useState } from 'react';
import Button from '../component/Button';
import Header from '../component/Header';
import DiaryList from '../component/DiaryList';
import Editor from '../component/Editor';
import { StateContext } from '../App';
import { getMonthRangeByDate } from '../util';

function Home() {
  const data = useContext(StateContext);
  const [pivotDate, setPivotDate] = useState(new Date());
  const [filteredData, setFilteredData] = useState([]);

  const headerTitle = `${pivotDate.getFullYear()}년 ${
    pivotDate.getMonth() + 1
  }월`;

  useEffect(() => {
    // 데이터가 있을 경우에만 해당 월에 해당하는 필터링을 수행
    if (data.length > 0) {
      const { beginTimeStamp, endTimeStamp } = getMonthRangeByDate(pivotDate);
      setFilteredData(
        data.filter(
          (item) => beginTimeStamp <= item.date && item.date <= endTimeStamp
        )
      );
    }
  }, [data, pivotDate]);

  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };
  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };
  return (
    <div>
      <Header
        title={headerTitle}
        left={<Button text={'<'} onClick={onDecreaseMonth} />}
        right={<Button text={'>'} onClick={onIncreaseMonth} />}
      />
      <DiaryList data={filteredData} />
      {/* <Editor /> */}
    </div>
  );
  /*
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
      <Button text={'부정'} type='negative' onClick={() => alert('싫어요')} />
      <Button text={'긍정'} type='positive' onClick={() => alert('좋아요')} />
      <Button text={'기본버튼'} onClick={() => alert('안녕하세요')} />
    </div>
  );
  */
}

export default Home;
