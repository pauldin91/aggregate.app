using Aggregation.Backend.Domain.Dtos.Auth;
using Aggregation.Backend.Domain.Interfaces;
using Aggregation.Backend.Infrastructure.Options;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Aggregation.Backend.Infrastructure.Helpers
{
    public class TokenGenerator(IOptions<JwtOptions> options) : ITokenGenerator
    {
        public string GenerateToken(string username)
        {
            var expires = DateTime.UtcNow.AddHours(1);
            var claims = new[]
            {

                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.Sub, username),
                new Claim(JwtRegisteredClaimNames.Name, username),
                new Claim(JwtRegisteredClaimNames.Iss, options.Value.Issuer),
                new Claim(JwtRegisteredClaimNames.Aud, options.Value.Audience),
                new Claim(JwtRegisteredClaimNames.Exp, expires.ToString("O")),
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(options.Value.SecretKey));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: options.Value.Issuer,
                audience: options.Value.Audience,
                claims: claims,
                expires: expires,
                signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}