import { CompassIcon, HomeIcon, SparkleIcon } from "lucide-react";
import Link from "next/link";
import { siteInfo } from "@/lib/utils";

export const Footer = () => {
  return (
    <footer className="border-t bg-muted/20">
      <div className="wrapper px-12">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
                <SparkleIcon className="size-4 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-primary">
                {siteInfo.name}
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              {siteInfo.description}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm">Navigation</h3>
            <nav className="flex flex-col gap-3">
              <Link
                href="/"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <HomeIcon className="size-4" />
                <span>Home</span>
              </Link>
              <Link
                href="/explore"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <CompassIcon className="size-4" />
                <span>Explore</span>
              </Link>
              <Link
                href="/submit"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <SparkleIcon className="size-4" />
                <span>Submit Project</span>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
