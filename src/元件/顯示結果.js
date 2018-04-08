import React from 'react';
import 顯示一句羅馬 from './顯示一句羅馬';

const 顯示結果 = ({多元書寫}) => {
  return (
  <div>
  {
    多元書寫.map((一句結果, key) => {
      return (
        <ul key={key}>
          <顯示一句羅馬 類型="臺羅" 羅馬={一句結果.臺羅}/>
          <顯示一句羅馬 類型="臺羅數字調" 羅馬={一句結果.臺羅數字調}/>
          <顯示一句羅馬 類型="通用數字調" 羅馬={一句結果.通用數字調}/>
        </ul>
      );
    })
  }
  </div>
  );
}
export default 顯示結果;
