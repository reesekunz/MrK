import React from "react";
import "./Vocab.scss";

function Vocab() {
  return (
    <div className="vocab-container">
      {/* Vocab Page Unit 1: Rome and Byzantium */}
      Vocabulary Terms
      <div className="subjects-container">
        <div className="subject-wrapper">
          <div className="subject-img-wrapper">
            <img
              src="https://img.icons8.com/cotton/150/000000/coliseum--v1.png"
              className="subject-img"
            />
          </div>
          <h3 className="subject-header">Rome and Byzantium</h3>
          <div className="chapter-links">
            <a href="#" className="chapter-link">
              Chapter 1: The Roman Empire
            </a>
            <a href="#" className="chapter-link">
              Chapter 2: Byzantine Empire
            </a>
          </div>
        </div>
        {/* Vocab Page Unit 2: Islamic Civilization */}

        <div className="subject-wrapper">
          <div className="subject-img-wrapper">
            <img
              src="https://img.icons8.com/officel/150/000000/mosque.png"
              className="subject-img"
            />
          </div>
          <h3 className="subject-header">Islamic Civilization</h3>
          <div className="chapter-links">
            <a href="#" className="chapter-link">
              Chapter 3: Islam
            </a>
            <a href="#" className="chapter-link">
              Chapter 4: The Islamic World
            </a>
          </div>
        </div>
        {/* Vocab Page Unit 3: Sub-Saharan Africa */}

        <div className="subject-wrapper">
          <div className="subject-img-wrapper">
            <img
              src="https://img.icons8.com/color/150/000000/elephant.png"
              className="subject-img"
            />
          </div>
          <h3 className="subject-header">Sub-Saharan Africa</h3>
          <div className="chapter-links">
            <a href="#" className="chapter-link">
              Chapter 5: The Rise of West African Empires
            </a>
            <a href="#" className="chapter-link">
              Chapter 6: West African Civilization
            </a>
          </div>
        </div>
        {/* Vocab Page Unit 4: Civilizations in the Americas */}

        <div className="subject-wrapper">
          <div className="subject-img-wrapper">
            <img
              src="https://img.icons8.com/cotton/150/000000/chichen-itza--v1.png"
              className="subject-img"
            />
          </div>
          <h3 className="subject-header">Civilizations in the Americas</h3>
          <div className="chapter-links">
            <a href="#" className="chapter-link">
              Chapter 7: The Mayas
            </a>
            <a href="#" className="chapter-link">
              Chapter 8: The Incas
            </a>
            <a href="#" className="chapter-link">
              Chapter 9: The Aztecs
            </a>
          </div>
        </div>
        {/* Vocab Page Unit 5: East Asia Civilizations */}

        <div className="subject-wrapper">
          <div className="subject-img-wrapper">
            <img
              src="https://img.icons8.com/officel/150/000000/pagoda.png"
              className="subject-img"
            />
          </div>
          <h3 className="subject-header">East Asia Civilizations</h3>
          <div className="chapter-links">
            <a href="#" className="chapter-link">
              Chapter 10: China's Golden Age
            </a>
            <a href="#" className="chapter-link">
              Chapter 11: China Under the Mongols and the Ming
            </a>
            <a href="#" className="chapter-link">
              Chapter 12: The Rise of Japan
            </a>
            <a href="#" className="chapter-link">
              Chapter 13: Japan's Golden Age
            </a>
          </div>
        </div>
        {/* Vocab Page Unit 6:  Europe in the Middle Ages */}

        <div className="subject-wrapper">
          <div className="subject-img-wrapper">
            <img
              src="https://img.icons8.com/color/150/000000/medieval-crown.png"
              className="subject-img"
            />
          </div>
          <h3 className="subject-header"> Europe in the Middle Ages</h3>
          <div className="chapter-links">
            <a href="#" className="chapter-link">
              Chapter 14: A New Civilization in Europe
            </a>
            <a href="#" className="chapter-link">
              Chapter 15: The Medieval Conflicts and Crusades
            </a>
            <a href="#" className="chapter-link">
              Chapter 16: A Changing Medieval World
            </a>
          </div>
        </div>
        {/* Vocab Page Unit 7:  Early Modern Europe */}

        <div className="subject-wrapper">
          <div className="subject-img-wrapper">
            <img
              src="https://img.icons8.com/plasticine/150/000000/armored-breastplate.png"
              className="subject-img"
            />
          </div>
          <h3 className="subject-header"> Early Modern Europe</h3>
          <div className="chapter-links">
            <a href="#" className="chapter-link">
              Chapter 17: The Renaissance
            </a>
            <a href="#" className="chapter-link">
              Chapter 18: The Reformation
            </a>
            <a href="#" className="chapter-link">
              Chapter 19: Age of Exploration
            </a>
            <a href="#" className="chapter-link">
              Chapter 20: Revolutions in Thought
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vocab;
