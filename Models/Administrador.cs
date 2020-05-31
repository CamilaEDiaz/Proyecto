using Newtonsoft.Json;
///<Summary>
/// Se coloca TaskItem a la Clase en lugar de Task,
//porque Task es una palabra Reservada de .NetCore
/// </Summary>
///
namespace Proyecto
{
    public class Administrador{
        public int Id {get; set;}
        
         public string Usuario {get; set;}
         public string Contraseña {get; set;}


    }
}