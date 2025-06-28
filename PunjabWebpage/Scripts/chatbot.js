document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("chat-toggle");
  const chatBox = document.getElementById("chat-box");
  const sendBtn = document.getElementById("send-btn");
  const userInput = document.getElementById("user-input");
  const chatLog = document.getElementById("chat-log");

  toggle.onclick = () => {
    chatBox.classList.toggle("show");
  };

  sendBtn.onclick = () => {
    const message = userInput.value.trim();
    if (!message) return;

    chatLog.innerHTML += `<div><b>You:</b> ${message}</div>`;
    const reply = getBotReply(message);
    chatLog.innerHTML += `<div><b>Bot:</b> ${reply}</div>`;
    userInput.value = "";
    chatLog.scrollTop = chatLog.scrollHeight;
  };

  function getBotReply(message) {
    const msg = message.toLowerCase();

    const corrections = {
      punjab: ["punjaab", "panjab"],
      food: [
        "foood",
        "fod",
        "dish",
        "cuisine",
        "eat",
        "eating",
        "dishes",
        "restaurant",
        "dining",
      ],
      attraction: [
        "atraction",
        "attrection",
        "place",
        "sightseeing",
        "visit",
        "tourist spot",
        "destination",
      ],
      culture: ["cluture", "culcher", "cultre", "tradition", "heritage"],
      festival: ["festivle", "festivel", "fest", "celebration", "event"],
      dance: ["dence", "dans", "bhangra", "giddha"],
      music: ["musick", "musci", "song", "singing", "melody"],
      language: ["langage", "langauge", "speaking", "tongue"],
      people: ["ppl", "persons", "residents", "locals", "population"],
      fun: ["funny", "enjoy", "activities", "games", "sports", "amusement"],
      famous: ["known", "popular", "celebrities", "icons"],
      history: ["histroy", "historie", "past", "origin"],
      religion: ["relgion", "relgious", "faith", "sikhism", "hinduism"],
      games: ["kabaddi", "play", "sports", "tournament", "match"],
      weather: [
        "weather",
        "climate",
        "temperature",
        "rain",
        "rainfall",
        "sunny",
      ],
      hotel: ["hotel", "stay", "accommodation", "lodge", "resort"],
      transport: ["transport", "bus", "train", "rail", "flight", "airport"],
      city: ["city", "cities", "towns", "chandigarh", "amritsar", "ludhiana"],
      river: ["river", "rivers", "satluj", "beas", "ravi", "chenab", "jhelum"],
      geography: ["geography", "location", "area", "state", "border"],
      shop: ["shop", "shopping", "bazaar", "market", "mall"],
      transport: [
        "transportation",
        "bus",
        "train",
        "flight",
        "airport",
        "station",
      ],
    };

    const keywordMap = {};
    for (const [key, variants] of Object.entries(corrections)) {
      variants.forEach((v) => (keywordMap[v] = key));
      keywordMap[key] = key;
    }

    const correctedMsg = msg
      .split(/\s+/)
      .map((w) => keywordMap[w] || w)
      .join(" ");

    if (correctedMsg.includes("food")) {
      return "Must-try dishes: Sarson da Saag with Makki di Roti, Amritsari Kulcha, Chole Bhature, Butter Chicken, and refreshing Lassi!";
    } else if (correctedMsg.includes("attraction")) {
      return "Top attractions: Golden Temple, Jallianwala Bagh, Wagah Border Ceremony, Rock Garden, Qila Mubarak, Virasat-e-Khalsa.";
    } else if (correctedMsg.includes("culture")) {
      return "Punjab culture: Bhangra, Giddha, folk music, traditional attire (phulkari, turban), and Punjabiyat spirit!";
    } else if (correctedMsg.includes("festival")) {
      return "Festivals: Lohri, Baisakhi, Hola Mohalla, Guru Nanak Jayanti, Diwali, Teej, and Maghi.";
    } else if (correctedMsg.includes("dance")) {
      return "Famous dances: Bhangra (men), Giddha (women), Jhumar, Sammi, Malwai Giddha.";
    } else if (correctedMsg.includes("music")) {
      return "Music genres: Punjabi folk, classical, Sufi; artists: Gurdas Maan, Nusrat Fateh Ali Khan, modern Punjabi pop.";
    } else if (correctedMsg.includes("language")) {
      return "Primary language: Punjabi (Gurmukhi script); English and Hindi also widely spoken.";
    } else if (correctedMsg.includes("people")) {
      return "People: Known for their hospitality; major communities: Sikhs, Hindus, Muslims; communal harmony.";
    } else if (correctedMsg.includes("history")) {
      return "History: Indus Valley roots; rule of Mauryas, Mughals; Sikh Empire under Maharaja Ranjit Singh; independence struggle.";
    } else if (correctedMsg.includes("religion")) {
      return "Religion: Sikhism founded by Guru Nanak; Golden Temple in Amritsar; major Hindu temples; Gurdwaras all across.";
    } else if (correctedMsg.includes("games")) {
      return "Traditional sports: Kabaddi, Kushti (wrestling), Gatka; modern sports: hockey, cricket, football.";
    } else if (correctedMsg.includes("weather")) {
      return "Weather: Hot summers (May–Jun), monsoon (Jul–Sep), cool winters (Dec–Feb); ideal to visit between October–March.";
    } else if (correctedMsg.includes("hotel")) {
      return "Accommodation: Luxury hotels in Amritsar & Chandigarh; heritage stays in forts & havelis; budget hostels.";
    } else if (correctedMsg.includes("transport")) {
      return "Transport: Well-connected by train (Amritsar, Ludhiana), roadways, domestic airports in Amritsar & Chandigarh.";
    } else if (correctedMsg.includes("city")) {
      return "Major cities: Amritsar (Golden Temple), Chandigarh (planned city), Ludhiana (industrial hub), Patiala (royal heritage).";
    } else if (correctedMsg.includes("river")) {
      return "Five rivers: Satluj, Beas, Ravi, Chenab, Jhelum — giving Punjab the name 'Land of Five Rivers'.";
    } else if (correctedMsg.includes("geography")) {
      return "Geography: Northern plains; fertile soil; borders Pakistan; foothills of Himalayas in northeast.";
    } else if (correctedMsg.includes("shop")) {
      return "Shopping: Markets for phulkari, juttis, jewelry, handicrafts; malls & street bazaars in Amritsar & Ludhiana.";
    } else {
      return "Sorry, I didn’t understand. Try asking about food, attractions, culture, festivals, transport, or history of Punjab!";
    }
  }
});
