class Contact {
    static count = 0

    constructor (firstname, name, email, phoneNumber) {

        this.firstname = firstname
        this.name= name
        this.email= email
        this.phonenumber = phoneNumber
        this.id = ++Contact.count
    }
}

export default Contact