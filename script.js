class Person{
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }

    print() {
        console.log(`Name: ${this.name}, Surname: ${this.surname}`);
    }
}

class User extends Person {
    #password

    constructor(name, surname, password) {
        super(name, surname);
        this.#password = password;
    }

    print(password) {
        if (password === this.#password) {
            super.print();
        } else{
            console.log('Пароль не верный');
            
        }
    }
}

const user = new User('Emir', 'Abdyldaev', 12345678);

// user.print(password)  это не правильный пароль

user.print(12345678);