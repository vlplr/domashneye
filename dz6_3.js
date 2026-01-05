const contactsBook = {
    contacts: [{
        name: "Максим", 
        phoneNumber: "+380683259826", 
        emailAddress: "maksymblack@email.com"
    }, 
    {
        name: "Давид",
        phoneNumber: "+380988723415",
        emailAddress: "davidbegoyan@email.com"
    },
    {
        name: "Ярослав",
        phoneNumber: "+380968126829",
        emalAddress: "yaroslavpetrov@email.com"
    } ],

     addContact(name, phone, email) {
        const newContact = {
            name: name,
            phone: phone,
            email: email
        };
        this.contacts.push(newContact);
    },

    findContact(name) {
        for (let i = 0; i < this.contacts.length; i++) {
            if (this.contacts[i].name === name) {
                return this.contacts[i];
            }
        }
        return "Контакт не найден";
    }
};

console.log(contactsBook.findContact("Максим"));
contactsBook.addContact("Мама", "+380526798481", "mymom@email.com");

console.log(contactsBook.contacts);