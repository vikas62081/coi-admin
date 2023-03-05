import BaseService from "../../shared/BaseService";
import { Tenant } from "../../types/models/apps/tenant";

export let SERVICE_URL: string = `${process.env.REACT_APP_DATA_API_URL_CONFIGURATION_ENDPOINT}`;
class TenantService extends BaseService<Tenant> {
    constructor(url?: string) {
        if (url) {
            SERVICE_URL = url;
        }
        super(SERVICE_URL);
    }

}

export default TenantService;
