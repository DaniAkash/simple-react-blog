import { PRIMARY_SERVER } from "../constants/serverUrls";

const fetchData = (route, method) => {
    const requestUrl = PRIMARY_SERVER + route;
    return new Promise((resolve, reject) => {
        fetch(requestUrl)
        .then(response => response.json())
        .then(data => {
            resolve(data);
        })
        .catch(error => {
            reject(error);
        });
    });
};

export default fetchData;