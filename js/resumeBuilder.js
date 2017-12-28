var work = {
	"jobs": [ {
		"employer": "IOCL",
		"title": "Intern",
		"location": "Baroda",
		"dates": "1st June 2016 - 30th June 2016",
		"description": "Observational"
		},
		{
		"employer": "Colortex",
		"title": "Intern",
		"location": "Udhna",
		"dates": "1st May 2015 - 30th May 2015",
		"description": "Lab work"
		},

	],
	"display": function() {
		var job = work.jobs;
		
		$("#workExperience").append(HTMLworkStart);
		for(var i = 0; i < job.length; i++) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", job[i].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", job[i].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);
			var formattedDates = HTMLworkDates.replace("%data%", job[i].dates);
			$(".work-entry:last").append(formattedDates);
			var formattedLocation = HTMLworkLocation.replace("%data%", job[i].location);
			$(".work-entry:last").append(formattedLocation);
			var formattedDescription = HTMLworkDescription.replace("%data%", job[i].description);
			$(".work-entry:last").append(formattedDescription);
		}

	}
};
work.display();

var projects = { 
	"projects": [
		{
			"title": "Production of Nitric Acid",
			"dates": "1st January 2017 - 15th May 2017",
			"description": "Theoretical project on how to produce the acid",
			"images": ["images/fry.jpg", "images/fry.jpg"]
		},
		{
			"title": "Training report",
			"dates": "1st June 2016 - 30th June 2016",
			"description": "A study of everything learnt and observed in IOCL",
			"images": ["images/fry.jpg", "images/fry.jpg"]
		},
		{
			"title": "Airplane tickets",
			"dates": "1st April 2012 - 1st December 2012",
			"description": "A C++ program to book tickets on an airplane",
			"images": ["images/fry.jpg", "images/fry.jpg"]
		}

	],
	"display": function() {
		var project = projects.projects;
		$("#projects").append(HTMLprojectStart);
		for (var i = 0; i<project.length; i++) {
			var formattedTitle = HTMLprojectTitle.replace("%data%", project[i].title);
			$(".project-entry:last").append(formattedTitle);
			var formattedDates = HTMLprojectDates.replace("%data%", project[i].dates);
			$(".project-entry:last").append(formattedDates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", project[i].description);
			$(".project-entry:last").append(formattedDescription);
			for(var j = 0; j < project[i].images.length; j++) {
				var formattedImage = HTMLprojectImage.replace("%data%", project[i].images[j]);
					$(".project-entry:last").append(formattedImage);
			}
			
		}
	}
};
projects.display();

var bio = {
	"name": "Pankti Bhadresa",
	"role": "Engineer Trainee",
	"welcomeMessage": "wazzaaaa",
	"contacts": {
		"email": "mish******@hotmail.com",
		"mobile": "8980******",
		"github": "panktiB",
		"location": "Surat",
		"blog": "none",
		"twitter": "@mishthaa"
	},
	"skills": ["C++", "HTML", "CSS", "cooking"],
	"biopic": "images/fry.jpg",
	"display": function() {

		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedName);
		
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts").append(formattedEmail);
		$("#footerContacts").append(formattedEmail);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#topContacts").append(formattedMobile);
		$("#footerContacts").append(formattedMobile);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts").append(formattedGithub);
		$("#footerContacts").append(formattedGithub);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedLocation);
		$("#footerContacts").append(formattedLocation);
		var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
		$("#topContacts").append(formattedBlog);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		$("#topContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedTwitter);

		var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
		$("#header:last").append(formattedPic);
		var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header:last").append(formattedMessage);
		$("#header:last").append(HTMLskillsStart);
		for(var i = 0; i < bio.skills.length; i++) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkill);
		}
	}

};
bio.display();

var education = {
	"schools": [ {
		"name": "SVNIT",
		"location": "Surat",
		"degree": "Bachelors of Technology",
		"dates": "24th July 2013 - 15th May 2017",
		"url": "www.svnit.ac.in",
		"majors": ["Chemical"]
		},
		{
		"name": "ADIS",
		"location": "Abu Dhabi",
		"degree": "Higher Secondary Education",
		"dates": "2nd April 2011 - 31st March 2013",
		"url": "adis got no site bro",
		"majors": ["Computer Science"]
		},
		{
		"name": "ADIS",
		"location": "Abu Dhabi",
		"degree": "Secondary Education",
		"dates": "2nd April 2009 - 31st March 2011",
		"url": "adis got no site bro",
		"majors": ["none"]
		}
	],
	"onlineCourses": [
		{
			"title": "Front-End Web Developer",
			"school": "Udacity",
			"dates": "24th June 2017 - present",
			"url": "www.udacity.com"
		}
	],
	"display": function() {
		var school = education.schools;
		$("#education").append(HTMLschoolStart);
		for(var i = 0; i < school.length; i++) {
			var formattedName = HTMLschoolName.replace("%data%", school[i].name);
			$(".education-entry:last").append(formattedName);
			var formattedLocation = HTMLschoolLocation.replace("%data%", school[i].location);
			$(".education-entry:last").append(formattedLocation);
			var formattedDegree = HTMLschoolDegree.replace("%data%", school[i].degree);
			$(".education-entry:last").append(formattedDegree);
			var formattedDates = HTMLschoolDates.replace("%data%", school[i].dates);
			$(".education-entry:last").append(formattedDates);
			var formattedMajors = HTMLschoolMajor.replace("%data%", school[i].majors);
			$(".education-entry:last").append(formattedMajors);
		}
		var online = education.onlineCourses;
		$("#education").append(HTMLonlineClasses);
		for(var j = 0; j < online.length; j++) {
			var formattedTitle = HTMLonlineTitle.replace("%data%", online[j].title);
			$(".education-entry:last").append(formattedTitle);
			var formattedSchool = HTMLonlineSchool.replace("%data%", online[j].school);
			$(".education-entry:last").append(formattedSchool);
			var formattedDate = HTMLonlineDates.replace("%data%", online[j].dates);
			$(".education-entry:last").append(formattedDate);
			var formattedURL = HTMLonlineURL.replace("%data%", online[j].url);
			$(".education-entry:last").append(formattedURL);

		}
	}
};
education.display();


$(document).click(function(loc) {
  // your code goes here
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

$("#main").append(internationalizeButton);

function inName(name) {
	name = name.trim().split(' ');
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	var finalName = name.join(' ');
	return name[0] + " " + name[1];
}

$("#mapDiv").append(googleMap);
