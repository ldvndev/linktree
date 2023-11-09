import { ReactNode } from "react";

interface SocialMediaLinksProps {
  url: string;
  children: ReactNode;
}

export function SocialMediaLinks({ url, children }: SocialMediaLinksProps) {
  return(
    <a href={url} rel="noopener noreferrer" target="_blank">
      {children}
    </a>
  );
}