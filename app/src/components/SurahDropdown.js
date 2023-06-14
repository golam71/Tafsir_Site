import React, { useState } from 'react';
import './SurahDropdown.css';

  const SurahDropdown = () => {
    const surahs = [
        { number: 1, name: 'Al-Faatiha' },
        { number: 2, name: 'Al-Baqara' },
        { number: 3, name: 'Aal-i-Imraan' },
        { number: 4, name: 'An-Nisaa' },
        { number: 5, name: 'Al-Maaida' },
        { number: 6, name: 'Al-An\'aam' },
        { number: 7, name: 'Al-A\'raaf' },
        { number: 8, name: 'Al-Anfaal' },
        { number: 9, name: 'At-Tawba' },
        { number: 10, name: 'Yunus' },
        { number: 11, name: 'Hud' },
        { number: 12, name: 'Yusuf' },
        { number: 13, name: 'Ar-Ra\'d' },
        { number: 14, name: 'Ibrahim' },
        { number: 15, name: 'Al-Hijr' },
        { number: 16, name: 'An-Nahl' },
        { number: 17, name: 'Al-Israa' },
        { number: 18, name: 'Al-Kahf' },
        { number: 19, name: 'Maryam' },
        { number: 20, name: 'Taa-Haa' },
        { number: 21, name: 'Al-Anbiyaa' },
        { number: 22, name: 'Al-Hajj' },
        { number: 23, name: 'Al-Muminoon' },
        { number: 24, name: 'An-Noor' },
        { number: 25, name: 'Al-Furqaan' },
        { number: 26, name: 'Ash-Shu\'araa' },
        { number: 27, name: 'An-Naml' },
        { number: 28, name: 'Al-Qasas' },
        { number: 29, name: 'Al-Ankaboot' },
        { number: 30, name: 'Ar-Room' },
        { number: 31, name: 'Luqman' },
        { number: 32, name: 'As-Sajda' },
        { number: 33, name: 'Al-Ahzaab' },
        { number: 34, name: 'Saba' },
        { number: 35, name: 'Faatir' },
        { number: 36, name: 'Yaseen' },
        { number: 37, name: 'As-Saaffaat' },
        { number: 38, name: 'Saad' },
        { number: 39, name: 'Az-Zumar' },
        { number: 40, name: 'Al-Ghaafir' },
        { number: 41, name: 'Fussilat' },
        { number: 42, name: 'Ash-Shura' },
        { number: 43, name: 'Az-Zukhruf' },
        { number: 44, name: 'Ad-Dukhaan' },
        { number: 45, name: 'Al-Jaathiya' },
        { number: 46, name: 'Al-Ahqaf' },
        { number: 47, name: 'Muhammad' },
        { number: 48, name: 'Al-Fath' },
        { number: 49, name: 'Al-Hujuraat' },
        { number: 50, name: 'Qaaf' },
        { number: 51, name: 'Adh-Dhaariyat' },
        { number: 52, name: 'At-Tur' },
        { number: 53, name: 'An-Najm' },
        { number: 54, name: 'Al-Qamar' },
        { number: 55, name: 'Ar-Rahmaan' },
        { number: 56, name: 'Al-Waaqia' },
        { number: 57, name: 'Al-Hadid' },
        { number: 58, name: 'Al-Mujaadila' },
        { number: 59, name: 'Al-Hashr' },
        { number: 60, name: 'Al-Mumtahana' },
        { number: 61, name: 'As-Saff' },
        { number: 62, name: 'Al-Jumu\'a' },
        { number: 63, name: 'Al-Munaafiqoon' },
        { number: 64, name: 'At-Taghaabun' },
        { number: 65, name: 'At-Talaaq' },
        { number: 66, name: 'At-Tahrim' },
        { number: 67, name: 'Al-Mulk' },
        { number: 68, name: 'Al-Qalam' },
        { number: 69, name: 'Al-Haaqqa' },
        { number: 70, name: 'Al-Ma\'aarij' },
        { number: 71, name: 'Nooh' },
        { number: 72, name: 'Al-Jinn' },
        { number: 73, name: 'Al-Muzzammil' },
        { number: 74, name: 'Al-Muddaththir' },
        { number: 75, name: 'Al-Qiyaama' },
        { number: 76, name: 'Al-Insaan' },
        { number: 77, name: 'Al-Mursalaat' },
        { number: 78, name: 'An-Naba' },
        { number: 79, name: 'An-Naazi\'aat' },
        { number: 80, name: 'Abasa' },
        { number: 81, name: 'At-Takwir' },
        { number: 82, name: 'Al-Infitaar' },
        { number: 83, name: 'Al-Mutaffifin' },
        { number: 84, name: 'Al-Inshiqaaq' },
        { number: 85, name: 'Al-Burooj' },
        { number: 86, name: 'At-Taariq' },
        { number: 87, name: 'Al-A\'laa' },
        { number: 88, name: 'Al-Ghaashiya' },
        { number: 89, name: 'Al-Fajr' },
        { number: 90, name: 'Al-Balad' },
        { number: 91, name: 'Ash-Shams' },
        { number: 92, name: 'Al-Lail' },
        { number: 93, name: 'Ad-Dhuhaa' },
        { number: 94, name: 'Ash-Sharh' },
        { number: 95, name: 'At-Tin' },
        { number: 96, name: 'Al-Alaq' },
        { number: 97, name: 'Al-Qadr' },
        { number: 98, name: 'Al-Bayyina' },
        { number: 99, name: 'Az-Zalzala' },
        { number: 100, name: 'Al-Aadiyaat' },
        { number: 101, name: 'Al-Qaari\'a' },
        { number: 102, name: 'At-Takaathur' },
        { number: 103, name: 'Al-Asr' },
        { number: 104, name: 'Al-Humaza' },
        { number: 105, name: 'Al-Fil' },
        { number: 106, name: 'Quraish' },
        { number: 107, name: 'Al-Maa\'un' },
        { number: 108, name: 'Al-Kawthar' },
        { number: 109, name: 'Al-Kaafiroon' },
        { number: 110, name: 'An-Nasr' },
        { number: 111, name: 'Al-Masad' },
        { number: 112, name: 'Al-Ikhlaas' },
        { number: 113, name: 'Al-Falaq' },
        { number: 114, name: 'An-Naas' },
          // Add more Surahs as needed
      ];      
  
    const [selectedSurah, setSelectedSurah] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
  
    const handleSurahClick = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    const handleSurahSelect = (surahNumber) => {
      setSelectedSurah(surahNumber);
      setIsDropdownOpen(false);
    };
  
    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
    const filteredSurahs = surahs.filter((surah) =>
      (`${surah.number}. ` + surah.name).toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    return (
    <>
      <div style={{display:'flex', alignItems: 'center'}}>
        <div className="surah-dropdown" onClick={handleSurahClick}>
          {selectedSurah ? (
            <span>{selectedSurah}. Surah {surahs.find((surah) => surah.number === selectedSurah).name}</span>
          ) : (
            <span>Select Surah</span>
          )}
          <i className={`fa fa-chevron-${isDropdownOpen ? 'up' : 'down'}`} />
        </div>
      </div>
        {isDropdownOpen && (
          <div className="dropdown-menu">
            <div className="search-section">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search Surah..."
              />
            </div>
            <div className="surah-list">
              {filteredSurahs.map((surah) => (
                <div
                  key={surah.number}
                  className={`surah-option ${selectedSurah === surah.number ? 'active' : ''}`}
                  onClick={() => handleSurahSelect(surah.number)}
                >
                  {`${surah.number}. ` + surah.name}
                </div>
              ))}
            </div>
          </div>
          )}
        </>
    );
  };
  
  export default SurahDropdown;
