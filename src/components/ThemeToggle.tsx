"use client";

import { useSyncExternalStore } from "react";

function subscribe(cb: () => void) {
  const mo = new MutationObserver(cb);
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => mo.disconnect();
}
const current = () => document.documentElement.dataset.theme === "dark";

export function ThemeToggle() {
  // サーバーでは常にライト扱い。クライアントで実際の値に切り替わる。
  const dark = useSyncExternalStore(subscribe, current, () => false);
  return (
    <button
      type="button"
      className="theme"
      aria-label={dark ? "ライトテーマに切り替え" : "ダークテーマに切り替え"}
      aria-pressed={dark}
      onClick={() => {
        const next = dark ? "light" : "dark";
        document.documentElement.dataset.theme = next;
        try {
          localStorage.setItem("theme", next);
        } catch {
          /* 保存できなくても切り替えは効く */
        }
      }}
    >
      <span key={dark ? "dark" : "light"} className="theme-icon" aria-hidden="true">
        {dark ? "☀" : "☾"}
      </span>
    </button>
  );
}
