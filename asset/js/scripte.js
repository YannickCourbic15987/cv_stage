



const subtitleAnim = document.querySelector('.subtitle');

new Typewriter(subtitleAnim , {
    loop:true,
    deleteSpeed:20
})

.typeString('Je suis Développeur Web et Web mobile <br>')
.pauseFor(300)
.typeString('<strong>Développeur Back-End </strong> ')
.pause(1000)
.deleteChars(22)
.pauseFor(300)
.typeString('je suis un stagiaire')
.deleteChars(20)
.pauseFor(300)
.typeString(' à l\'AFCI de villeneuve d\'Asq <br>')
.deleteChars(31)
.typeString('<strong> <br> Je suis à la recherche d\'un stage </strong>')
.deleteChars(34)
.pauseFor(1000)
.typeString('<span style="color : #27ae60"> CSS</span> <br>')
.deleteChars(6)
.pauseFor(1000)
.typeString('<span style="color : midnightblue"> HTML </span> ')
.deleteChars(7)
.pauseFor(1000)
.typeString('<span style="color : #ea39ff"> PHP </span> ')
.deleteChars(5)
.pauseFor(1000)
.typeString('<span style="color : blueviolet"> Symfony 6 </span> ')
.deleteChars(11)
.pauseFor(1000)
.typeString('<span style="color : #ff6910"> JavaScript </span> ')
.deleteChars(12)
.start();


