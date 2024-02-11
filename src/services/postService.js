import {jsonAPIService} from "./jsonAPIService";
import {urls} from "../constants/urls";

const postService = {
    getAll: () => jsonAPIService(urls.posts),
};

export{
    postService
}