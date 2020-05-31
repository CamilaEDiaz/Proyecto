using Newtonsoft.Json;
///<Summary>
/// Se coloca TaskItem a la Clase en lugar de Task,
//porque Task es una palabra Reservada de .NetCore
/// </Summary>
///
namespace Proyecto
{
    public class Manipulador{
        public int Id {get; set;}
        public int Codigo {get; set;}
        public string Nombre {get; set;}
         public int Telefono {get; set;}
         public string Correo {get; set;}
    }
}