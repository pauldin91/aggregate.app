using Aggregation.Backend.Application.Interfaces;
using Aggregation.Backend.Domain.Dtos.External.Air;
using MediatR;

namespace Aggregation.Backend.Application.Features.Air
{
    public record AirPollutionQuery(string Category, string? FilterBy, string? SortBy, bool Asc = true) : IRequest<IList<CityDto>>;

    public class AirPollutionQueryHandler(IAirPollutionService airPollutionService) : IRequestHandler<AirPollutionQuery, IList<CityDto>>
    {
        public async Task<IList<CityDto>> Handle(AirPollutionQuery request, CancellationToken cancellationToken)
        {
            return (await airPollutionService.GetAirPollutionDataAsync(request.Category, cancellationToken))
            .Where(s => s.Status == "success")
            .ToList();
        }
    }
}