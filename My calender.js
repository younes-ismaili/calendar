
var currentSelectedMonth=new Date().getMonth();
var currentSelectedYear=new Date().getFullYear();
var currentSelectedDays=new Date().getDay();
init(currentSelectedYear,currentSelectedMonth,currentSelectedDays)
function init(year,monthNumber) {
	clear()
	document.getElementById('title').innerHTML =(currentSelectedDays+1)+'/'+(currentSelectedMonth+1)+'/'+currentSelectedYear
	let trs=document.getElementsByTagName('tr');
	let firstDay = new Date(year,monthNumber,1).getDay()
	let incDayNumber = 1
	for (let i = 1; i <= 6; i++) {

		let tr=trs[i];
		for (let j = 0; j < 7; j++) {
			if (i==1 && j==0) {

				j=firstDay;

			}
			if (incDayNumber<= numberOfDays(year,monthNumber+1)) {
				tr.children[j].innerText += incDayNumber++ 
			}else{
				break;
			}
		}
	}
}
function clear() {
	let trs=document.getElementsByTagName('tr');
	for (let i = 1; i <= 6; i++) {
	
		let tr=trs[i];
		for (let j = 0; j < 7; j++) {

			tr.children[j].innerText =''
		}
	}
}
function numberOfDays(year,monthNumber) {
	if(monthNumber==1|| monthNumber==3|| monthNumber==5||monthNumber==7||monthNumber==8|| monthNumber==10||monthNumber==12){
		return 31;
	}
else if(monthNumber==11|| monthNumber==4|| monthNumber==6||monthNumber==9){
	return 30;
}
else if( parseInt( monthNumber=2)){
	if(year%4==0){
		return 29;
	}else{
		return 28;
	}
}
}
function next() {
    currentSelectedYear = (currentSelectedMonth=== 11) ? currentSelectedYear + 1 : currentSelectedYear;
    currentSelectedMonth = (currentSelectedMonth + 1) % 12;
    init(currentSelectedMonth, currentSelectedYear);
}

function pre() {
    currentSelectedYear = (currentSelectedMonth === 0) ? currentSelectedYear- 1 : currentSelectedYear;
    currentSelectedMonth = (currentSelectedMonth === 0) ? 11 : currentSelectedMonth- 1;
    init(currentSelectedMonth, currentSelectedYear);
}
