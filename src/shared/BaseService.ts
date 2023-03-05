import jwtAxios from "../services/auth/jwt-auth";

export default abstract class BaseService<T> {
    SERVICE_URL: string = '';
    constructor(public url: string) {
        this.SERVICE_URL = url;
    }

    public update = (model: T, modelId: string | number) => jwtAxios.put<T>(`${this.SERVICE_URL}/${modelId}`, model);

    public create = (model: T) => jwtAxios.post<T>(this.SERVICE_URL, model);

    public fetchAll = () => jwtAxios.get<Array<T>>(this.SERVICE_URL);

    public fetch = (modelId: string | number) => jwtAxios.get<T>(`${this.SERVICE_URL}/${modelId}`);

    public search = (query: string) => jwtAxios.get<Array<T>>(`${this.SERVICE_URL}/search/?q=${query}`);

    public save = (model: T, modelId: string | number) => (modelId) ? this.update(model, modelId) : this.create(model);

    public delete = (modelId: string | number) => jwtAxios.delete(`${this.SERVICE_URL}/${modelId}`);
}
