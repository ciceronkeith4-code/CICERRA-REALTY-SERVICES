import { useEffect } from "react";

export function JotformAgent() {
  useEffect(() => {
    const scriptId = "jotform-agent-script";
    const jotformScriptSrc = "https://cdn.jotfor.ms/agent/embedjs/019f32590e4870008bdc26a2562d66b08f68/embed.js";

    // Check if the script already exists in the document to prevent duplicate injection
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    const initializeAgent = () => {
      const anyWindow = window as any;
      if (anyWindow.AgentInitializer && typeof anyWindow.AgentInitializer.init === "function") {
        try {
          anyWindow.AgentInitializer.init({
            agentRenderURL: "https://www.jotform.com/agent/019f32590e4870008bdc26a2562d66b08f68",
            rootId: "JotformAgent-019f32590e4870008bdc26a2562d66b08f68",
            formID: "019f32590e4870008bdc26a2562d66b08f68",
            contextID: "019f32711a8870009fc109eccfecb8fb3b5a",
            initialContext: "",
            queryParams: ["skipWelcome=1", "maximizable=1"],
            domain: "https://www.jotform.com",
            isDraggable: false,
            background: "linear-gradient(180deg, #4a90e2 0%, #161b22 100%)",
            chatBackgroundColor: "#FFFFFF",
            buttonBackgroundColor: "#246506",
            buttonIconColor: "#FFFFFF",
            inputTextColor: "#06367E",
            variant: false,
            customizations: {
              greeting: "Yes",
              greetingMessage: "Hi! How can I assist you?",
              openByDefault: "No",
              pulse: "Yes",
              position: "right",
              autoOpenChatIn: "1",
              layout: "minimal",
              size: "sm", // Set size to 'sm' to make it compact and not too large
              placeholder: "Ask AI",
              chatbotLayoutControls: "No",
              chatbotLayoutType: "overlay",
              selectedPosition: "right-bottom"
            },
            isVoice: false,
            isVoiceWebCallEnabled: true
          });
        } catch (e) {
          console.error("Error initializing Jotform AI Agent:", e);
        }
      }
    };

    if (!script) {
      script = document.createElement("script");
      script.src = jotformScriptSrc;
      script.id = scriptId;
      script.async = true;
      script.onload = initializeAgent;
      script.onerror = (err) => {
        console.error("Failed to load Jotform AI Agent script:", err);
      };
      document.body.appendChild(script);
    } else {
      // Re-initialize if the script was already loaded
      initializeAgent();
    }

    // Add CSS stylesheet rules to restrict the dimensions of the chatbot iframe/container 
    // and prevent it from blocking interactions on the rest of the website.
    const styleId = "jotform-agent-custom-styles";
    let styleElement = document.getElementById(styleId);
    if (!styleElement) {
      styleElement = document.createElement("style");
      styleElement.id = styleId;
      styleElement.textContent = `
        /* Prevent the container from intercepting clicks on the website when chatbot is closed/minimized */
        #JotformAgent-019f32590e4870008bdc26a2562d66b08f68 {
          pointer-events: none !important;
          max-width: 380px !important;
          max-height: 580px !important;
          width: 380px !important;
          height: 580px !important;
          bottom: 20px !important;
          right: 96px !important; /* Shifted left to avoid merging with Viber and Back To Top buttons */
        }
        
        /* Re-enable pointer events for the actual chatbot elements */
        #JotformAgent-019f32590e4870008bdc26a2562d66b08f68 * {
          pointer-events: auto !important;
        }

        /* Ensure the iframe scales properly within our container constraints */
        #JotformAgent-019f32590e4870008bdc26a2562d66b08f68 iframe {
          max-width: 100% !important;
          max-height: 100% !important;
          border-radius: 12px !important;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15) !important;
        }

        /* Responsive behavior for mobile screens */
        @media (max-width: 480px) {
          #JotformAgent-019f32590e4870008bdc26a2562d66b08f68 {
            width: calc(100% - 96px) !important;
            max-width: 100% !important;
            height: 70vh !important;
            max-height: 480px !important;
            bottom: 16px !important;
            right: 80px !important; /* Shifted left on mobile to avoid Viber button */
          }
        }
      `;
      document.head.appendChild(styleElement);
    }

    // Cleanup on component unmount
    return () => {
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }

      const styleToRemove = document.getElementById(styleId);
      if (styleToRemove) {
        styleToRemove.remove();
      }

      const dynamicScripts = document.querySelectorAll('script[src*="for-embedded-agent.js"]');
      dynamicScripts.forEach((el) => el.remove());

      const rootDiv = document.getElementById("JotformAgent-019f32590e4870008bdc26a2562d66b08f68");
      if (rootDiv) {
        rootDiv.innerHTML = "";
      }
    };
  }, []);

  return (
    <div
      id="JotformAgent-019f32590e4870008bdc26a2562d66b08f68"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 999999,
      }}
    />
  );
}
