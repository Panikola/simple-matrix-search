function findWord(text, data) {
  // ваше решение пишите здесь
  let newData = [];
  let textReverse = [...text].reverse().join('');
  let check = row => row.includes(text) ? true : row.includes(textReverse);
  let result = data.some(row => check(row) ? true : !newData.push([...row]));
  if(!result) {
    result = newData[0].some((rowEl, i) => {
      let columnString = '';
      let rowI = 0;
      while (rowI < newData.length) {
        columnString += newData[rowI][i];
        rowI ++
      }
      return check(columnString)
    })
  }

  return result && text
}
