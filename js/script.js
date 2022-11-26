class Comentarios {
    constructor({
        id,
        autor,
        contenido,
        userRole = 'student', 
        respuestas = []
    }){
        this._id         = id,
        this._autor      = autor,
        this._contenido  = contenido,
        this.userRole    = userRole 
        this._likes      = 0,
        this._respuestas = respuestas 
    }

    //Getters

    get id(){
        return this._id
    }
    get autor(){
        return this._autor
    }
    get contenido(){
        return this._contenido
    }
    get likes(){
        return this._likes
    }
    get respuestas(){
        return this._respuestas
    }

    //setters

    set id(param){
        if(param === 'ejemplo'){
            this._id = param
        }
    }
    set autor(param){
        if(param === 'ejemplo'){
            this._autor = param
        }
    }
    set contenido(param){
        if(param === 'ejemplo'){
            this._contenido = param
        }
    }
    set likes(param){
        if(param === 'ejemplo'){
            this._likes = param
        }
    }
    set respuestas(param){
        if(param === 'ejemplo'){
            this._respuestas = param
        }
    }

    //MEthods

    publicar(){
        console.log(`${this.autor} (${this.userRole})`)
        console.log(`${this.likes} likes`)
        console.log(`${this.contenido}`)
    }
}

class Replies {
    constructor({
        id,
        autor,
        contenido,
    }){
        this.id         = id,
        this.autor      = autor,
        this.contenido  = contenido
    }
} 

class Leassons {
    constructor({
        id,
        name,
        comentarios = [],
        resources = []
    }){
        this._id          = id ,
        this._name        = name ,
        this._comentarios = comentarios
        this._resources   = resources
    }

    //Getters

    get id(){
        return this._id
    }
    get name(){
        return this._name
    }
    get comentarios(){
        return this._comentarios
    }
    get resources(){
        return this._resources
    }

    //setters

    set id(param){
        if(param === 'ejemplo'){
            this._id = param
        }
    }
    set name(param){
        if(param === 'ejemplo'){
            this._name = param
        }
    }
    set comentarios(param){
        if(param === 'ejemplo'){
            this._comentarios = param
        }
    }
    set resources(param){
        if(param === 'ejemplo'){
            this._resources = param
        }
    }
}

const leassonAbstraccionEnJavaScript = new Leassons({
    id : 'C001',
    name : "Abastraccion en JavaScript",
})

class Courses {
    constructor({
        id,
        name,
        teacher,
        leassons = [],
        isFree = false,
        lang = 'spanish'
    }){
        this._id       = id;
        this._name     = name;
        this._teacher  = teacher;
        this._leassons = leassons;
        this.isFree    = isFree;
        this.lang      = lang
    }

    //Getters

    get id(){
        return this._id
    }
    get name(){
        return this._name
    }
    get teacher(){
        return this._teacher
    }
    get leassons(){
        return this._leassons
    }

    //setters

    set id(param){
        if(param === 'ejemplo'){
            this._id = param
        }
    }
    set name(param){
        if(param === 'ejemplo'){
            this._name = param
        }
    }
    set teacher(param){
        if(param === 'ejemplo'){
            this._teacher = param
        }
    }
    set leassons(param){
        if(param === 'ejemplo'){
            this._leassons = param
        }
    }

    //Meyhods

    addLeassons(course){
        this.leassons.push(course)
    }
}

const cursoBasicoPOOJavaScript = new Courses({
    id: 1,
    name: "Curso Basico POO JavaScript",
    teacher: "Juan DC",
    isFree: true,
    lang: 'español'
})

const cursoProgramacionBasico = new Courses({
    id: 2,
    name: "Curso Basico Programacion",
    teacher: "Juan DC",
    isFree: false,
    lang: 'english'
})

class LearningPath {
    constructor({
        name,
        courses = []
    }){
        this._name    = name
        this.courses = courses
    }

    //getters

    get name(){
        return this._name
    }

    //setters

    set name(param){
        if(param !== 'ejemplo')
        this._name = param
    }

    // Methods

    addCourse(course){
        this.courses.push(course)
    }

}

const pathDesarrolloWeb = new LearningPath({
    name: 'Ruta de Desarrollo Web',
    courses: []
})

class Student {
    constructor({
        name,
        email,
        username,
        points,
        twitter         = undefined,
        facebook        = undefined,
        instagram       = undefined,
        aprrovedCourses = [],
        learningPath    = []
    }){
        this._name        = name;
        this._email       = email;
        this._username    = username;
        this.points       = points;
        this._socialmedia = {
            twitter,
            facebook,
            instagram,
        }
        this.aprrovedCourses = aprrovedCourses;
        this.learningPath    = learningPath;
    }

    //getters

    get name(){
        return this._name
    }
    get email(){
        return this._email
    }
    get username(){
        return this._username
    }
    get socialmedia(){
        return this._socialmedia
    }

    //setters

    set name(param){
        if(param !== 'ejemplo'){
            this._name = param
        }
    }
    set email(param){
        if(param !== 'ejemplo'){
            this._email = param
        }
    }
    set username(param){
        if(param !== 'ejemplo'){
            this._username = param
        }
    }
    set socialmedia(param){
        if(param !== 'ejemplo'){
            this._socialmedia = param
        }
    }

    //methods

    addLearningPath(path){
        if(this.learningPath.some(i => i.name === path.name)){
            console.log('Ya tienes esta Ruta')
        }else{
            this.learningPath.push(path);
        }
    }

    publicarComentario(comentContent){
        const comment = new Comentarios({
            contenido: comentContent,
            autor: this._name,
        })
        comment.publicar()
    }
}

class FreeStuden extends Student {
    constructor(props) {
        super(props);
    }
    aprvdCourse(newCourse) {
        if (newCourse.isFree){
            this.aprrovedCourses.push(newCourse)
        }else{
            console.warn(`Los siento, ${this._name}, solo puedes tomar cursos gratis`)
        }
    }
}

class BasicStudent extends Student {
    constructor(props) {
        super(props);
    }
    aprvdCourse(newCourse) {
        if (newCourse.lang !== 'english'){
            this.aprrovedCourses.push(newCourse)
        }else{
            console.warn(`Los siento, ${this._name}, solo puedes tomar cursos en español`)
        }
    }
}

class ExpertStudent extends Student {
    constructor(props) {
        super(props);
    }
    aprvdCourse(newCourse) {
            this.aprrovedCourses.push(newCourse)
    }
}

class Teacher extends Student{
    constructor(props){
        super(props);
    }
    aprvdCourse(newCourse) {
        this.aprrovedCourses.push(newCourse)
    }
    publicarComentario(comentContent){
        const comment = new Comentarios({
            contenido: comentContent,
            autor: this._name,
            userRole: 'Profesor'
        })
        comment.publicar()
    }
}

const leopoldo = new FreeStuden ({
    name: "Leopoldo",
    email: "alb.mar.tac@gmail.com",
    username: "leo666",
    points: 8238
})

const vericar = new Teacher ({
    name: "Vericar",
    email: "veriveric@gmail.com",
    username: "racirev",
    points: 8238
})