define([
	'jquery',
	'underscore',
	'backbone',
	'collections/notification-collection',
	'views/notification-view'
], function($, _, Backbone, NotificationCollection, NotificationView) {
	var AppView = Backbone.View.extend({
		el: $("#app"),

		events: {
			"click button#show-notifications" : "showNotifications"
		},

		initialize: function() {
			_.bindAll(this, "render", "showNotifications");

			this.collection = new NotificationCollection();

			this.collection.on("add", this.render);
		},

		render: function(notification) {
			var notificationView = new NotificationView({
				model: notification
			});

			$("#notification-list", this.el).append(notificationView.render().el);
		},

		showNotifications: function() {
			var self = this;

			this.collection.fetch({ add: true });
		}
	});

	return AppView;
});