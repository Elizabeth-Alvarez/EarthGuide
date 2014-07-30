// JavaScript Document

	months=new Array("January","February","March","April","May","June","July","August","September","October","November","December");
		function GetClock()
			{
				d = new Date();
				day = d.getDay();
				nmonth = d.getMonth();
				date = d.getDate();
				year = d.getYear();
				if(year<1000)year = year+1900;

				document.getElementById('clockbox').innerHTML="" + months[nmonth] + " " + date + ", "+ year + "";
				setTimeout("GetClock()", 1000); 
			}
		window.onload=GetClock;
