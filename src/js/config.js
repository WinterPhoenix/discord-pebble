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
				"defaultValue": "Save"
			}
		]
	},
];