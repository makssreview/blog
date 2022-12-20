/* eslint-disable */
/*
    Blog App Server generated
    This is a swagger documentation for Blog App based on the OpenAPI 3.0 specification.  You can find out more about Swagger at [https://swagger.io](https://swagger.io).
    version: 1.0.11

    Contact email: apiteam@swagger.io
*/

export function Configuration(config) {
    this.basePath = '';
    this.fetchMethod = window.fetch;
    this.headers = {};
    this.getHeaders = () => { return {} };
    this.responseHandler = null;
    this.errorHandler = null;

    if (config) {
        if (config.basePath) {
            this.basePath = config.basePath;
        }
        if (config.fetchMethod) {
            this.fetchMethod = config.fetchMethod;
        }
        if (config.headers) {
            this.headers = config.headers;
        }
        if (config.getHeaders) {
            this.getHeaders = config.getHeaders;
        }
        if (config.responseHandler) {
            this.responseHandler = config.responseHandler;
        }
        if (config.errorHandler) {
            this.errorHandler = config.errorHandler;
        }
    }
}

const setAdditionalParams = (params = [], additionalParams = {}) => {
    Object.keys(additionalParams).forEach(key => {
        if(additionalParams[key]) {
            params.append(key, additionalParams[key]);
        }
    });
};

export function UsersApi(config) {
    this.config = config || new Configuration();

    this.authMeIdGet = (args, options = {}) => { 
        const { id } = args;
        const {fetchMethod, basePath, headers, getHeaders, responseHandler, errorHandler} = this.config;
        let url = '/auth/me/{id}';
        url = url.split(['{', '}'].join('id')).join(encodeURIComponent(String(id)));
        const params = new URLSearchParams();
        setAdditionalParams(params, options.params);
        const query = params.toString();
        const controller = new AbortController();
        const promise = new Promise((resolve, reject) => {
            const promise = fetchMethod(basePath + url + (query ? '?' + query : ''), {
                signal: controller.signal,
                method: 'get',
                headers: { ...headers, ...getHeaders(), ...options.headers}
            });
            !!errorHandler && promise.catch(errorHandler);
            const catcher = error => error?.name !== "AbortError" && reject(error);
            !!responseHandler && promise.then(responseHandler, catcher);
            if (options.returnResponse) {
                promise.then(response => resolve(response), catcher);
            } else {
                promise.then(response => {
                    if (response.status === 200 || response.status === 204 || response.status === 304) {
                        return response.json();
                    } else {
                        reject(response);
                    }
                }, catcher).then(data => resolve(data), catcher);
            }
        });
        promise.abort = () => controller.abort();
        return promise;
    };

    this.authRegisterPost = (options = {}) => { 
        const {fetchMethod, basePath, headers, getHeaders, responseHandler, errorHandler} = this.config;
        let url = '/auth/register';
        const params = new URLSearchParams();
        setAdditionalParams(params, options.params);
        const query = params.toString();
        const controller = new AbortController();
        const promise = new Promise((resolve, reject) => {
            const promise = fetchMethod(basePath + url + (query ? '?' + query : ''), {
                signal: controller.signal,
                method: 'post',
                headers: { ...headers, ...getHeaders(), ...options.headers}
            });
            !!errorHandler && promise.catch(errorHandler);
            const catcher = error => error?.name !== "AbortError" && reject(error);
            !!responseHandler && promise.then(responseHandler, catcher);
            if (options.returnResponse) {
                promise.then(response => resolve(response), catcher);
            } else {
                promise.then(response => {
                    if (response.status === 200 || response.status === 204 || response.status === 304) {
                        return response.json();
                    } else {
                        reject(response);
                    }
                }, catcher).then(data => resolve(data), catcher);
            }
        });
        promise.abort = () => controller.abort();
        return promise;
    };

    this.authLoginPost = (options = {}) => { 
        const {fetchMethod, basePath, headers, getHeaders, responseHandler, errorHandler} = this.config;
        let url = '/auth/login';
        const params = new URLSearchParams();
        setAdditionalParams(params, options.params);
        const query = params.toString();
        const controller = new AbortController();
        const promise = new Promise((resolve, reject) => {
            const promise = fetchMethod(basePath + url + (query ? '?' + query : ''), {
                signal: controller.signal,
                method: 'post',
                headers: { ...headers, ...getHeaders(), ...options.headers}
            });
            !!errorHandler && promise.catch(errorHandler);
            const catcher = error => error?.name !== "AbortError" && reject(error);
            !!responseHandler && promise.then(responseHandler, catcher);
            if (options.returnResponse) {
                promise.then(response => resolve(response), catcher);
            } else {
                promise.then(response => {
                    if (response.status === 200 || response.status === 204 || response.status === 304) {
                        return response.json();
                    } else {
                        reject(response);
                    }
                }, catcher).then(data => resolve(data), catcher);
            }
        });
        promise.abort = () => controller.abort();
        return promise;
    };
}

