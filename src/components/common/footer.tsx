import { siteInfo } from "@/lib/utils";

export const Footer = () => {
  return (
    <footer className="border-t bg-muted/20 py-12">
      <div className="wrapper">{siteInfo.name} Inc. All rights reserved.</div>
    </footer>
  );
};
