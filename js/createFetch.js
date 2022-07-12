export function create_fetch(method, url, body = null) {

    function heandleError(response) {
        if (!response.ok) {
            throw Error(response.status + ":" + response.statusText)
        }
        return response
    }

    return fetch(url, {
        method,
        body,
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        }
    })
        .then(response => heandleError(response))
        .then(response => response.json())
    // .then(response => response.json())
    // .then(dados => console.log(dados))
    // .catch(err => console.log(err))
}