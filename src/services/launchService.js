import {spaceXAPIService} from "./spaseXAPIService";
import {urls} from "../constants/urls";

const launchService = {
    getAll: () => spaceXAPIService.get(urls.launches)
}

export {
    launchService
}