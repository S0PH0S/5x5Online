function showNotification(title, message, buttons, hasTable) {
	//Declare element variables
	backgroundOverlay = document.getElementById('notificationHolder');
	notification = document.getElementById('notification');
	nTitle = document.getElementById('notification--title');
	nTable = document.getElementById('notification--table');
	nMessage = document.getElementById('notification--message');
	nButtonHolder = document.getElementById('notification--buttonHolder');
	//Set notification text
	nTitle.innerHTML = title;
	nMessage.innerHTML = message;
	populateButtons(nButtonHolder, buttons);
	if (hasTable) {
		loadHandler(nTable);
	}
	//Set notification to be visible
	backgroundOverlay.classList.remove("noDisplay");
	notification.classList.remove('noDisplay');
	nTitle.classList.remove('noDisplay');
	//nTable.classList.remove('noDisplay');
	nMessage.classList.remove('noDisplay');
	nButtonHolder.classList.remove('noDisplay');
}
function hideNotification() {
	//Declare element variables
	backgroundOverlay = document.getElementById('notificationHolder');
	notification = document.getElementById('notification');
	nTitle = document.getElementById('notification--title');
	//nTable = document.getElementById('notification--table');
	nMessage = document.getElementById('notification--message');
	nButtonHolder = document.getElementById('notification--buttonHolder');
	//Set ALL the elements to be hidden
	backgroundOverlay.classList.add("noDisplay");
	notification.classList.add('noDisplay');
	nTitle.classList.add('noDisplay');
	//nTable.classList.add('noDisplay');
	nMessage.classList.add('noDisplay');
	nButtonHolder.classList.add('noDisplay');
	//Get rid of all of the buttons
	nButtonHolder.innerHTML = '';
}
function loadHandler(tableVar) {
	
}
function populateButtons(containerVar, buttons) {
	//Initialize classToAdd
	var classToAdd = null
	//Set it based on how many buttons there are
	switch(buttons.length) {
		case 1:
			classToAdd = "oneButton";
			break;
		case 2:
			classToAdd = "twoButton";
			break;
		case 3:
			classToAdd = "threeButton";
			break;
		default:
			classToAdd = "threeButton";
			break;
	}
	//For each button in the buttons array,
	for (button in buttons) {
		//Make it,
		link = document.createElement('a');
		//Insert it into the DOM,
		temp = containerVar.appendChild(link);
		//Set it's text,
		temp.innerHTML = buttons[button].text;
		//Make it look pretty,
		temp.classList.add('notification--button');
		//Make it do stuff,
		temp.setAttribute("onclick", buttons[button].action);
		//Make it align correctly in the buttons div,
		temp.classList.add(classToAdd);
		//And make it red if it can cause harm.
		if (buttons[button].isHarmful) {
			temp.classList.add("harmfulButton");
		}
	}
}
function submitButton() {
	//Makes a notification that does nothing and says stuff.
	showNotification('Sent',
		'The 5x5 has been sent successfully.',
		[{action:'hideNotification()', text:'OK'}],
		false);
}
function setTimeField() {
	//Make a date
	var d = new Date();
	//Make a string with the current time and date
	var timestring = (d.getMonth()+1) + "/"
		+ d.getDate() + "/"
		+ d.getFullYear() + " "
		+ d.getHours() + ":";
	if (d.getMinutes() < 10) {
		timestring = timestring + "0" + d.getMinutes();
	} else {
		timestring = timestring + d.getMinutes();
	};
	//Get the date field
	var timeField = document.getElementById("time");
	//Set the value of the date field to timestring
	timeField.value = timestring;
	//Debugging
	console.log("Logging the current time as " + timestring);
}
function getPeriod() {
	//Get the time now
	var now = new Date();
	//Get a time for midnight this morning
	var midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
	//Get the difference between those two times
	var diff = now - midnight
	//Figure out what period that is
	if (diff < 27600000) { //before pd 1
		return -1;
	} else if (diff <= 30600000) { //pd 1
		return 1;
	} else if (diff <= 33300000) { //pd 2
		return 2;
	} else if (diff <= 36000000) { //pd 3
		return 3;
	} else if (diff <= 38700000) { //pd 4
		return 4;
	} else if (diff <= 41400000) { //pd 5
		return 5;
	} else if (diff <= 44100000) { //pd 6
		return 6;
	} else if (diff <= 46800000) { //pd 7
		return 7;
	} else if (diff <= 49500000) { //pd 8
		return 8;
	} else if (diff <= 52200000) { //pd 9
		return 9;
	} else if (diff > 52200000) { //after pd 9
		return -1;
	} else { //not a number
		return -1;
	}
}/*
function getPeriodDebug(testDate) {
	//Get the time for the test date
	var now = testDate;
	//Get a time for midnight this morning
	var midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
	//Get the difference between those two times
	var diff = now - midnight
	//Figure out what period that is
	if (diff < 27600000) { //before pd 1
		return -1;
	} else if (diff <= 30600000) { //pd 1
		return 1;
	} else if (diff <= 33300000) { //pd 2
		return 2;
	} else if (diff <= 36000000) { //pd 3
		return 3;
	} else if (diff <= 38700000) { //pd 4
		return 4;
	} else if (diff <= 41400000) { //pd 5
		return 5;
	} else if (diff <= 44100000) { //pd 6
		return 6;
	} else if (diff <= 46800000) { //pd 7
		return 7;
	} else if (diff <= 49500000) { //pd 8
		return 8;
	} else if (diff <= 52200000) { //pd 9
		return 9;
	} else if (diff > 52200000) { //after pd 9
		return -1;
	} else { //not a number
		return -1;
	}
}*/
window.onload = function() {
	//Set the time field when the page loads.
	setTimeField();
}