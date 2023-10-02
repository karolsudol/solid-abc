import axios from 'axios';

const BASE_URL = "/api";

export const fetchAnalyticsData = async (apiKey: string, from: string, to: string, categoryValue: string[]) => {
    const endpoint = `/analytics/relays/aggregated/application_id`;
    const headers = {
        "Portal-DWH-Service-Api-Key": apiKey,
        "Content-Type": "application/json"
    };

    // Custom serialization for the categoryValue array
    const paramsSerializer = (params: any) => {
        const parts: string[] = [];
        for (const key in params) {
            if (params.hasOwnProperty(key)) {
                if (Array.isArray(params[key])) {
                    for (const val of params[key]) {
                        parts.push(`${key}=${val}`);
                    }
                } else {
                    parts.push(`${key}=${params[key]}`);
                }
            }
        }
        return parts.join('&');
    };

    const params = {
        from,
        to,
        category_value: categoryValue
    };

    try {
        const response = await axios.get(BASE_URL + endpoint, { headers, params, paramsSerializer });
        return response.data;
    } catch (error) {
        console.error("Error fetching analytics data:", error);
        throw error;
    }
};
