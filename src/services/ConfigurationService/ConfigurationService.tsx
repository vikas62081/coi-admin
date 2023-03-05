import BaseService from "../../shared/BaseService";
import { Configuration } from "../../types/models/apps/configuration";

export let SERVICE_URL: string = `${process.env.REACT_APP_DATA_API_URL_CONFIGURATION_ENDPOINT}`;
class ConfigurationService extends BaseService<Configuration> {
    constructor(url?: string) {
        if (url) {
            SERVICE_URL = url;
        }
        super(SERVICE_URL);
    }

}

export default ConfigurationService;
