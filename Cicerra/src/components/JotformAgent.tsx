import { useEffect } from "react";

export function JotformAgent() {
  useEffect(() => {
    const scriptId = "jotform-agent-script";
    const jotformScriptSrc = "https://cdn.jotfor.ms/agent/embedjs/019f32590e4870008bdc26a2562d66b08f68/embed.js";

    // Check if the script already exists in the document to prevent duplicate injection
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement("script");
      script.src = jotformScriptSrc;
      script.id = scriptId;
      script.async = true;
      
      // Handle potential script loading errors
      script.onerror = (err) => {
        console.error("Failed to load Jotform AI Agent script:", err);
      };

      document.body.appendChild(script);
    } else {
      // If script already exists (e.g. fast page transitions), re-initialize if AgentInitializer is available
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
              size: "md",
              placeholder: "Ask AI",
              chatbotLayoutControls: "No",
              chatbotLayoutType: "overlay",
              selectedPosition: "right-bottom"
            },
            isVoice: false,
            isVoiceWebCallEnabled: true
          });
        } catch (e) {
          console.error("Error re-initializing Jotform AI Agent:", e);
        }
      }
    }

    // Cleanup on component unmount
    return () => {
      // Remove main script tag
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }

      // Clean up Jotform's dynamic agent script from head if present
      const dynamicScripts = document.querySelectorAll('script[src*="for-embedded-agent.js"]');
      dynamicScripts.forEach((el) => el.remove());

      // Clear internal contents of the chatbot container to prevent visual duplicate traces
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
        zIndex: 999999, // Keep above other page elements
      }}
      className="jotform-agent-container"
    />
  );
}
