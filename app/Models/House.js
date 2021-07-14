export default class House {
  constructor({ datePosted, sqFootage, price, bed, bath, address, description, imgUrl }) {
    this.datePosted = datePosted;
    this.sqFootage = sqFootage;
    this.price = price;
    this.bed = bed;
    this.bath = bath;
    this.address = address;
    this.description = description;
    this.imgUrl = imgUrl || '//placehold.it/200x200'

  }

  get Template() {
    return `
    <div class="col-md-4 col-sm-3 my-3">
      <div class="house bg-light shadow">
        <img src="${this.imgUrl}" class="w-100" alt="${this.price}">
        <div class="p-3>
          <div class="text-center">
            <p><b>${this.sqFootage}SQ FT - ${this.bed}BEDS - ${this.bath}BATHS</b></p>
          </div>
          <p>${this.address}</p>
          <p>${this.description}</p>
          <p><em>$${this.price}</em></p>
        </div>
      </div>
    </div>
    `
  }

}