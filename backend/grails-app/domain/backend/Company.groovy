package backend

class Company {
    String name
    String segment

    static constraints = {
        name nullable: false, blank: false, maxSize: 40
        segment nullable: false, blank: false, maxSize: 20
    }
}
