import { ProxyState } from "../AppState.js";
import { housesService } from "../Services/HousesService.js"

function _draw() {
  let template = ''
  ProxyState.houses.forEach(house => {
    template += house.Template
  })
  document.getElementById('houses').innerHTML = template
}

export default class HousesController {
  constructor() {

    ProxyState.on('houses', _draw)
    ProxyState.on('houses', () => { console.log('new house') })
    _draw()
  }

  createHouse(event) {
    event.preventDefault()
    let form = event.target
    let rawHouse = {
      datePosted: form.datePosted.value,
      sqFootage: form.sqFootage.value,
      price: form.price.value,
      bed: form.bed.value,
      bath: form.bath.value,
      address: form.address.value,
      description: form.description.value,
      imgUrl: form.imgUrl.value,

    }
    housesService.createHouse(rawHouse)
    form.reset()
  }
}