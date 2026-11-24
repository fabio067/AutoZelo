using AutoZelo.Api.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();

var connectionString = builder.Configuration.GetConnectionString("Catalog");
if (!string.IsNullOrWhiteSpace(connectionString))
{
    builder.Services.AddDbContext<CatalogDbContext>(options => options.UseNpgsql(connectionString));
}

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.MapGet("/health", () => TypedResults.Ok(new HealthResponse("ok")))
    .WithName("GetHealth")
    .WithSummary("Indica se o processo da API está respondendo.");

app.Run();

internal sealed record HealthResponse(string Status);
