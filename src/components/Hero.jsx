export const Hero = (props) => {
  return (
    <div class="bg-grey-500 flex flex-col justify-center">
      <h1 class="text-4xl font-bold text-center p-5 mt-10 sm:p-10 sm:text-5xl text-white">
        بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
      </h1>
      <div class="flex justify-around w-screen mt-10">
        <input
          id="surah"
          class="mx-2 sm:mx-10 py-3 px-1 sm:px-5 w-5/6 sm:w-1/2 bg-grey-300 outline-none text-white"
          type="text"
          placeholder="Surah Number"
          list="surahs"
        />
        <datalist id="surahs">
          <option value="1. Al-Faatiha (The Opener)"></option>
          <option value="2. Al-Baqara (The Cow)"></option>
          <option value="3. Aal-i-Imraan (Family of Imran)"></option>
          <option value="4. An-Nisaa (The Women)"></option>
          <option value="5. Al-Maaida (The Table Spread)"></option>
          <option value="6. Al-An'aam (The Cattle)"></option>
          <option value="7. Al-A'raaf (The Heights)"></option>
          <option value="8. Al-Anfaal (The Spoils of War)"></option>
          <option value="9. At-Tawba (The Repentance)"></option>
          <option value="10. Yunus (Jonah)"></option>
          <option value="11. Hud (Hud)"></option>
          <option value="12. Yusuf (Joseph)"></option>
          <option value="13. Ar-Ra'd (The Thunder)"></option>
          <option value="14. Ibrahim (Abraham)"></option>
          <option value="15. Al-Hijr (The Rocky Tract)"></option>
          <option value="16. An-Nahl (The Bee)"></option>
          <option value="17. Al-Israa (The Night Journey)"></option>
          <option value="18. Al-Kahf (The Cave)"></option>
          <option value="19. Maryam (Mary)"></option>
          <option value="20. Taa-Haa (Ta-Ha)"></option>
          <option value="21. Al-Anbiyaa (The Prophets)"></option>
          <option value="22. Al-Hajj (The Pilgrimage)"></option>
          <option value="23. Al-Muminoon (The Believers)"></option>
          <option value="24. An-Noor (The Light)"></option>
          <option value="25. Al-Furqaan (The Criterion)"></option>
          <option value="26. Ash-Shu'araa (The Poets)"></option>
          <option value="27. An-Naml (The Ant)"></option>
          <option value="28. Al-Qasas (The Stories)"></option>
          <option value="29. Al-Ankaboot (The Spider)"></option>
          <option value="30. Ar-Room (The Romans)"></option>
          <option value="31. Luqman (Luqman)"></option>
          <option value="32. As-Sajda (The Prostration)"></option>
          <option value="33. Al-Ahzaab (The Combined Forces)"></option>
          <option value="34. Saba (Sheba)"></option>
          <option value="35. Faatir (Originator)"></option>
          <option value="36. Yaseen (Ya Sin)"></option>
          <option value="37. As-Saaffaat (Those who set the Ranks)"></option>
          <option value="38. Saad (The Letter Saad)"></option>
          <option value="39. Az-Zumar (The Troops)"></option>
          <option value="40. Al-Ghaafir (The Forgiver)"></option>
          <option value="41. Fussilat (Explained in Detail)"></option>
          <option value="42. Ash-Shura (The Consultation)"></option>
          <option value="43. Az-Zukhruf (The Ornaments of Gold)"></option>
          <option value="44. Ad-Dukhaan (The Smoke)"></option>
          <option value="45. Al-Jaathiya (The Crouching)"></option>
          <option value="46. Al-Ahqaf (The Wind-Curved Sandhills)"></option>
          <option value="47. Muhammad (Muhammad)"></option>
          <option value="48. Al-Fath (The Victory)"></option>
          <option value="49. Al-Hujuraat (The Rooms)"></option>
          <option value="50. Qaaf (The Letter Qaf)"></option>
          <option value="51. Adh-Dhaariyat (The Winnowing Winds)"></option>
          <option value="52. At-Tur (The Mount)"></option>
          <option value="53. An-Najm (The Star)"></option>
          <option value="54. Al-Qamar (The Moon)"></option>
          <option value="55. Ar-Rahmaan (The Beneficent)"></option>
          <option value="56. Al-Waaqia (The Inevitable)"></option>
          <option value="57. Al-Hadid (The Iron)"></option>
          <option value="58. Al-Mujaadila (The Pleading Woman)"></option>
          <option value="59. Al-Hashr (The Exile)"></option>
          <option value="60. Al-Mumtahana (She that is to be examined)"></option>
          <option value="61. As-Saff (The Ranks)"></option>
          <option value="62. Al-Jumu'a (The Congregation, Friday)"></option>
          <option value="63. Al-Munaafiqoon (The Hypocrites)"></option>
          <option value="64. At-Taghaabun (The Mutual Disillusion)"></option>
          <option value="65. At-Talaaq (The Divorce)"></option>
          <option value="66. At-Tahrim (The Prohibition)"></option>
          <option value="67. Al-Mulk (The Sovereignty)"></option>
          <option value="68. Al-Qalam (The Pen)"></option>
          <option value="69. Al-Haaqqa (The Reality)"></option>
          <option value="70. Al-Ma'aarij (The Ascending Stairways)"></option>
          <option value="71. Nooh (Noah)"></option>
          <option value="72. Al-Jinn (The Jinn)"></option>
          <option value="73. Al-Muzzammil (The Enshrouded One)"></option>
          <option value="74. Al-Muddaththir (The Cloaked One)"></option>
          <option value="75. Al-Qiyaama (The Resurrection)"></option>
          <option value="76. Al-Insaan (The Man)"></option>
          <option value="77. Al-Mursalaat (The Emissaries)"></option>
          <option value="78. An-Naba (The Tidings)"></option>
          <option value="79. An-Naazi'aat (Those who drag forth)"></option>
          <option value="80. Abasa (He Frowned)"></option>
          <option value="81. At-Takwir (The Overthrowing)"></option>
          <option value="82. Al-Infitaar (The Cleaving)"></option>
          <option value="83. Al-Mutaffifin (The Defrauding)"></option>
          <option value="84. Al-Inshiqaaq (The Sundering)"></option>
          <option value="85. Al-Burooj (The Mansions of the Stars)"></option>
          <option value="86. At-Taariq (The Nightcommer)"></option>
          <option value="87. Al-A'laa (The Most High)"></option>
          <option value="88. Al-Ghaashiya (The Overwhelming)"></option>
          <option value="89. Al-Fajr (The Dawn)"></option>
          <option value="90. Al-Balad (The City)"></option>
          <option value="91. Ash-Shams (The Sun)"></option>
          <option value="92. Al-Lail (The Night)"></option>
          <option value="93. Ad-Dhuhaa (The Morning Hours)"></option>
          <option value="94. Ash-Sharh (The Relief)"></option>
          <option value="95. At-Tin (The Fig)"></option>
          <option value="96. Al-Alaq (The Clot)"></option>
          <option value="97. Al-Qadr (The Power)"></option>
          <option value="98. Al-Bayyina (The Clear Proof)"></option>
          <option value="99. Az-Zalzala (The Earthquake)"></option>
          <option value="100. Al-Aadiyaat (The Courser)"></option>
          <option value="101. Al-Qaari'a (The Calamity)"></option>
          <option value="102. At-Takaathur (The Rivalry in world increase)"></option>
          <option value="103. Al-Asr (The Declining Day)"></option>
          <option value="104. Al-Humaza (The Traducer)"></option>
          <option value="105. Al-Fil (The Elephant)"></option>
          <option value="106. Quraish (Quraysh)"></option>
          <option value="107. Al-Maa'un (The Small kindnesses)"></option>
          <option value="108. Al-Kawthar (The Abundance)"></option>
          <option value="109. Al-Kaafiroon (The Disbelievers)"></option>
          <option value="110. An-Nasr (The Divine Support)"></option>
          <option value="111. Al-Masad (The Palm Fiber)"></option>
          <option value="112. Al-Ikhlaas (The Sincerity)"></option>
          <option value="113. Al-Falaq (The Daybreak)"></option>
          <option value="114. An-Naas (The Mankind)"></option>
        </datalist>

        {/* ayat number  */}
        <input
          id="ayat"
          class="mx-2 sm:mx-10 py-3 px-1 sm:px-5 w-4/6 sm:w-1/2 bg-grey-300 outline-none text-white"
          type="number"
          placeholder="Ayat Number"
          min="1"
          max="286"
        />
      </div>
    </div>
  );
};
