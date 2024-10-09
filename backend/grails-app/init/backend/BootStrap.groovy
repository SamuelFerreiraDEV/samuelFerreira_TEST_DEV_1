package backend

class BootStrap {

    def init = { servletContext ->
        new Company(name: 'Big Burgers', segment: 'Fast Food').save()
        new Company(name: 'Easy Travel', segment: 'Tourism').save()
        new Company(name: 'Wonder Team', segment: 'Sports').save()
    }
    def destroy = {
    }
}
