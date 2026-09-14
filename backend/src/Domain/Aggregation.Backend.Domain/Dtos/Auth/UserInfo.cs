using System.Text.Json.Serialization;

namespace Aggregation.Backend.Domain.Dtos.Auth
{

    public class UserInfoResponse
    {
        [JsonPropertyName("login")]
        public string Login { get; set; }

        [JsonPropertyName("id")]
        public int Id { get; set; }

        [JsonPropertyName("avatar_url")]
        public string AvatarUrl { get; set; }

        [JsonPropertyName("url")]
        public string Url { get; set; }

        [JsonPropertyName("type")]
        public string Type { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("location")]
        public string Location { get; set; }

        [JsonPropertyName("email")]
        public string? Email { get; set; }

        [JsonPropertyName("hireable")]
        public bool? Hireable { get; set; }

        [JsonPropertyName("created_at")]
        public DateTime CreatedAt { get; set; }

        [JsonPropertyName("updated_at")]
        public DateTime UpdatedAt { get; set; }


        [JsonPropertyName("disk_usage")]
        public int DiskUsage { get; set; }

        [JsonPropertyName("collaborators")]
        public int Collaborators { get; set; }

        [JsonPropertyName("two_factor_authentication")]
        public bool TwoFactorAuthentication { get; set; }

    }




}