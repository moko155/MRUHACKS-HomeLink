export type Community = {
	id: string;
	name: string;
	description: string;
	memberCount: number;
};

export type HousePart = {
	shape: string;
	color: string;
	texture: string;
};

export type HouseCustomization = {
	roof: HousePart;
	window: HousePart;
	door: HousePart;
};

export type Profile = {
	id: string;
	name: string;
	profilePicture: string;
	house: HouseCustomization;
	achievements: string[];
	hobbies: string[];
	bio: string;
};
