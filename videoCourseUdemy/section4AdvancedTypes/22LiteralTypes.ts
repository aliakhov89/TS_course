function fetchWithAuth( url: string, method: 'post' | 'get') : 1 | -1{
    return 1;
}

fetchWithAuth('http://s', 'post')
fetchWithAuth('http://a', 'get')

let method = 'post'

fetchWithAuth('s', method); //get an error


fetchWithAuth('s', method as 'post');//привели тип method к post


