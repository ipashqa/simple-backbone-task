define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/notification-file.html',
	'text!templates/notification-task.html'
], function ($, _, Backbone, notificationFileTemplate, notificationTaskTemplate) {
	var NotificationView = Backbone.View.extend({
		className: "notification",
		url: "/api/notification",

		notificationFileTemplate: _.template(notificationFileTemplate),
		notificationTaskTemplate: _.template(notificationTaskTemplate),

		events: {
			"click a.deleteNotification": "deleteNotification"
		},

		initialize: function () {
			_.bindAll(this, "render", "deleteNotification");
		},

		render: function () {
			if (this.model.get("notificationType") === 2) {
				this.$el.html(this.notificationFileTemplate({
					fileName: this.model.get("fileName"),
					firstName: this.model.get("firstName"),
					lastName: this.model.get("lastName"),
					actionTime: this.model.get("actionTime")
				}));
			} 
			else if (this.model.get("notificationType") === 3) {
				this.$el.html(this.notificationTaskTemplate({
					taskName: this.model.get("taskName"),
					firstName: this.model.get("firstName"),
					lastName: this.model.get("lastName"),
					taskDueDate: this.model.get("taskDueDate")
				}));
			}

			return this;
		},

		deleteNotification: function () {
			var self = this;

			this.model.destroy({
				success: function (model, response) {
					console.log("success destroy");
					self.remove();
				}
			});
		}
	});

	return NotificationView;
});