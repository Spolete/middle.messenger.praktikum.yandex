import queryStringify from "./queryStringify";

enum Method {
    Get = 'GET',
    Post = 'POST',
    Put = 'PUT',
    Delete = 'DELETE',
}

type Options = {
    method: Method;
    data?: any;
    headers?: Record<string, string>;
    timeout?: number;
};

type OptionsWithoutMethod = Omit<Options, 'method'>;

class HTTPTransport {
    get = (url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> => {
        const newUrl = url + '' + queryStringify(options.data)
        return this.request(newUrl, {...options, method: Method.Get}, options.timeout);
    };

    put = (url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> => {
        return this.request(url, {...options, method: Method.Put}, options.timeout);
    };

    POST = (url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> => {
        return this.request(url, {...options, method: Method.Post}, options.timeout);
    };

    DELETE = (url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> => {
        return this.request(url, {...options, method: Method.Delete}, options.timeout);
    };

    request = (url: string, options: Options, timeout = 5000): Promise<XMLHttpRequest> => {
        const {method, data, headers} = options;

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.timeout = timeout;
            if (headers) {
                Object.entries(headers).forEach(([header, value]) => xhr.setRequestHeader(header, value))
            }

            xhr.onload = function () {
                resolve(xhr)
            }

            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;

            if (method === Method.Get || !data) {
                xhr.send();
            } else {
                xhr.send(data)
            }
        })
    };
}
