const chatInput = document.querySelector("#chat-input");
const sendButton = document.querySelector("#send-btn");
const chatContainer = document.querySelector(".chat-container");
let userText = null;
const API_KEY = " https://github.com/RohithKumar5860/Chatgpt-clone/security/secret-scanning/unblock-secret/2oxhkaK3pDBcTDIw1ky9t80ov7j ";


const createElement = (html, className) => {
  // create the new and apply chat, specified class and set html content of div
  const chatDiv = document.createElement("div");
  chatDiv.classList.add("chat", className);
  chatDiv.innerHTML = html;
  return chatDiv; // this return the created chat div 
} 

const getchatReaponse = async () => {
  const API_URL = "https://api.openai.com/v1/chat/completions";

  // Define the properties and data for the API request
  const requestOpitions = {
    method: "POST",
    headers:{
      "Content-type": "application/json",
      "Authorization": `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: userText,
      max_tokens: 2048,
      temperature: 0.2,
      n: 1,
      stop: null
    })
  }
  try{
    const response = await (await fetch(API_URL, requestOpitions)).json();
    console.log(response);
  }catch(error) {
    console.log(error);
  }
}

const showTypingAnimation = () => {
  const html = <div class="chat-content">
                  <div class="chat-details">
                    <img src="chatgptlogo.jpg">
                    <div class="typing-animation">
                      <div class="typing-dot" style="--delay: 0.2s"></div>
                      <div class="typing-dot" style="--delay: 0.3s"></div>
                      <div class="typing-dot" style="--delay: 0.4s"></div>
                    </div>
                  </div>
                  <span class="material-symbols-rounded">content_copy</span>
                </div>;
const incomingChatDiv = createElement(html, "incoming")
chatContainer.appendChild(incomingChatDiv);
getchatReaponse();

}


const handleOutgoingChat = () => {}
  userText = chatInput.value.trim();// to get the chat input
  const html = <div class="chat-content">
                  <div class="chat-details">
                    <img class="image-user" src="user.jpg">
                    <p>${userText}</p>
                  </div>
                </div>;
  // create the outgoing chat div with user message and append it to chat container
  const outgoingChatDiv = createElement(html, "outgoing")
  chatContainer.appendChild(outgoingChatDiv);
  setTimeout(showTypingAnimation, 500);

 
  
}

sendButton.addEventListener("click",handleOutgoingChat);