const dateOfBirth = document.querySelector("#input-container")
const palindromeButton = document.querySelector("#checkButton")
const inputElement = document.querySelector("#container")

function reverseDate(string){
    return string.split("").reverse().join("")
}

function checkPalindromeHandler(str){
    var splitString = reverseDate(str)
    return splitString === str
}

function toChangeDateIntoString(date){
       var dateDATA = {day:'',month:'',year:''}
       if(date.day < 10){
           dateDATA.day = '0' + date.day
       }else{
           dateDATA.day = date.day.toString()
       }if(date.month < 10){
           dateDATA.month = '0' + date.month
       }else{
           dateDATA.month = date.month.toString()
       }
       dateDATA.year = date.year.toString()
       return dateDATA
}  
    function toGetDateDataInAllFormat(date){
    var dateString = toChangeDateIntoString(date)
    var ddmmyyyy = dateString.day + dateString.month + dateString.year;
    var mmddyyyy = dateString.month + dateString.day + dateString.year; 
    var yyyymmdd = dateString.year + dateString.month + dateString.day; 
    var ddmmyy  = dateString.day + dateString.month + dateString.year.slice(-2); 
    var mmddyy  = dateString.month + dateString.day + dateString.year.slice(-2); 
    var yymmdd  = dateString.year.slice(-2) + dateString.month + dateString.day;
    return [ddmmyyyy,mmddyyyy,yyyymmdd,ddmmyy,mmddyy,yymmdd]  
}


function toCheckPalindromeInAllFormats(date){
    var listOfDateFormats = toGetDateDataInAllFormat(date)
    var flag = false ;
    for(var i=0;i < listOfDateFormats.length;i++){
        if(checkPalindromeHandler(listOfDateFormats[i])){
            flag = true ;
            break
        }
    }
    return flag
}

function isLeapYear(year){
    if(year % 400 === 0){
        return true
    }if ( year % 100 === 0){
        return false 
    }if (year % 4 === 0){
        return true
    }
    return false
}

function toFindNextDate(date){
    var day = date.day + 1 ;
    var month = date.month ;
    var year = date.year ;
    var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
    if (month === 2){
        if (isLeapYear(year)){
            if(day > 29){
                day = 1
                month++;
            }
        }else {
            if(day > 28){
                day = 1
                month++;
            }
        }
    }else{
        if(day > daysInMonth[month -1]){
           day = 1;
           month++;   
        }
    }if(month >12 ){
        month = 1 
        year++ ;
    }
    return{
        day: day,
        month: month,
        year: year,
    }
}

function toGetNextDate(date){
    var nextDate = toFindNextDate(date);
    var ctr = 0 ; 
    while(1){
        ctr++;
        var isPalindrome = toCheckPalindromeInAllFormats(nextDate)
        if(isPalindrome){
            break;
        }
        nextDate = toFindNextDate(nextDate)
    }
    return [ctr, nextDate]
}
date = {
    day :12,
    month:2,
    year: 2020,
}

function toFindPreviousDate(date){
    var day = date.day  - 1;
    var month = date.month ;
    var year = date.year ;
    var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31]
    if(day === 0){
       month--;
    }
    if(month === 0){
        month = 12;
        day = 31;
        year--;
    }if (month === 2){
        if(isLeapYear(year)){
            day=29
        }else{
            day = 28
        }
    }else {
        day = daysInMonth[month - 1];
    }
    return {
        day : day ,
        month : month,
        year: year,
    }
}

function toGetPreviuosDate(date){
    var previousDate = toFindPreviousDate(date);
    var ctr = 0 ;
    while(1){
        ctr++ ;
        var isPalindrome =  toCheckPalindromeInAllFormats(previousDate);
        if(isPalindrome){
            break ;
        }
    previousDate = toFindPreviousDate(previousDate);
    }
    return [ ctr , previousDate]
}
console.log(toGetPreviuosDate(date))