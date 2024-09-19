// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DefaultAzureCredential } from "@azure/identity";
import MapsWeather, { isUnexpected } from "@azure-rest/maps-weather";


/**
 * @summary Get quarter-day weather forecasts for the next 1 to 15 days, providing details for morning, afternoon, evening, and night.
 */
async function main(): Promise<void> {
    const credential = new DefaultAzureCredential();
    const mapsClientId = process.env.MAPS_RESOURCE_CLIENT_ID || "";
    const client = MapsWeather(credential, mapsClientId);

    const response = await client.path("/weather/forecast/quarterDay/{format}", "json").get({
        queryParameters: {
            query: [47.641268, -122.125679],
            duration: 5
        }
    });

    if (isUnexpected(response)) {
        throw response.body.error;
    }
    console.log(response.body);
}

main().catch((err) => {
    console.error("The sample encountered an error:", err);
});
