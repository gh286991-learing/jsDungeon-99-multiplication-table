[Demo](https://gh286991-learing.github.io/jsDungeon-99-multiplication-table/)

------



# [Js地下城] 1F - 9x9 乘法表

![image-20190921145100464](https://i.imgur.com/0FI9kw1.png)

此為[六角學院 JavaScript 題目篇-新手JS地下城](https://www.udemy.com/course/js-underground/learn/lecture/13346416#overview) 練習題，這部分挑戰都會都用react來實作。基本上這個題目的JS程式碼非常簡單，雙迴圈不用五分鐘就搞定，但是倒是把版面用CSS刻出來花了我很多時間，CSS非常不熟悉。

[GitHub](https://github.com/gh286991-learing/jsDungeon-99-multiplication-table)

[Demo](https://gh286991-learing.github.io/jsDungeon-99-multiplication-table/)

[SanBox](https://codesandbox.io/s/github/gh286991-learing/jsDungeon-99-multiplication-table)

## CSS排版

在這邊遇到最大的問題幾乎都是CSS的問題，第一個就是要怎麼把方塊並排顯示多的換行，再來就是要怎麼把 2x1 =2 , 2x2=4 .....2x9=18的文字並排顯示。這部分還是參考同學的才知道怎麼寫。

**方塊並排顯示**

主要是用 `display: flex`  , `flex-wrap: wrap`來達成。

![](https://i.imgur.com/FhLOyg5.jpg)

[codePen](https://codepen.io/TomJhuang/pen/bGbOdLB)

## 垂直並排換行

主要也是透過 `display:flex`來達成目的，這裡除了wrap以外，多了`flex-direction: column`來把排列從橫的變直的。 

![verital list](https://i.imgur.com/BzDX0o3.jpg)

[codePen](https://codepen.io/TomJhuang/pen/KKPbpry)

## Js 部分

什麼？你問我js部分怎麼寫？好吧，其實就是雙迴圈跑一次就可以了..。比較不同的是react 資料處理的部份都盡量在container中完成後再把資料傳到compoent去繪製畫面。

```js
  mulitiplication = () => {
    const n = 9;
    const m = 9;
    const table = [];
    for (let i = 2; i <= n; i += 1) {
      table.push([i]);
      for (let j = 1; j <= m; j += 1) {
        table[i - 2].push(`${i} x ${j} = ${i * j}`);
      }
    }

    return table;
  }
```



----

遇到的css排版問題筆記如上，除了這些問題，還稍微研究了一下如何把react app放到github page上面，比想像中的簡單。這個部分下次再特別開一篇展開討論。

