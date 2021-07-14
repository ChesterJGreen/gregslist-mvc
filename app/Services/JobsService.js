import { ProxyState } from "../AppState.js";
import Job from "../Models/Jobs.js"



class JobsService {

  createJob(rawJob) {
    console.log(rawJob)
    ProxyState.jobs = [...ProxyState.jobs, new Job(rawJob)]
  }
}

export const jobsService = new JobsService()