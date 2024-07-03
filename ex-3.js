// เริ่มเขียนโค้ดตรงนี้ 
function multiplicationTable(n) {
    let finalResult = "";
    for (let i = 1; i < n +1; i++) {
      let result = " ";
      for (let j = 1; j < n +1; j++) {
        result += (i * j) + "\t"; 
      }
      finalResult += result + "\n"; 
    }
    return finalResult;
}
console.log(multiplicationTable(5));