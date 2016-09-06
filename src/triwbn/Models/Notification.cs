namespace triwbn.Models
{
    public class Notification
    {
        public int NotificationType { get; set; }

        public string NotificationGuid { get; set; }

        public string ActionType { get; set; }

        public string ActionTime { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string FileName { get; set; }

        public string TaskName { get; set; }

        public string TaskDueDate { get; set; }

        public string NoteName { get; set; }
    }
}
