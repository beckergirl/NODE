//clase professional del proyecto IMBD

class Professional {

    constructor(name, age, nationality , profession){ //ELIMINO NÚMERO DE OSCARS, SI ESTÁ RETIRADO, ETC

        this.name = name;
        this.age = age;
        this.nationality = nationality;
        this.profession = profession;
    }

/* 
    public showAtribs(){
        console.log(this);
    } */
}

module.exports = { Professional }