import { ProxyState } from "../AppState.js"
import { jobsService } from "../Services/JobsService.js"

function _draw() {
  let template = ''
  ProxyState.jobs.forEach(job => {
    template += job.template

  })
  document.getElementById('jobs').innerHTML = template
}

export default class JobsController {

  constructor() {
    ProxyState.on('jobs', _draw)
    ProxyState.on('jobs', () => { console.log('new job') })
    _draw()
  }

  createJob() {
    console.log('button pressed')
    event.preventDefault()
    let form = event.target
    console.log(form.title.value)
    let rawJob = {
      title: form.title.value,
      company: form.company.value,
      location: form.location.value,
      type: form.type.value,
      description: form.description.value,
      pay: form.pay.value,
      companyLogo: form.companyLogo.value,
    }
    jobsService.createJob(rawJob)
    form.reset()
  }
}