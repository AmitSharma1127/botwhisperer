function initializeChatBubble() {
  const showChatUI = false;
  const showBubble = true;
  const isMobileView = false;
  const chatbotId = 'YOUR_CHATBOT_ID'; // Replace with your chatbot ID
  const srcURL = 'http://localhost:3000/iframe-widget?id=' + chatbotId;

  const openChatUI = () => {
    setShowChatUI(!showChatUI);
    if (isMobileView) {
      setShowBubble(false);
    }
  };

  const renderChatComponents = () => {
    if (!isMobileView && showBubble && !showChatUI) {
      const chatBubble = document.createElement('div');
      chatBubble.id = 'chat-bubble';
      chatBubble.style.position = 'fixed';
      chatBubble.style.bottom = '20px';
      chatBubble.style.left = '20px';
      chatBubble.style.width = '60px';
      chatBubble.style.height = '60px';
      chatBubble.style.borderRadius = '30px';
      chatBubble.style.backgroundColor = '#007bff';
      chatBubble.style.cursor = 'pointer';
      chatBubble.style.zIndex = '9999';
      chatBubble.onclick = openChatUI;

      document.body.appendChild(chatBubble);
    } else if (showChatUI) {
      const chatUI = document.createElement('iframe');
      chatUI.src = srcURL;
      chatUI.style.position = isMobileView ? 'fixed' : 'fixed';
      chatUI.style.top = isMobileView ? '0' : '';
      chatUI.style.left = isMobileView ? '0' : '';
      chatUI.style.width = isMobileView ? '100%' : '400px';
      chatUI.style.height = isMobileView ? '100%' : '80%';
      chatUI.style.borderStyle = 'none';
      chatUI.style.zIndex = '9998';
      chatUI.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.25)';
      chatUI.style.backgroundColor = isMobileView ? '#fff' : '#fff';
      chatUI.style.animation = 'ease-in 1s';

      document.body.appendChild(chatUI);
    }
  };

  renderChatComponents();
}

initializeChatBubble();
