import jwtAxios from "../auth/jwt-auth";
import AxiosMockAdapter from 'axios-mock-adapter';

export const axiosMockAdapterInstance = new AxiosMockAdapter(jwtAxios, { delayResponse: 0 })

export default axiosMockAdapterInstance;
