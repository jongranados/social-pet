import Cookies from 'js-cookie'; 

// custom fetching function implemented to accommodate csrf-protected backend
export async function csrfFetch(url, options = {}) { 
    // set options.method to 'GET' if a method isn't explicitly referenced
    options.method = options.method || 'GET'; 

    // set options.headers to an empty object if headers weren't explicitly referenced
    options.headers = options.headers || {};

    // set the 'XSRF-Token' the value of the 'XSRF-TOKEN' cookie for all non-GET requests
    if (options.method.toUpperCase() !== 'GET') { 
        options.headers['Content-Type'] = options.headers['Content-Type'] || 'application/json';
        options.headers['XSRF-Token'] = Cookies.get('XSRF-TOKEN'); 
    }; 

    // finally, make the request using the global fetch method with these tailored options
    const res = await window.fetch(url, options); 

    // if the response status code is 400 or above, throw an error with the response
    if (res.status >= 400) throw res; 

    // if the response status code is under 400, return the response to the next promise in the chain
    return res;
}; 

export function restoreCSRF() { 
    return csrfFetch('/csrf/restore'); 
}; 
