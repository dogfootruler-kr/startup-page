export interface AiChatProvider {
  id: string;
  name: string;
  /** Chat home page, opened when no prompt is given. */
  homeUrl: string;
  /** Builds a URL that opens a new conversation prefilled with the prompt. */
  promptUrl: (prompt: string) => string;
}

// Both providers rely on the browser's own login session (cookies), so a
// Claude/ChatGPT subscription works directly — no API key involved.
export const AI_CHAT_PROVIDERS: AiChatProvider[] = [
  {
    id: "claude",
    name: "Claude",
    homeUrl: "https://claude.ai/new",
    promptUrl: (prompt) => `https://claude.ai/new?q=${encodeURIComponent(prompt)}`,
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    homeUrl: "https://chatgpt.com/",
    promptUrl: (prompt) => `https://chatgpt.com/?q=${encodeURIComponent(prompt)}`,
  },
];

export const DEFAULT_AI_CHAT_SETTINGS = {
  enabled: true,
  provider: "claude",
  openIn: "popup",
};

export function getAiChatProvider(providerId?: string): AiChatProvider {
  return (
    AI_CHAT_PROVIDERS.find((provider) => provider.id === providerId) ||
    AI_CHAT_PROVIDERS[0]
  );
}
