const data = [
  {
    name: "Tafsir Al-Quran Al-Azeem",
    writer: "Ibn Kathir",
    link: "0",
  },
  {
    name: "Maarif ul-Quran",
    writer: "Muhammad Shafi'",
    link: "1",
  },
  {
    name: "Tafheem ul-Quran",
    writer: "Abul-Aala Maududi",
    link: "2",
  },
  {
    name: "Tafsir Jalalayn",
    writer: "As-Suyuti and Al-Mahalli",
    link: "3",
  },
  {
    name: "Tafsir As-Sa'di",
    writer: "Abdur Rahman al-Saâ␦␦di",
    link: "4",
  },
  {
    name: "Commentary on the Quran",
    writer: "Muhammad Al-Ghazali",
    link: "5",
  },
  {
    name: "Tafsir Qurtubi (Incomplete)",
    writer: "Abu 'Abdullah Al-Qurtubi",
    link: "6",
  },
  {
    name: "Tafsir At-Tabari (Incomplete)",
    writer: "Ibn Jarir At-Tabari",
    link: "7",
  },
];

function SelectCard(link) {
  //make every card have transparent border so the previous card selected will be un-selected
  var elements = document.getElementsByClassName("TafsirCard");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("border-transparent");
  }

  //now add border to the card that is selected now and remove the cards transparent feature so it can be seen

  document.getElementById(link).classList.remove("border-transparent");
  document.getElementById(link).classList.add("border-purple-300");
  console.log(document.getElementById(link));
}

const TafsirCard = ({ name, writer, link, onClick }) => (
  <div
    id={link}
    className="TafsirCard bg-grey-300 flex flex-col align-middle m-5 text-white  py-5 rounded-lg shadow-lg border-2 border-transparent"
    onClick={() => onClick(link)}
  >
    <button>
      <h2 className="text-lg text-center font-bold">{name}</h2>
      <p className="text-sm text-center">{writer}</p>
    </button>
  </div>
);

export const Tafsir = (props) => {
  return (
    <div>
      <h1 className="text-white text-center text-xl m-5 font-medium">
        Select Tafsirs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {data.map((item) => (
          <TafsirCard
            key={item.link}
            name={item.name}
            writer={item.writer}
            link={item.link}
            onClick={SelectCard}
          />
        ))}
      </div>
    </div>
  );
};

