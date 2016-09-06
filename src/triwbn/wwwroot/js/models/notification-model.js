define([
	'backbone'
], function(Backbone) {
	var NotificationModel = Backbone.Model.extend({
		idAttribute: "notificationGuid",
		defaults: {
			"notificationType": 1,
			"notificationGuid": "",
			"actionType": "",
			"actionTime": "",
			"firstName": "",
			"lastName": "",
			"fileName": null,
			"taskName": null,
			"taskDueDate": null,
			"noteName": ""
		}
	});

	return NotificationModel;
});