import axios from 'axios';

const BASE_URL = "/api";

export const fetchAnalyticsData = async (apiKey: string, from: string, to: string, categoryValue: string[]) => {
    // Adjusted the endpoint to match the curl command
    const endpoint = `/analytics/relays/aggregated/application_id`;
    const headers = {
        "Portal-DWH-Service-Api-Key": apiKey,
        "Content-Type": "application/json"
    };
    const params = {
        from,
        to,
        category_value: categoryValue
    };

    try {
        const response = await axios.get(BASE_URL + endpoint, { headers, params });
        return response.data;
    } catch (error) {
        console.error("Error fetching analytics data:", error);
        throw error;
    }
};