export function PostsApi(config) {
    this.config = config || new Configuration();

    this.postsGet = (options = {}) => { 
        const {fetchMethod, basePath, headers, getHeaders, responseHandler, errorHandler} = this.config;
        let url = '/posts';
        const params = new URLSearchParams();
        setAdditionalParams(params, options.params);
        const query = params.toString();
        const controller = new AbortController();
        const promise = new Promise((resolve, reject) => {
            const promise = fetchMethod(basePath + url + (query ? '?' + query : ''), {
                signal: controller.signal,
                method: 'get',
                headers: { ...headers, ...getHeaders(), ...options.headers}
            });
            !!errorHandler && promise.catch(errorHandler);
            const catcher = error => error?.name !== "AbortError" && reject(error);
            !!responseHandler && promise.then(responseHandler, catcher);
            if (options.returnResponse) {
                promise.then(response => resolve(response), catcher);
            } else {
                promise.then(response => {
                    if (response.status === 200 || response.status === 204 || response.status === 304) {
                        return response.json();
                    } else {
                        reject(response);
                    }
                }, catcher).then(data => resolve(data), catcher);
            }
        });
        promise.abort = () => controller.abort();
        return promise;
    };

    this.postsPost = (body, options = {}) => { 
        const {fetchMethod, basePath, headers, getHeaders, responseHandler, errorHandler} = this.config;
        let url = '/posts';
        const params = new URLSearchParams();
        setAdditionalParams(params, options.params);
        const query = params.toString();
        const controller = new AbortController();
        const promise = new Promise((resolve, reject) => {
            const promise = fetchMethod(basePath + url + (query ? '?' + query : ''), {
                signal: controller.signal,
                method: 'post',
                headers: { 'Content-Type': 'application/json', ...headers, ...getHeaders(), ...options.headers},
                body: 'object' === typeof body ? JSON.stringify(body) : body
            });
            !!errorHandler && promise.catch(errorHandler);
            const catcher = error => error?.name !== "AbortError" && reject(error);
            !!responseHandler && promise.then(responseHandler, catcher);
            if (options.returnResponse) {
                promise.then(response => resolve(response), catcher);
            } else {
                promise.then(response => {
                    if (response.status === 200 || response.status === 204 || response.status === 304) {
                        return response.json();
                    } else {
                        reject(response);
                    }
                }, catcher).then(data => resolve(data), catcher);
            }
        });
        promise.abort = () => controller.abort();
        return promise;
    };

    this.postsIdGet = (args, options = {}) => { 
        const { id } = args;
        const {fetchMethod, basePath, headers, getHeaders, responseHandler, errorHandler} = this.config;
        let url = '/posts/{id}';
        url = url.split(['{', '}'].join('id')).join(encodeURIComponent(String(id)));
        const params = new URLSearchParams();
        setAdditionalParams(params, options.params);
        const query = params.toString();
        const controller = new AbortController();
        const promise = new Promise((resolve, reject) => {
            const promise = fetchMethod(basePath + url + (query ? '?' + query : ''), {
                signal: controller.signal,
                method: 'get',
                headers: { ...headers, ...getHeaders(), ...options.headers}
            });
            !!errorHandler && promise.catch(errorHandler);
            const catcher = error => error?.name !== "AbortError" && reject(error);
            !!responseHandler && promise.then(responseHandler, catcher);
            if (options.returnResponse) {
                promise.then(response => resolve(response), catcher);
            } else {
                promise.then(response => {
                    if (response.status === 200 || response.status === 204 || response.status === 304) {
                        return response.json();
                    } else {
                        reject(response);
                    }
                }, catcher).then(data => resolve(data), catcher);
            }
        });
        promise.abort = () => controller.abort();
        return promise;
    };

    this.postsIdPut = (args, body, options = {}) => { 
        const { id } = args;
        const {fetchMethod, basePath, headers, getHeaders, responseHandler, errorHandler} = this.config;
        let url = '/posts/{id}';
        url = url.split(['{', '}'].join('id')).join(encodeURIComponent(String(id)));
        const params = new URLSearchParams();
        setAdditionalParams(params, options.params);
        const query = params.toString();
        const controller = new AbortController();
        const promise = new Promise((resolve, reject) => {
            const promise = fetchMethod(basePath + url + (query ? '?' + query : ''), {
                signal: controller.signal,
                method: 'put',
                headers: { 'Content-Type': 'application/json', ...headers, ...getHeaders(), ...options.headers},
                body: 'object' === typeof body ? JSON.stringify(body) : body
            });
            !!errorHandler && promise.catch(errorHandler);
            const catcher = error => error?.name !== "AbortError" && reject(error);
            !!responseHandler && promise.then(responseHandler, catcher);
            if (options.returnResponse) {
                promise.then(response => resolve(response), catcher);
            } else {
                promise.then(response => {
                    if (response.status === 200 || response.status === 204 || response.status === 304) {
                        return response.json();
                    } else {
                        reject(response);
                    }
                }, catcher).then(data => resolve(data), catcher);
            }
        });
        promise.abort = () => controller.abort();
        return promise;
    };

    this.postsIdDelete = (args, options = {}) => { 
        const { id } = args;
        const {fetchMethod, basePath, headers, getHeaders, responseHandler, errorHandler} = this.config;
        let url = '/posts/{id}';
        url = url.split(['{', '}'].join('id')).join(encodeURIComponent(String(id)));
        const params = new URLSearchParams();
        setAdditionalParams(params, options.params);
        const query = params.toString();
        const controller = new AbortController();
        const promise = new Promise((resolve, reject) => {
            const promise = fetchMethod(basePath + url + (query ? '?' + query : ''), {
                signal: controller.signal,
                method: 'delete',
                headers: { ...headers, ...getHeaders(), ...options.headers}
            });
            !!errorHandler && promise.catch(errorHandler);
            const catcher = error => error?.name !== "AbortError" && reject(error);
            !!responseHandler && promise.then(responseHandler, catcher);
            promise.then(response => {
                if (response.status === 200 || response.status === 204 || response.status === 304) {
                    resolve(response);
                } else {
                    reject(response);
                }
            }, catcher);
        });
        promise.abort = () => controller.abort();
        return promise;
    };
}

export function FilesApi(config) {
    this.config = config || new Configuration();

    this.uploadPost = (body, options = {}) => { 
        const {fetchMethod, basePath, headers, getHeaders, responseHandler, errorHandler} = this.config;
        let url = '/upload';
        const params = new URLSearchParams();
        setAdditionalParams(params, options.params);
        const query = params.toString();
        const controller = new AbortController();
        const promise = new Promise((resolve, reject) => {
            const promise = fetchMethod(basePath + url + (query ? '?' + query : ''), {
                signal: controller.signal,
                method: 'post',
                headers: { ...headers, ...getHeaders(), ...options.headers},
                body: 'object' === typeof body ? JSON.stringify(body) : body
            });
            !!errorHandler && promise.catch(errorHandler);
            const catcher = error => error?.name !== "AbortError" && reject(error);
            !!responseHandler && promise.then(responseHandler, catcher);
            promise.then(response => {
                if (response.status === 200 || response.status === 204 || response.status === 304) {
                    resolve(response);
                } else {
                    reject(response);
                }
            }, catcher);
        });
        promise.abort = () => controller.abort();
        return promise;
    };
}
