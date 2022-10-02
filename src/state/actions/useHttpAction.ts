import axios, { AxiosRequestHeaders, AxiosResponse } from "axios";

export default function useHttpAction() {
    //const [auth, setAuth] = useRecoilState(authAtom);

    return {
        get: request('GET'),
        post: request('POST'),
        put: request('PUT'),
        delete: request('DELETE'),
    }

    function request(_method: string) {
        return (url: string, body: any = null) => {
           
            const _headers : AxiosRequestHeaders = { }
           
            if (body) {
                _headers['Content-Type'] = 'application/json'
            }

            return axios.create({
                baseURL: process.env.API,
                method: _method,
                headers: _headers,
                data: body ? JSON.stringify(body) : "",
                transformResponse: handleResponse
            })
            
            //fetch(url, requestOptions).then(handleResponse);
        }
    }

    // function authHeader(url: string){
    //     // return auth header with jwt if user is logged in and request is to the api url
    //     // const token = auth?.token;
    //     // const isLoggedIn = !!token;
    //     // const isApiUrl = url.startsWith(process.env.API);
    //     // if (isLoggedIn && isApiUrl) {
    //     //     return ['Authorization']: `Bearer ${token}`;
    //     // } else {
    //     //     return {};
    //     // }

    //     return {}
    // }
    
    function handleResponse(response: AxiosResponse) : any {
        return response.data.then((text: any) => {
            const data = text && JSON.parse(text);
            
            if (response.statusText !== "OK") {
                // if ([401, 403].includes(response.status) && auth?.token) {
                //     // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                //     localStorage.removeItem('user');
                //     setAuth(null);
                //     history.push('/login');
                // }
    
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
    
            return data;
        });
    } 
}