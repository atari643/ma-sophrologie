"use client";

import { useEffect } from "react";

interface ClientHydrationWrapperProps {
  children: React.ReactNode;
}

export function ClientHydrationWrapper({ children }: ClientHydrationWrapperProps) {
  useEffect(() => {
    // Supprimer les attributs ajoutés par les extensions de navigateur après l'hydratation
    const htmlElement = document.documentElement;
    
    // Liste des attributs couramment ajoutés par les extensions
    const extensionAttributes = [
      'data-lt-installed', // LanguageTool
      'data-new-gr-c-s-check-loaded', // Grammarly
      'data-gr-ext-installed', // Grammarly
      'cz-shortcut-listen', // ColorZilla
      'data-darkreader-mode', // Dark Reader (si problématique)
      'data-darkreader-scheme', // Dark Reader (si problématique)
    ];

    extensionAttributes.forEach(attr => {
      if (htmlElement.hasAttribute(attr)) {
        htmlElement.removeAttribute(attr);
      }
    });

    // Observer pour supprimer les attributs s'ils sont ajoutés dynamiquement
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.target === htmlElement) {
          const attributeName = mutation.attributeName;
          if (attributeName && extensionAttributes.includes(attributeName)) {
            htmlElement.removeAttribute(attributeName);
          }
        }
      });
    });

    observer.observe(htmlElement, {
      attributes: true,
      attributeFilter: extensionAttributes,
    });

    // Nettoyage
    return () => {
      observer.disconnect();
    };
  }, []);

  return <>{children}</>;
}
