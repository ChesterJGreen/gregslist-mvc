import { ProxyState } from "../AppState.js"
import { jobsService } from "../Services/JobsService.js"

function _draw() {
  let template = ''
  ProxyState.jobs.forEach(job => {
    template += job.Template

  })
  document.getElementById('jobs').innerHTML = template
}

export default class JobsController {

  constructor() {
    _draw()
  }
}