import { Component } from "@angular/core";
import { CompanyService } from "./company.service";
import { Company } from "./company.model";

@Component({
  selector: 'CompanyComponent',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {
  
  companies: Company[] = []
  filteredCompanies: Company[] = []
  search: String = ''

  constructor(private companyService: CompanyService) {}

  loadCompanies(): void {
    this.companyService.getCompanies().subscribe(
      (response: Company[]) => {
        this.companies = response
        this.filterCompanies()
      },
      error => {
        console.error('Error: ', error)
      }
    )
  }

  filterCompanies(): void {
    this.filteredCompanies = this.companies.filter(company => {
      const name = company.name.toLocaleLowerCase()
      const segment = company.name.toLocaleLowerCase()

      return name.includes(this.search.toLowerCase()) || 
      segment.includes(this.search.toLowerCase())
    })
  }
}