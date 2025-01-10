// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Ty',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Good night,',

	// Layout
	bentoLayout: 'lists', // 'bento', 'lists', 'buttons'

	// Weather
	// weatherKey: 'InsertYourAPIKeyHere123456', // Write here your API Key
	// weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	// weatherUnit: 'F', // 'F', 'C'
	// language: 'en', // More languages in https://openweathermap.org/current#multi

	// trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	// defaultLatitude: '37.775',
	// defaultLongitude: '-122.419',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'https://mail.protonmail.com/',
		},
		{
			id: '3',
			name: 'Todoist',
			icon: 'trello',
			link: 'https://todoist.com',
		},
		{
			id: '4',
			name: 'Calendar',
			icon: 'calendar',
			link: 'https://calendar.google.com/calendar/r',
		},
		{
			id: '5',
			name: 'Reddit',
			icon: 'glasses',
			link: 'https://reddit.com',
		},
		{
			id: '6',
			name: 'Odysee',
			icon: 'youtube',
			link: 'https://odysee.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'school',
			id: '1',
			links: [
				{
					name: 'St-Clair',
					link: 'https://my.stclaircollege.ca/sites/student/Pages/Home.aspx',
				},
				{
					name: 'Blackboard',
					link: 'https://lms.stclaircollege.ca/ultra/stream',
				},
				{
					name: 'Mail',
					link: 'https://outlook.office.com/mail/',
				},
				{
					name: 'Timetable',
					link: 'https://cssso.stclaircollege.ca/psp/ps/EMPLOYEE/SA/c/SA_LEARNER_SERVICES.SSR_SSENRL_SCHD_W.GBL?FolderPath=PORTAL_ROOT_OBJECT.CO_EMPLOYEE_SELF_SERVICE.HCCC_ENROLLMENT.HC_SSR_SSENRL_SCHD_W_GBL&IsFolder=false&IgnoreParamTempl=FolderPath,IsFolder',
				},
			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'Reddit',
					link: 'https://new.reddit.com/',
				},
				{
					name: 'Youtube',
					link: 'https://www.youtube.com/',
				},
				{
					name: 'Patreon',
					link: 'https://www.patreon.com/home',
				},
				{
					name: 'Github',
					link: 'https://github.com/ty-grant',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'money',
			id: '1',
			links: [
				{
					name: 'r/edh',
					link: 'https://www.reddit.com/r/edh/',
				},
				{
					name: 'edhrec',
					link: 'https://edhrec.com/',
				},
				{
					name: 'Scryfall',
					link: 'https://scryfall.com/',
				},
				{
					name: 'Moxfield',
					link: 'https://www.moxfield.com/',
				},
			],
		},
		{
			icon: 'binary',
			id: '2',
			links: [
				{
					name: 'fmhy',
					link: 'https://fmhy.net/',
				},
				{
					name: 'RealDebrid',
					link: 'https://real-debrid.com/',
				},
				{
					name: '1337x',
					link: 'https://1337x.to/',
				},
				{
					name: 'r/piracy',
					link: 'https://www.reddit.com/r/Piracy/',
				},
			],
		},
	],
};
