export type NavItem = {
  title: string;
  href: string;
};

export type MenuItem = {
  title: string;
  href: string;
  description?: string;
  icon?: string;
  disabled?: boolean;
};

export type SectionProps = {
  id: string;
  className?: string;
};

export type SocialLink = {
  platform: string;
  url: string;
  icon: React.ReactNode;
};

export type ContactInfo = {
  type: string;
  value: string;
  icon: React.ReactNode;
};

export type ProjectFilter = "all" | "web" | "mobile" | "ui";

export type ProjectLink = {
  type: "preview" | "code" | "case-study";
  url: string;
  label: string;
  icon: React.ReactNode;
};
