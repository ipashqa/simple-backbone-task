define([
	'backbone',
	'models/notification-model'
], function (Backbone, NotificationModel) {
	var NotificationCollection = Backbone.Collection.extend({
		model: NotificationModel,
		url: "/api/notification",
	});

	return NotificationCollection;
});