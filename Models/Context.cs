using Microsoft.EntityFrameworkCore;
namespace Proyecto
{
public class Context : DbContext
{
public Context(DbContextOptions<Context> options) :
base(options)
{

}
public DbSet<Administrador> Administradors { get; set; }
public DbSet<Manipulador> Manipuladors { get; set; }
public DbSet<Restaurante> Restaurantes { get; set; }

}
}