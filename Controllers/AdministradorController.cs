using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Proyecto;
namespace Proyecto.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdministradorController : ControllerBase{
        private readonly Context _context;
        public AdministradorController(Context context)
        {
             _context = context;
            if (_context.Administradors.Count() == 0)
            {
                _context.Administradors.Add(new Administrador { Id=0, Usuario= "cami", Contraseña= "123"} );  
                _context.SaveChanges();
            }

        }
        //GET: api/Adm
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Administrador>>> GetAdministrador(){
            return await _context.Administradors.ToListAsync();
        }

        //POST: api/Adm
        [HttpPost]
        public async Task<ActionResult<Administrador>> PostAdministrador(Administrador adm){
            _context.Administradors.Add(adm);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetAdministrador), new Administrador{Id= adm.Id}, adm);
        }

    }
}