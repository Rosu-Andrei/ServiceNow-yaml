import axios from 'axios';
import {ServiceNowResponse} from "../types/service.now.response";


export async function fetchServiceNowData(table: string): Promise<any[]> {
    const url = `https://dev277314.service-now.com/api/now/table/${table}`;

    try {
        const response = await axios.get<ServiceNowResponse<any>>(url, {
            auth: {
                username: 'admin',
                password: 'wzP2PF5u$%wL',
            }
        });

        // Now TypeScript knows response.data is of type ServiceNowResponse<any>
        return response.data.result;
    } catch (error) {
        throw new Error(`Failed to fetch data from ServiceNow: ${(error as Error).message}`);
    }
}
