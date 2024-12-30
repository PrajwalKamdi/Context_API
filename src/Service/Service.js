import axios from "axios";

const ax = axios.create({baseURL:"https://jsonplaceholder.typicode.com/posts"});
export function getData(){
    return ax.get();
}
export function getSinglePost(num){
    return ax.get(num);
}