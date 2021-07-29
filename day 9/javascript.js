var request=new xmlhttpsrequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.sent();
request.onload=function(){
	var data=JSON.prase(this.response);
}
var tdata=data.filter((ele)=>ele.region==='asia');
console.log(tdata);

var data1=data.filter((ele)=>ele.population<200000);
console.log(data1);
var data2=data.filter((ele)=>{
	for(let i in ele.currencies){
		if (ele.currencies[i].code==='USD'){
			return true;
		}
	}
	console.log(data2);
});

var data3=data.forEach((ele)=>ele.name+"" +.ele.capital+""+ele.flag);
console.log(data3);
