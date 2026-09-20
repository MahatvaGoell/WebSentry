"use client";

import { githubLoginUrl } from "@/lib/api";
import { useSession } from "@/lib/useSession";

export function GitHubAccount() {
  const { user } = useSession();

  return (
    <nav aria-label="Account" className="fixed right-4 top-3 z-50 sm:right-[5.5vw]">
      <a
        href={user ? "/settings" : githubLoginUrl()}
        className="flex min-h-11 max-w-[calc(100vw-2rem)] items-center gap-2 rounded-full border border-parchment/25 bg-[#0E0E0D]/90 px-4 py-2 font-mono text-xs text-parchment backdrop-blur-md transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-parchment"
        aria-label={user ? `GitHub account settings for ${user.github_login}` : undefined}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0">
          <path d="M12 .75a11.25 11.25 0 0 0-3.558 21.923c.563.104.768-.244.768-.542 0-.267-.01-.975-.015-1.914-3.13.68-3.79-1.508-3.79-1.508-.512-1.3-1.25-1.646-1.25-1.646-1.023-.7.077-.686.077-.686 1.132.08 1.728 1.162 1.728 1.162 1.006 1.724 2.64 1.226 3.282.938.102-.73.394-1.227.716-1.51-2.5-.284-5.128-1.25-5.128-5.565 0-1.23.44-2.233 1.16-3.02-.117-.285-.503-1.43.11-2.98 0 0 .945-.303 3.094 1.153A10.79 10.79 0 0 1 12 6.177c.957.004 1.92.13 2.82.38 2.148-1.457 3.09-1.154 3.09-1.154.615 1.55.229 2.695.113 2.98.722.787 1.158 1.79 1.158 3.02 0 4.326-2.632 5.278-5.14 5.557.404.35.765 1.041.765 2.098 0 1.515-.014 2.737-.014 3.108 0 .3.203.65.774.54A11.252 11.252 0 0 0 12 .75Z" />
        </svg>
        <span className="truncate">{user ? `@${user.github_login}` : "Sign in with GitHub"}</span>
      </a>
    </nav>
  );
}
