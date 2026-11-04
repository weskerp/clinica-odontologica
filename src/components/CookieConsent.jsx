import { useEffect, useState } from "react";
import { applyConsent } from "../lib/analytics";

const STORAGE_KEY = "clinic_cookie_preferences";

export default function CookieConsent() {
  const [preferences, setPreferences] = useState({
    analytics: false,
    marketing: false,
  });

  const [visible, setVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      const parsed = JSON.parse(saved);
      setPreferences(parsed);
      applyConsent(parsed);
    } else {
      setVisible(true);
    }
  }, []);

  function savePreferences(nextPreferences) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(nextPreferences)
    );

    setPreferences(nextPreferences);
    applyConsent(nextPreferences);
    setVisible(false);
    setSettingsOpen(false);
  }

  if (!visible) {
    return (
      <button
        className="cookie-settings-trigger"
        onClick={() => {
          setVisible(true);
          setSettingsOpen(true);
        }}
      >
        Preferências de cookies
      </button>
    );
  }

  return (
    <div className="cookie-banner" role="dialog" aria-label="Preferências de cookies">
      <div className="cookie-banner-content">
        <h3>Privacidade e cookies</h3>

        <p>
          Utilizamos cookies necessários para o funcionamento do site.
          Com sua autorização, também utilizamos tecnologias de análise
          e marketing para entender o uso da página e melhorar campanhas.
          Consulte nossa política de privacidade.
        </p>

        {settingsOpen && (
          <div className="cookie-options">
            <label>
              <input type="checkbox" checked disabled />
              Cookies necessários
            </label>

            <label>
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={(e) =>
                  setPreferences((old) => ({
                    ...old,
                    analytics: e.target.checked,
                  }))
                }
              />
              Análise e estatísticas
            </label>

            <label>
              <input
                type="checkbox"
                checked={preferences.marketing}
                onChange={(e) =>
                  setPreferences((old) => ({
                    ...old,
                    marketing: e.target.checked,
                  }))
                }
              />
              Marketing e publicidade
            </label>
          </div>
        )}

        <div className="cookie-actions">
          <button
            onClick={() =>
              savePreferences({
                analytics: false,
                marketing: false,
              })
            }
          >
            Rejeitar opcionais
          </button>

          <button onClick={() => setSettingsOpen(!settingsOpen)}>
            {settingsOpen ? "Fechar opções" : "Personalizar"}
          </button>

          {settingsOpen ? (
            <button
              className="primary"
              onClick={() => savePreferences(preferences)}
            >
              Salvar preferências
            </button>
          ) : (
            <button
              className="primary"
              onClick={() =>
                savePreferences({
                  analytics: true,
                  marketing: true,
                })
              }
            >
              Aceitar todos
            </button>
          )}
        </div>
      </div>
    </div>
  );
}