export function request(url, method, body) {
    return (
        // fetch(`https://whispering-retreat-09608.herokuapp.com/v1/product${url}`, {
            fetch(`http://localhost:3300/v1/product${url}`, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        }).then((response) => response.json())
    )
} 