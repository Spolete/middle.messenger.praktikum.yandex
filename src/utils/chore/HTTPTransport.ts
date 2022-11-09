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

export default class HTTPTransport {
    static API_URL = 'https://ya-praktikum.tech/api/v2';
    protected endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
    }

    public get<Response>(path: string, options: OptionsWithoutMethod = {}): Promise<Response> {
        const url = this.endpoint + path
        return this.request(url, {...options, method: Method.Get}, options.timeout);
    }

    public put<Response = void>(path: string, options: OptionsWithoutMethod = {}): Promise<Response> {
        const url = this.endpoint + path
        return this.request(url, {...options, method: Method.Put}, options.timeout);
    }

    public post<Response = void>(path: string, options: OptionsWithoutMethod = {}): Promise<Response> {
        const url = this.endpoint + path
        return this.request(url, {...options, method: Method.Post}, options.timeout);
    }

    public delete<Response>(path: string, options: OptionsWithoutMethod = {}): Promise<Response> {
        const url = this.endpoint + path
        return this.request(url, {...options, method: Method.Delete}, options.timeout);
    }

    private request<Response>(url: string, options: Options, timeout = 5000): Promise<Response> {
        const {method, data, headers} = options;

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.timeout = timeout;
            if (headers) {
                Object.entries(headers).forEach(([header, value]) => xhr.setRequestHeader(header, value))
            }

            xhr.onload = function () {
                if (xhr.status < 400) {
                    resolve(xhr.response);
                } else {
                    reject(xhr.response);
                }
            }

            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;


            xhr.setRequestHeader('Content-Type', 'application/json');

            xhr.withCredentials = true;
            xhr.responseType = 'json';

            if (method === Method.Get || !data) {
                xhr.send();
            } else {
                xhr.send(JSON.stringify(data))
            }
        })
    }
}
