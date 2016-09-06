using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

using triwbn.Models;
using triwbn.DAL;

namespace triwbn.Controllers
{
    [Route("api/[controller]")]
    public class NotificationController : Controller
    {
        private static readonly DataStorage _dataStorage = new DataStorage();

        // GET: api/values
        [HttpGet]
        public IEnumerable<Notification> Get()
        {
            IEnumerable<Notification> notifications = _dataStorage.GetAll();

            return notifications;
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public bool Delete(string id)
        {
            _dataStorage.Remove(id);

            return true;
        }
    }
}
