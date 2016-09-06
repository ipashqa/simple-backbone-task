using System.Collections.Generic;
using System.Linq;

using triwbn.Models;

namespace triwbn.DAL
{
    public class DataStorage
    {
        private readonly List<Notification> _notifications;

        public DataStorage()
        {
            _notifications = new List<Notification>();

            _notifications.Add(new Notification()
            {
                NotificationType = 1,
                NotificationGuid = "i0ace4d3a00000156e578c068d412b851",
                ActionType = "NoteAdd",
                ActionTime = "2016-09-01T11:18:31.0000000Z",
                FirstName = "Jim",
                LastName = "Smith",
                FileName = null,
                TaskName = null,
                TaskDueDate = null,
                NoteName = "Important"
            });

            _notifications.Add(new Notification()
            {
                NotificationType = 2,
                NotificationGuid = "i0ace4d3a00000156e578c068d412b852",
                ActionType = "FileAdd",
                ActionTime = "2016-09-01T11:18:31.0000000Z",
                FirstName = "Jane",
                LastName = "Jones",
                FileName = "matter.doc",
                TaskName = null,
                TaskDueDate = null,
                NoteName = null
            });

            _notifications.Add(new Notification()
            {
                NotificationType = 3,
                NotificationGuid = "i0ace4d3a00000156e578c068d412b853",
                ActionType = "TaskAdd",
                ActionTime = "2016-09-02T13:18:31.0000000Z",
                FirstName = "Jack",
                LastName = "White",
                FileName = null,
                TaskName = "Prepare review",
                TaskDueDate = "2016-09-02T00:00:00.0000000Z",
                NoteName = null
            });
        }

        public IEnumerable<Notification> GetAll()
        {
            return _notifications;
        }

        public void Remove(string id)
        {
            Notification item = _notifications.FirstOrDefault(i => i.NotificationGuid == id);

            if (item != null)
            {
                _notifications.Remove(item);
            }
        }
    }
}
