using Aggregation.Backend.Domain.Dtos.External.Air;

namespace Aggregation.Backend.Application.Interfaces
{
    public interface IAirPollutionService : IExternalApiService
    {
        
        Task<IList<CityDto>> GetAirPollutionDataAsync(string category,CancellationToken cancellationToken);
    }
}