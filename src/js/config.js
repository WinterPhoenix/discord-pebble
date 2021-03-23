module.exports = [
	{
		"type": "section",
		"items": [
			{
				"type": "heading",
				"defaultValue": "Config"
			},
			{
				"type": "input",
				"appKey": "token",
				"defaultValue": "",
				"label": "Token",
				"attributes": {
					"placeholder": "enter your token",
					"limit": 2000,
				}
			},
			{
				"type": "text",
				"defaultValue": "Need help getting your token? <a href = \"https://discordhelp.net/discord-token\"> Here's a quick guide. </a>"
			},
			{
				"type": "submit",
				"defaultValue": "Retrieve contacts"
			},
			{
				"type": "text",
				"defaultValue": "Conversations will be displayed sorted by recency at the time of retrieval, and will stay in that order until you retrieve your contacts again.",
			}
		]
	},
];