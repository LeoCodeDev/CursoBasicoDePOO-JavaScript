const leopoldo = {
  name: "Leopoldo",
  age: 20,
  approvedCourses: [
    "basico javascript",
    "computacion basica",
    "ecmascript 6",
    "frontend developer",
    "frontend developer practico",
    "git y github",
    "JS closure y scoope",
    "JS Practico",
    "Nuevo JS Practico",
    "JS Practico Matematicas",
    "Pensamiento Logico",
    "Pensamiento Logico 2",
    "Pensamiento Logico estructuras",
    "Pensamiento Logico lenguajes",
    "Postman",
    "Programacion Basica",
    "Terminal CLI",
    "Programacion Basica Nuevo",
    "Programacion Ortientada a Objetos",
  ],

  activeCourses: [
    "Curso Basico de Programacion Orientada a Objetos con JavaScript",
    "Nuevo Curso Basico de Seguridad Informatica para Empresas",
    "Nuevo curso de EcmaScript",
  ],

  aprovingCourse(course) {
    indexOf = this.activeCourses.findIndex((element) => element === course);
    if (indexOf >= 0) {
      console.log(indexOf);
      this.approvedCourses.push(this.activeCourses[indexOf]);
      this.activeCourses.pop(indexOf);
    } else {
      console.log("Ese curso no esta en la lista");
    }
  },
};

function Student(name, age, approvedCourses, activeCourses) {
  this.name = name
  this.age = age
  this.approvedCourses = approvedCourses
  this.activeCourses = activeCourses

  /* this.aprovingCourse = function (course){
        indexOf = this.activeCourses.findIndex((element) => element === course)
        if (indexOf >= 0) {
            console.log(indexOf)
            this.approvedCourses.push(this.activeCourses[indexOf])
            this.activeCourses.pop(indexOf)
        }else{
            console.log('Ese curso no esta en la lista')
        }
    } */
}

Student.prototype.aprovingCourse = function (course) {
  indexOf = this.activeCourses.findIndex((element) => element === course);
  if (indexOf >= 0) {
    console.log(indexOf);
    this.approvedCourses.push(this.activeCourses[indexOf]);
    this.activeCourses.pop(indexOf);
  } else {
    console.log("Ese curso no esta en la lista");
  }
};

const vericar = new Student(
    "Vericar",
    29,
    [
        "Excel Basico, Ingles Basico",
        "Presente Perfecto",
        "Taller de Ingles",
        "Pasado Simple"
    ],
    [
        "Curso de ingles A2",
        "Excel intermedio",
        "Marketing Digital"
    ]
);

class Student2 {
    constructor ({
        name = "", 
        age, 
        approvedCourses = [], 
        activeCourses = []
    }) {
    this.name = name
    this.age = age
    this.approvedCourses = approvedCourses
    this.activeCourses = activeCourses
    }

    aprovingCourse(course) {
        indexOf = this.activeCourses.findIndex((element) => element === course);
        if (indexOf >= 0) {
          console.log(indexOf);
          this.approvedCourses.push(this.activeCourses[indexOf]);
          this.activeCourses.pop(indexOf);
        } else {
          console.log("Ese curso no esta en la lista");
        }
      }

}

const samantha = new Student2({
    age: 7,
    name: "Samantha"
})
