interface IMenuItem {
  title: string;
  href: string;
}

export const menuItems: IMenuItem[] = [
  {
    title: "News",
    href: "/topic/news",
  },
  {
    title: "Reviews",
    href: "/topic/reviews",
  },
  {
    title: "Best",
    href: "/topic/best",
  },
  {
    title: "Devices",
    href: "/topic/devices",
  },
];

export const siteInfo = {
  title: "Ferrata",
  description: "Ferrata Guide",
};
