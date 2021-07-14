import Car from "./Models/Car.js"
import House from "./Models/House.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {

  /** @type {Car[]} */
  cars = [
    new Car({
      make: 'Ford',
      model: 'Pinto',
      year: 1987,
      price: 1200,
      description: 'This Car is HOT!',
      imgUrl: 'https://blog.automedicsafrica.com/wp-content/uploads/2015/08/Impala-vs-Pinto-750x547.jpg'
    }),
    new Car({
      make: 'VW',
      model: 'Gremlin',
      year: 1988,
      price: 3400,
      description: 'Lime Green! You gonna love it',
      imgUrl: 'https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2020/07/Gremlin-X.jpg'
    })
  ]
  /** @type {House[]} */
  houses = [
    new House({
      datePosted: '7/14/2021',
      sqFootage: 1600,
      price: 300000,
      bed: 4,
      bath: 2,
      address: '920 Grelle Ave',
      description: 'a lovely home with room for pets',
      imgUrl: 'https://www.familyhomeplans.com/varnish-images/plans/76461/76461-b580.jpg'

    }),
    new House({
      datePosted: '6/18/2020',
      sqFootage: 1450,
      price: 270000,
      bed: 4,
      bath: 2.5,
      address: '18434 Admiral Way, Nampa, ID 83687',
      description: 'This is my House Dude!',
      imgUrl: '../assets/img/myHouse.jpeg'
    }),
    new House({
      datePosted: '5/10/2021',
      sqFootage: 5000,
      price: 1000000,
      bed: 6,
      bath: 6,
      address: 'Somewhere in Eagle - spoken with a butler accent',
      description: 'Have some caviar please!',
      imgUrl: 'https://th.bing.com/th/id/R.64c4bb2740de6e027427f02f9ad0090b?rik=hOUrHQVKdrEzlQ&pid=ImgRaw'

    })
  ]

}


export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
