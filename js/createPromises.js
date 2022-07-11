export function create_promise(method, url, data = null) {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open(method, url)//qndo abro a conexão preciso infrmar q estou trb com json
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
        xhr.send(data)

        xhr.onreadystatechange = verificaAjax

        function verificaAjax() {
            if (xhr.readyState === 4) {
                if (xhr.status < 400) {//verificar se ele e menos q 400 ai roda o codg. 
                    const json = JSON.parse(xhr.responseText)
                    resolve(json)
                } else {
                    reject(Error("algo deu errado com a conexão"))
                }
            }
        }
    })
    console.log(promise)
    return promise
}