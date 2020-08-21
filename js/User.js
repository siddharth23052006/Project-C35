class User{
    constructor(){
        this.index = null;
        this.name = null;
        this.email = null;
        this.location = null;
        this.answer_1 = null;
        this.answer_2 = null;
        this.answer_3 = null;
        this.answer_4 = null;
        this.answer_5 = null;

    }

    update(Name){
        var userIndex = "users/" + Name;
        database.ref(userIndex).set({
            Name: this.name,
            Email: this.email,
            Location: this.location,
            Answer_1: this.answer_1,
            Answer_2: this.answer_2,
            Answer_3: this.answer_3,
            Answer_4: this.answer_4,
            Answer_5: this.answer_5
        });
    }
}