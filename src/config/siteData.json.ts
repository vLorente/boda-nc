import iglesia from "@images/Icono-Boho-1.png";
import copas from "@images/Icono-Boho-4.png";
import comida from "@images/Icono-Boho-5.png";
import fiesta from "@images/Icono-Boho-7.png";
import previewImage from "@images/invitacion2.jpeg";

interface ScheduleItem {
	icon: ImageMetadata;
	time: string;
	event: string;
}

interface FeatureCardData {
	largeText: string;
	description: string;
}

export interface SiteDataProps {
	name: String;
	title: string;
	description: string;
	useViewTransitions?: boolean; // defaults to false. Set to true to enable some Astro 3.0 view transitions
	author: {
		name: string;
		email: string;
	};
	previewImage: ImageMetadata;
	defaultImage: {
		src: string;
		alt: string;
	};
	contact: {
		from: string;
		to: string;
		subject: string;
	};
	experiences: {
		indexPage: {
			sortBy: "order" | "date";
			orderBy: "asc" | "desc";
		};
		experiencePage: {
			sortBy: "order" | "date";
			orderBy: "asc" | "desc";
		};
	};
	wedding: {
		date: string;
		account: string;
		dateDetail: {
			wday: string;
			time: string;
			day: string;
			month: string;
			year: string;
		};
		schedule: ScheduleItem[];
		featureData: FeatureCardData[];
	};
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "Nuria & Cristian",
	title: "Boda Nuria & Cristian - Acompañanos en la aventura de nuestras vidas",
	description:
		"En esta web podrás encontrar toda la informacion necesaria para el dia de nuestra boda.",
	useViewTransitions: true,
	author: {
		name: "Crise99 & vLorente",
		email: "",
	},

	// image used for preview cards in social media and meta tags
	previewImage: previewImage,

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/invitacion2.jpeg",
		alt: "Nuria & Cristian",
	},

	contact: {
		from: "Boda Nuria y Cristian <onboarding@resend.dev>",
		to: import.meta.env.RESEND_USER_EMAIL,
		subject: "Nueva confirmación de asistencia",
	},

	experiences: {
		indexPage: {
			sortBy: "order",
			orderBy: "asc",
		},
		experiencePage: {
			sortBy: "order",
			orderBy: "asc",
		},
	},

	wedding: {
		date: "2025-06-08T17:30:00Z",
		account: import.meta.env.BANK_ACCOUNT,
		dateDetail: {
			wday: "Domingo",
			time: "17:30",
			day: "08",
			month: "Junio",
			year: "2025",
		},
		schedule: [
			{ icon: iglesia, time: "17:30", event: "Ceremonia" },
			{ icon: copas, time: "20:00", event: "Cóctel de Bienvenida" },
			{ icon: comida, time: "21:30", event: "Cena" },
			{ icon: fiesta, time: "00:00", event: "Fiesta" },
		],
		featureData: [
			{
				largeText: "13",
				description: `Años Juntos`,
			},
			{
				largeText: "∞",
				description: `Momentos`,
			},
			{
				largeText: "22",
				description: `Destinos`,
			},
		],
	},
};

export default siteData;
