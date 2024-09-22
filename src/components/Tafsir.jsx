import { TafsirCard } from "./tafsirCard";

let surah = 1;
let ayat = 1;
let book = "ibnkathir";

const tafsirData = [
  {
    name: "Tafsir Al-Quran Al-Azeem",
    id: "ibnkathir",
    writer: "Ibn Kathir",
  },
  {
    name: "Maarif ul-Quran",
    id: "maarif",
    writer: "Muhammad Shafi'",
  },
  {
    name: "Tafheem ul-Quran",
    id: "maududi",
    writer: "Abul-Aala Maududi",
  },
  {
    name: "Tafsir Jalalayn",
    id: "jalalayn",
    writer: "As-Suyuti and Al-Mahalli",
  },
  // {
  //   name: "Tafsir As-Sa'di",
  //   id: "tafseer_as_sadi",
  //   writer: "Abdur Rahman al-Sa'di",
  // },
  // {
  //   name: "Commentary on the Quran",
  //   id: "commentary_al_ghazali",
  //   writer: "Muhammad Al-Ghazali",
  // },
  // {
  //   name: "Tafsir Qurtubi (Incomplete)",
  //   id: "tafseer_qurtubi",
  //   writer: "Abu 'Abdullah Al-Qurtubi",
  // },
  // {
  //   name: "Tafsir At-Tabari (Incomplete)",
  //   id: "tafseer_at_tabari",
  //   writer: "Ibn Jarir At-Tabari",
  // },
];

function selectTafsirCard(selectedId) {
  const cardElements = document.querySelectorAll(".TafsirCard");
  cardElements.forEach((card) => {
    card.classList.add("border-transparent");
  });

  // Highlight the selected card and show its details
  const selectedCard = document.getElementById(selectedId);
  if (selectedCard) {
    selectedCard.classList.remove("border-transparent");
    selectedCard.classList.add("border-purple-300");
    book = String(selectedCard.id);
  }
  showTafsir();
}

// Main Tafsir component
export const Tafsir = () => {
  return (
    <div>
      <h1 className="text-white text-center text-xl m-5 font-medium">
        Select Tafsirs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {tafsirData.map((item) => (
          <TafsirCard
            key={item.id}
            id={item.id}
            name={item.name}
            writer={item.writer}
            onClick={selectTafsirCard}
          />
        ))}
      </div>
    </div>
  );
};

async function fetchTafsir(book, surah, ayat) {
  const url = `https://tafsir.fussilat.com/api2/${book}/${surah}/${ayat}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    let data = await response.json();

    function fixMisencodedText(str) {
      return new TextDecoder("utf-8").decode(
        new Uint8Array([...str].map((c) => c.charCodeAt(0)))
      );
    }

    if (data.text) {
      data.text = fixMisencodedText(data.text);
    }

    return data; // Return the data object
  } catch (error) {
    throw new Error("Failed to fetch Tafsir: " + error.message);
  }
}

function getDataFromUser() {
  let selectedValue = document.getElementById("surah").value;
  let dataList = document.querySelector("datalist");
  let options = dataList.getElementsByTagName("option");
  let optionsArray = Array.from(options);

  let surahNumber =
    optionsArray.findIndex((option) => option.value === selectedValue) + 1;
  let ayatNumber = document.getElementById("ayat").value;

  return {
    book: String(book),
    surah: Number(surahNumber),
    ayat: Number(ayatNumber),
  };
}

async function showTafsir() {
  const tafsirTextElement = document.getElementById("tafsirText");
  tafsirTextElement.innerText = "Loading..."; // Show loading message

  const { book, surah, ayat } = getDataFromUser();

  try {
    const fetchedData = await fetchTafsir(book, surah, ayat);
    tafsirTextElement.innerText = fetchedData.text; // Show fetched data
  } catch (error) {
    tafsirTextElement.innerText = error.message; // Display the error message
  }
}

function runFirst() {}
