import emotion1 from './img/emotion1.png';
import emotion2 from './img/emotion2.png';
import emotion3 from './img/emotion3.png';
import emotion4 from './img/emotion4.png';
import emotion5 from './img/emotion5.png';

export const getMonthRangeByDate = (date) => {
  const beginTimeStamp = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getTime();
  const endTimeStamp = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    1 - 1,
    23,
    59,
    59,
    999
  ).getTime();
  return { beginTimeStamp, endTimeStamp };
};

export const getFormatDate = (dateObj) => {
  // 날짜를 '0000-00-00'으로 포맷해주는 함수
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const date = String(dateObj.getDate()).padStart(2, '0');

  /*
  if (month < 10) {
    month = `0${month}`
  }
  */

  return `${year}-${month}-${date}`;
};

export const getEmotionImgById = (id) => {
  const targetId = String(id);
  switch (targetId) {
    case '1':
      return emotion1;
    case '2':
      return emotion2;
    case '3':
      return emotion3;
    case '4':
      return emotion4;
    case '5':
      return emotion5;
    default:
      return null;
  }
};

// emotionList에서 getEmotionImgById 함수가 사용되기 때문에 순서를 하단에 위치시켜야 한다. (함수를 선언형으로 만들지 않아 호이스팅이 일어나지 않기 때문)
export const emotionList = [
  { id: 1, name: '베리굿', img: getEmotionImgById(1) },
  { id: 2, name: '좋아요', img: getEmotionImgById(2) },
  { id: 3, name: '쏘쏘', img: getEmotionImgById(3) },
  { id: 4, name: '나빠요', img: getEmotionImgById(4) },
  { id: 5, name: '끔찍해요', img: getEmotionImgById(5) },
];
