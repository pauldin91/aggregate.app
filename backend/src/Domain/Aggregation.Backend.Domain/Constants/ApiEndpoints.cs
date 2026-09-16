namespace Aggregation.Backend.Domain.Constants
{
    public static class ApiEndpoints
    {
        public const string Api = "api";
        public const string Version = "1";
        public const string Aggregates = "aggregates";
        public const string AirPollution = "pollution";
        public const string News = "news";
        public const string Statistics = "statistics";
        public const string GetAggregatesRoute = $"{Api}/v{Version}/{Aggregates}";
        public const string GetAirPollutionRoute = $"{Api}/v{Version}/{AirPollution}";
        public const string GetNewsRoute = $"{Api}/v{Version}/{News}";
        public const string GetStatisticsRoute = $"{Api}/v{Version}/{Statistics}";
        public const string Callback = $"auth/github/callback";

    }
}