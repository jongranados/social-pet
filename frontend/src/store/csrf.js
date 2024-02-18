import Cookies from 'js-cookie'; 

// custom fetching function implemented to appropriately make requests to csrf-protected backend
export async function csrfFetch(url, options = {}) {
	// persist the HTTP request method explicitly called by the invoking Redux thunk, or default to 'GET' if one wasn't provided
	options.method = options.method || "GET";

	// persist any headers explicitly called by the invoking Redux thunk, or default to an empty object if none were provided to prevent an unwanted 'undefined' assignment
	options.headers = options.headers || {};

	// all non-GET requests require additional measures to comply with our csrf-protected backend
	if (options.method.toUpperCase() !== "GET") {
		// per the Fetch API spec, the Content-Type header for any requests transmitting multipart form data should be set by the browser so that it can correctly determine and set the boundary expression used to delimit form fields
		// for more information, see: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects#sending_files_using_a_formdata_object
		!(options.body instanceof FormData) &&
			(options.headers["Content-Type"] =
				options.headers["Content-Type"] || "application/json");

		// set XSRF-Token header used by the backend for stateless authentication
		options.headers["XSRF-Token"] = Cookies.get("XSRF-TOKEN");
	}

	// lastly, make the request using the global Fetch API using our custom options
	const res = await window.fetch(url, options);

	// handle bad requests
	if (res.status >= 400) throw res;

	// return the response of successful requests to the promise chain of the invoking Redux thunk
	return res;
}; 

export function restoreCSRF() { 
    return csrfFetch('/csrf/restore'); 
}; 
