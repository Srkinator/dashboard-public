var homeButton = document.getElementsByClassName("home")[0];
var data = JSON.parse(localStorage.getItem("candidateID"));
var reportsContainer =$(".reports")[0];
var infoContainer =$(".candidate-info")[0];

homeButton.addEventListener("click", function() {
    location.assign("index.html");
});

(loadInfo =() =>{
    console.log(infoContainer);
    var imgDiv = $("<div>");
    var infoDiv1 = $("<div>");
    var infoDiv2 = $("<div>");
    var image = $("<img>");
    var nameData = $("<h4>");
    var emailData = $("<h4>");
    var dateOfBirthData = $("<h4>");
    var educationData = $("<h4>");
    var name = $("<p>");
    var email = $("<p>");
    var dateOfBirth = $("<p>");
    var education = $("<p>");
    
    $(image).attr({
        "src": data.avatar,
        "class" : "candidate-image",
        "style": "width: 80%"
    });

    $(imgDiv).attr({
        "class": "col-lg-4"
    });

    $(infoDiv1).attr({
        "class": "col-lg-4"
    });

    $(infoDiv2).attr({
        "class": "col-lg-4"
    });

    $(name).text("Name:");    
    $(email).text("Email:");    
    $(dateOfBirth).text("Date of birth: :");    
    $(education).text("Education:");    

    $(nameData).text(data.name);
    $(emailData).text(data.email);
    $(dateOfBirthData).text(data.birthday);
    $(educationData).text(data.education);
    
    $(infoDiv1).append($(name));
    $(infoDiv1).append($(nameData));
    $(infoDiv1).append($(email));
    $(infoDiv1).append($(emailData));
    
    $(infoDiv2).append($(dateOfBirth));
    $(infoDiv2).append($(dateOfBirthData));
    $(infoDiv2).append($(education));
    $(infoDiv2).append($(educationData));

    
    $(imgDiv).append(image[0]);
    $(infoContainer).append(imgDiv);
    $(infoContainer).append(infoDiv1);
    $(infoContainer).append(infoDiv2);

})();

(loadReports =() =>{

})()