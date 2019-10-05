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

export const sendData = (route, method, body) => {

    const requestUrl = PRIMARY_SERVER + route;

    return new Promise((resolve, reject) => {

        const headers = new Headers({
            "Content-Type": "application/json"
        })

        const requestConfig = {
            mode: "cors",
            method,
            headers,
            body: JSON.stringify(body),
        };

        fetch(requestUrl, requestConfig)
            .then(response => response.json())
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    })
};

export default fetchData;