const mon="mon";
const tue="tue";
const wed="wed";
const thu="thu";
const sat="sat";
const sun="sun";

const dayOfWeek = [mon, tue, wed, thu, sat];

const nonsense = [1, 2, "hello", false, null, true, undefined, ""];
console.log(dayOfWeek);
console.log(nonsense);
console.log(nonsense[2])

dayOfWeek.push("sunday")
console.log(dayOfWeek)


//브라우저의 콘솔 창에서 결과를 확인할 수 있음