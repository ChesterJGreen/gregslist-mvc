export default class Job {

  constructor({ title, company, location, type, description, pay, companyLogo }) {
    this.title = title
    this.company = company
    this.location = location
    this.type = type
    this.description = description
    this.pay = pay
    this.companyLogo = companyLogo || '//placehold.it/200x200'
  }

  get template() {
    return `
      <div class="col-md-3 col-sm-2 my-3">
        <div class="house bg-light shadow">
          <img src="${this.companyLogo}" class="w-100" alt="${this.pay}">
          <div class="p-3">
            <div class="text-center">
              <p><b>${this.title} - ${this.company} - ${this.location}</b></p>
            </div>
            <p>${this.description}</p>
            <p><em>$${this.pay}</em></p>
          </div>
        </div>
      </div>
      `
  }
}
