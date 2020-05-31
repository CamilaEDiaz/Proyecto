using Newtonsoft.Json;
///<Summary>
/// Se coloca TaskItem a la Clase en lugar de Task,
//porque Task es una palabra Reservada de .NetCore
/// </Summary>
///
namespace Proyecto
{
    public class Restaurante{
        public int Id {get; set;}
        public int Nit {get; set;}
        public string NombreRestaurante {get; set;}
        public int Telefono {get; set;}
        public string Descripcion {get; set;}
        public string Correo {get; set;}
        public string Direccion {get; set;}
    }
}