import { ProxyState } from "../AppState.js"
import House from "../Models/House.js"
import { api } from "./AxiosService.js";


class HousesService {

  constructor() {
    this.getAllHouses()
  }
  async createHouse(rawHouse) {
    // console.log('creating house step 2')
    const res = await api.post('houses', rawHouse)
    // console.log('your new House!', res.data)
    // console.log('creating your house step 3')
    ProxyState.houses = [...ProxyState.houses, new House(res.data)]
  }
  async getAllHouses() {
    try {
      const res = await api.get('houses')
      // console.log(res.data)
      ProxyState.houses = res.data.map(h => new House(h))
    } catch (e) {
      console.error(e)
    }
  }
  async bidHouse(houseId) {
    try {
      let foundHouse = ProxyState.houses.find(h => h.id == houseId)
      foundHouse.price += 100
      const res = await api.put('houses/' + houseId, foundHouse)
      // console.log('updated house', res.data)
      ProxyState.houses = ProxyState.houses
    } catch (e) {
      console.error(e)
    }
  }
  async deleteHouse(houseId) {
    try {
      const res = await api.delete('houses/' + houseId)
      // console.log(res.data)
      ProxyState.houses = ProxyState.houses.filter(h => h.id != houseId)
    } catch (e) {
      console.error(e)
    }
  }
}

export const housesService = new HousesService()