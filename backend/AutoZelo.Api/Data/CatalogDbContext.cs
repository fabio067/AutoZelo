using Microsoft.EntityFrameworkCore;

namespace AutoZelo.Api.Data;

public sealed class CatalogDbContext(DbContextOptions<CatalogDbContext> options)
    : DbContext(options);
