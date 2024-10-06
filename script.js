const inputdate = document.getElementById("input-date")
const inputmonth = document.getElementById("input-month")
const inputyear = document.getElementById("input-year")
const resultyear = document.getElementById("result-year")
const resultmonth = document.getElementById("result-month")
const resultday = document.getElementById("result-date")
const button = document.getElementById("button")
const one = document.getElementsByClassName("input-field")
const All = document.getElementsByClassName("redbox")
const All1 = document.getElementsByClassName("input-text")
const All3 = document.getElementsByClassName("input-title")


const Data = new Date();
const y = Data.getFullYear();
const m = Data.getMonth() + 1;
const d = Data.getDate();

function datetoobj(dd, mm, yyyy){
    result = [dd, mm, yyyy];
    return result;
}
function calculateAge(dob, tod) {
    const [dobDay, dobMonth, dobYear] = dob.map(Number);
    const [todDay, todMonth, todYear] = tod.map(Number);

    let ageYears = todYear - dobYear;
    let ageMonths = todMonth - dobMonth;
    let ageDays = todDay - dobDay;

    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
        ageYears--;
        ageMonths += 12;
    }

    if (ageDays < 0) {
        const tempDate = new Date(todYear, todMonth - 1, 0);
        ageDays += tempDate.getDate();
        ageMonths--;
    }

    return [ageYears, ageMonths, ageDays];
}
function change_color(element,pro,value){
    for(let i = 0; i < element.length; i++){
        element[i].style.pro = value
    }
}
function errormessage(dd, mm, yy){
    var num = 0;
    if(dd >= 0 || dd < 0){
        if(dd > 31 || dd <= 0){
            one[0].style.color = "red";
            All1[0].style.border = "solid 1px red";
            All[0].style.back = "block";
            num = 0
        }
        else{
            one[0].style.color = "hsl(0, 1%, 44%)";
            All1[0].style.border = "solid 1px hsl(0, 0%, 86%)";
            All[0].style.display = "none";
            num = 1
        }
    }    
    if(mm >= 0 || mm < 0){
        if(mm > 12 || mm <= 0){
            one[1].style.color = "red";
            All1[1].style.border = "solid 1px red";
            All[1].style.display = "block";
            num = 0
        }
        else{
            one[1].style.color = "hsl(0, 1%, 44%)";
            All1[1].style.border = "solid 1px hsl(0, 0%, 86%)";
            All[1].style.display = "none";
            num = 1
        }
    }
    if(yy >= 0 || yy < 0){
        if(yy > 2024 || yy <= 0){
            one[2].style.color = "red";
            All1[2].style.border = "solid 1px red";
            All[2].style.display = "block";
            num = 0
        }
        else{
            one[2].style.color = "hsl(0, 1%, 44%)";
            All1[2].style.border = "solid 1px hsl(0, 0%, 86%)";
            All[2].style.display = "none";
            num = 1
        }
    return num;
    }
}
function onButtonClick(){
    const Day = inputdate.value;
    const Month = inputmonth.value;
    const Year = inputyear.value;
    if (errormessage(Day, Month, Year) === 1){
        const enddate = datetoobj(d, m, y);
        const startdate = datetoobj(Day, Month, Year);
        const age = calculateAge(startdate, enddate);  
        resultday.innerHTML = age[2];
        resultmonth.innerHTML = age[1];
        resultyear.innerHTML = age[0];
    }
}


button.addEventListener("click", onButtonClick);


