export const config = {
  siteMeta: {
    title: "Tech Blog Hub",
    teamName: "nextscape Inc.",
    description: "ネクストスケープのエンジニアが書いた技術ブログを収集したサイトです。",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://tech-blog-hub.nextscape.net"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "コーポレートサイト",
      href: "https://www.nextscape.net",
    },
    {
      title: "採用サイト",
      href: "https://www.nextscape.net/recruit",
    },
    {
      title: "Github",
      href: "https://github.com/nextscape",
    },
  ],
};
