const defaultConfig = {
	username: "bruno",
	theme: {
		backgroundColor: "#1e212b",
		windowColor: "#282a36",
		glowColor: "#bd93f945",
		white: "#bfbfbf",
		gray: "#97989d",
		black: "#000000",
		red: "#ff5555",
		green: "#50fa7b",
		yellow: "#f1fa8c",
		blue: "#bd93f9",
		magenta: "#ff79c6",
		cyan: "#8be9fd",
		violet: "#bd93f9",
		orange: "#ffb86c"
	},
	wallpaper: {
		url: "",
		easing: "ease-in-out",
		fadeIn: true,
		blur: true
	},
	terminal: {
		fixedHeight: true,
		windowGlow: true,
		textGlow: false
	},
	prompt: {
		ctrlC: true,
		placeholder: "command...",
		placeholderColor: "gray",
		userColor: "green",
		atColor: "gray",
		hostColor: "magenta",
		promptColor: "magenta",
		promptSymbol: "❯",
		caretColor: "green",
		selectionBg: "yellow",
		selectionFg: "black"
	},
	fetch: {
		timeFormat: "HH:mm",
		dateFormat: "DD/MM/YYYY",
		titleColor: "yellow",
		image: "icon.svg",
		data: [
			"Time: {time}",
			"Date: {date}",
			"{seperator}",
			"OS: {osName} {osVersion}",
			"Browser: {browser} {browserVersion}",
			"Engine: {engineName}",
			"{seperator}",
			"{colors}"
		]
	},
	urlLaunch: {
		target: "_blank",
		defaultColor: "white",
		hoverColor: "violet"
	},
	search: {
		default: "https://google.com/search?q=",
		target: "_blank",
		shortcutRegex: "([A-Za-z0-9]+) (.*)",
		shortcuts: [
			{
				alias: "g",
				name: "Google Search",
				url: "https://google.com/search?q={}"
			},
			{
				alias: "d",
				name: "DuckDuckGo Search",
				url: "https://duckduckgo.com/?q={}"
			},
			{
				alias: "b",
				name: "Brave Search",
				url: "https://search.brave.com/search?q={}"
			},
			{
				alias: "gh",
				name: "Github Search",
				url: "https://github.com/search?q={}"
			},
			{
				alias: "s",
				name: "Stack Overflow Search",
				url: "https://stackoverflow.com/search?q={}"
			},
			{
				alias: "r",
				name: "Subreddit Search",
				url: "https://reddit.com/r/{}"
			},
			{
				alias: "w",
				name: "Wikipedia Search",
				url: "https://en.wikipedia.org/wiki/{}"
			}
		]
	},
	sections: {
		list: [
			{
				title: "General",
				color: "green",
				align: "left",
				links: [
					{
						name: "Portfolio",
						url: "https://brunocecilio.com",
						icon: "mdi:web"
					},
					{
						name: "GPT",
						url: "https://chat.openai.com/",
						icon: "simple-icons:openai"
					},
					{
						name: "Bing Chat",
						url: "https://www.bing.com/search?q=Bing+AI&showconv=1&FORM=hpcodx",
						icon: "bi:bing"
					}
				]
			},
			{
				title: "Dev",
				color: "magenta",
				align: "left",
				links: [
					{
						name: "GitHub",
						url: "https://github.com",
						icon: "mdi:github"
					},
					{
						name: "GitLab",
						url: "https://gitlab.com",
						icon: "ph:gitlab-logo-simple-fill"
					},
					{
						name: "Dev.to",
						url: "https://dev.to",
						icon: "material-symbols:logo-dev"
					}
				]
			},
			{
				title: "Social",
				color: "violet",
				align: "left",
				links: [
					{
						name: "Instagram",
						url: "https://instagram.com/",
						icon: "mdi:instagram"
					},
					{
						name: "Reddit",
						url: "https://reddit.com",
						icon: "mdi:reddit"
					}
				]
			},
			{
				title: "Gaming",
				color: "cyan",
				align: "left",
				links: [
					{
						name: "Steam",
						url: "https://store.steampowered.com/",
						icon: "mdi:steam"
					},
					{
						name: "Epic",
						url: "https://store.epicgames.com/pt-BR/",
						icon: "simple-icons:epicgames"
					}
				]
			},
			{
				title: "Study",
				color: "blue",
				align: "left",
				links: [
					{
						name: "Alura",
						url: "https://unibb.alura.com.br/",
						icon: "teenyicons:screen-alt-outline"
					},
					{
						name: "Gran",
						url: "https://www.grancursosonline.com.br/aluno/espaco",
						icon: "healthicons:g"
					},
					{
						name: "UniBB",
						url: "https://www.unibb.com.br/",
						icon: "arcticons:bb"
					}
				]
			},
			{
				title: "Watch",
				color: "yellow",
				align: "left",
				links: [
					{
						name: "Youtube",
						url: "https://www.youtube.com/",
						icon: "mdi:youtube"
					},
					{
						name: "Prime Video",
						url: "https://www.primevideo.com/",
						icon: "arcticons:amazon-prime-video"
					},
					{
						name: "Disney+",
						url: "https://www.disneyplus.com/",
						icon: "tabler:brand-disney"
					},
					{
						name: "Star+",
						url: "https://www.starplus.com/",
						icon: "material-symbols:star-outline"
					},
					{
						name: "Netflix",
						url: "https://www.netflix.com/",
						icon: "mdi:netflix"
					}
				]
			}
		]
	}
}

export default defaultConfig
