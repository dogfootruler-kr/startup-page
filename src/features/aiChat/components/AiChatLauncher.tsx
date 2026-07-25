import React from "react";
import { useRegisterActions } from "kbar";
import { HiOutlineSparkles, HiPaperAirplane, HiXMark } from "react-icons/hi2";

import { useSettingsStore } from "@/features/settings/stores";
import {
  AI_CHAT_PROVIDERS,
  getAiChatProvider,
} from "@/features/aiChat/constants";
import { cn } from "@/lib/utils";

// claude.ai and chatgpt.com forbid iframe embedding, so the launcher opens the
// real site in a popup window instead. Auth comes from the browser session
// (the user's subscription) — no API key.
function openAiChat(providerId: string, prompt: string, openIn: string) {
  const provider = getAiChatProvider(providerId);
  const trimmed = prompt.trim();
  const url = trimmed ? provider.promptUrl(trimmed) : provider.homeUrl;
  const features =
    openIn === "tab"
      ? "noopener,noreferrer"
      : "popup=yes,width=520,height=780,noopener,noreferrer";
  window.open(url, "_blank", features);
}

export default function AiChatLauncher() {
  const aiChat = useSettingsStore((state) => state.settings.aiChat);
  const persistSettings = useSettingsStore((state) => state.persistSettings);

  const enabled = aiChat?.enabled ?? true;
  const providerId = aiChat?.provider ?? "claude";
  const openIn = aiChat?.openIn ?? "popup";
  const provider = getAiChatProvider(providerId);

  const [open, setOpen] = React.useState(false);
  const [prompt, setPrompt] = React.useState("");
  const panelRef = React.useRef<HTMLDivElement>(null);
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  const kbarActions = React.useMemo(
    () =>
      AI_CHAT_PROVIDERS.map((item) => ({
        id: `ask-${item.id}`,
        name: `Ask ${item.name}`,
        section: "AI Chat",
        perform: () => openAiChat(item.id, "", openIn),
      })),
    [openIn],
  );
  useRegisterActions(kbarActions, [kbarActions]);

  React.useEffect(() => {
    if (!open) {
      return;
    }

    textareaRef.current?.focus();

    const handlePointerDown = (event: MouseEvent) => {
      if (!panelRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  if (!enabled) {
    return null;
  }

  const selectProvider = (nextProviderId: string) => {
    void persistSettings((prev) => ({
      ...prev,
      aiChat: { ...prev.aiChat, provider: nextProviderId },
    }));
    textareaRef.current?.focus();
  };

  const submit = () => {
    openAiChat(providerId, prompt, openIn);
    setPrompt("");
    setOpen(false);
  };

  return (
    <div ref={panelRef} className="fixed bottom-5 right-5 z-40">
      {open ? (
        <div className="w-80 rounded-xl border border-border bg-card/95 p-3 shadow-xl backdrop-blur">
          <div className="mb-2 flex items-center justify-between gap-2">
            <div className="flex gap-1 rounded-lg bg-muted/50 p-0.5">
              {AI_CHAT_PROVIDERS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => selectProvider(item.id)}
                  className={cn(
                    "cursor-pointer rounded-md px-2.5 py-1 text-xs font-medium transition",
                    item.id === provider.id
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                  aria-pressed={item.id === provider.id}
                >
                  {item.name}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="cursor-pointer rounded-md p-1 text-muted-foreground transition hover:text-foreground"
              aria-label="Close AI chat"
            >
              <HiXMark className="size-4" />
            </button>
          </div>
          <textarea
            ref={textareaRef}
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                submit();
              }
            }}
            rows={3}
            placeholder={`Ask ${provider.name} anything…`}
            className="w-full resize-none rounded-lg border border-input bg-input/45 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground shadow-sm transition focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"
          />
          <div className="mt-2 flex items-center justify-between gap-2">
            <p className="text-[11px] leading-snug text-muted-foreground">
              Opens {provider.name} in a {openIn === "tab" ? "new tab" : "popup"} using
              your own login.
            </p>
            <button
              type="button"
              onClick={submit}
              className="flex cursor-pointer items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground shadow-sm transition hover:opacity-90"
            >
              <HiPaperAirplane className="size-3.5" />
              {prompt.trim() ? "Send" : "Open"}
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex size-12 cursor-pointer items-center justify-center rounded-full border border-border/60 bg-card/90 text-foreground shadow-lg backdrop-blur transition hover:scale-105 hover:bg-accent/70"
          title={`Ask ${provider.name}`}
          aria-label="Open AI chat launcher"
        >
          <HiOutlineSparkles className="size-6" />
        </button>
      )}
    </div>
  );
}
