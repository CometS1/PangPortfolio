$(document).ready(function(){
    $('.footer').load('../footer.html');
})

$(document).ready(function(){
    $('.navbar-nav').append('<li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>');
    $('.navbar-nav').append('<li class="nav-item"><a class="nav-link" href="about.html">About</a></li>');
    $('.navbar-nav').append('<li class="nav-item"><a class="nav-link" href="skills.html">Skills</a></li>');
    $('.navbar-nav').append('<li class="nav-item"><a class="nav-link" href="projects.html">Projects</a></li>');
    $('.navbar-nav').append('<li class="nav-item"><a class="nav-link" href="education.html">Education</a></li>');
    $('.navbar-nav').append('<li class="nav-item"><a class="nav-link" href="experience.html">Experience</a></li>');
    $('.navbar-nav').append('<li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>');
})