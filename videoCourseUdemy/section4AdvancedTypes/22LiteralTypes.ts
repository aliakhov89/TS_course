function fetchWithAuth1( url: string, method: 'post' | 'get') : 1 | -1{
    return 1;
}

fetchWithAuth1('http://s', 'post')
fetchWithAuth1('http://a', 'get')

let method: string = 'post'
type method1 = 'post' | 'get';
let method2: method1 = 'post'

fetchWithAuth1('s', method); //get an error
fetchWithAuth1('s', method2); 


fetchWithAuth1('s', method as 'post');//привели тип method к post


