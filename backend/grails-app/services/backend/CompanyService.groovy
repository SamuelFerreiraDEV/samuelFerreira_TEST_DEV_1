package backend

import grails.gorm.transactions.Transactional

@Transactional
class CompanyService {

    @Transactional
    def getCompanies() {
        return Company.list()
    }

}
