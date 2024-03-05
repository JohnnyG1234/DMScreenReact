import { Children } from 'react';
import './App.css';
import PopUp from './popUpText';

const deafenedDesc = "A deafened creature cannot hear and automatically fails any ability check that requires hearing.";
const deafenedName = "Deafened";

const blindedDesc = "A blinded creature cannot see and automatically fails any ability check that requires sight. Attack rolls against the creature have advantage, and the creatures attack rolls have disadvantage.";
const blindedName = "Blinded";

const charmedDesc = "A charmed creature cannnot attack the charmer or target the charmer with harmful abilities or magical effects. The charmer has advantage on any ability check to interact socially with the creature.";
const charmedName = "Charmed";

const frightenedDesc = "A frightened creature has disadvantage on ability checks and attack rolls while the source of its fear is within line of sight. The creature cannot willingly move closer to the source of its fear.";
const frightenedName = "Frightened";

const grappledDesc = "A grappled creatures speed becomes 0, and it cannot benefit from any bonus to its speed. The condition ends if the grappler is incapacitated (see the condition). The condition also ends if an effect removes the grappled creature from the reach of the grappler or grappling effect, such as when a creature is hurled away by the thunderwave spell.";
const grappledName = "Grappled";

const incapacitatedDesc = "An incapacitated creature cannot take actions or reactions.";
const incapacitatedName = "Incapacitated";

const invisibleDesc = "An invisible creature is impossible to see without the aid of magic or a special sense. For the purpose of hiding, the creature is heavily obscured. The creatures location can be detected by any noise it makes or any tracks it leaves. Attack rolls against the creature have disadvantage, and the creatures attack rolls have advantage."; 
const invisibleName = "Invisible";

const paralyzedDesc =  "A paralyzed creature is incapacitated (see the condition) and cannot move or speak. The creature automatically fails Strength and Dexterity saving throws. Attack rolls against the creature have advantage. Any attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.";
const paralyzedName= "Paralyzed";

const petrifiedDesc = "A petrified creature is transformed, along with any nonmagical object it is wearing or carrying, into a solid inanimate substance (usually stone). Its weight increases by a factor of ten, and it ceases aging. The creature is incapacitated (see the condition), cannot move or speak, and is unaware of its surroundings. Attack rolls against the creature have advantage. The creature automatically fails Strength and Dexterity saving throws. The creature has resistance to all damage The creature is immune to poison and disease, although a poison or disease already in its system is suspended, not neutralized."; 
const petrifiedName = "Petrified";

const poisonedDesc = "A poisoned creature has disadvantage on attack rolls and ability checks."; 
const poisonedName = "Poisoned";

const proneDesc = "A prone creatures only movement option is to crawl, unless it stands up and thereby ends the condition. The creature has disadvantage on attack rolls. An attack roll against the creature has advantage if the attacker is within 5 feet of the creature. Otherwise, the attack roll has disadvantage."; 
const proneName = "Prone";

const restrainedDesc = "A restrained creatures speed becomes 0, and it cannot benefit from any bonus to its speed. Attack rolls against the creature have advantage, and the creatures attack rolls have disadvantage. The creature has disadvantage on Dexterity saving throws.";
const restrainedName = "Restrained";

const stunnedDesc = "A stunned creature is incapacitated (see the condition), cannot move, and can speak only falteringly. The creature automatically fails Strength and Dexterity saving throws. Attack rolls against the creature have advantage.";
const stunnedName = "Stunned";

const unconsciousDesc = "An unconscious creature is incapacitated (see the condition), cannot move or speak, and is unaware of its surroundings. The creature drops whatever its holding and falls prone. The creature automatically fails Strength and Dexterity saving throws. Attack rolls against the creature have advantage. Any attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature."; 
const unconsciousName = "Unconscious";


function Conditions(){
    return (
        <>
        <div className="b square">
          <h2> Conditions </h2>
          <div className="conditionFlex">
          <PopUp textContent={deafenedDesc}
          buttonString={deafenedName}
          header={deafenedName}
          />
          <PopUp textContent={blindedDesc}
          buttonString={blindedName}
          header={blindedName}
          />
          <PopUp textContent={charmedDesc}
          buttonString={charmedName}
          header={charmedName}
          />
          <PopUp textContent={frightenedDesc}
          buttonString={frightenedName}
          header={frightenedName}
          />
          <PopUp textContent={grappledDesc}
          buttonString={grappledName}
          header={grappledName}
          />
          <PopUp textContent={incapacitatedDesc}
          buttonString={incapacitatedName}
          header={incapacitatedName}
          />
          <PopUp textContent={invisibleDesc}
          buttonString={invisibleName}
          header={invisibleName}
          />
          <PopUp textContent={paralyzedDesc}
          buttonString={paralyzedName}
          header={paralyzedName}
          />
          <PopUp textContent={petrifiedDesc}
          buttonString={petrifiedName}
          header={petrifiedName}
          />
          <PopUp textContent={poisonedDesc}
          buttonString={poisonedName}
          header={poisonedName}
          />
          <PopUp textContent={proneDesc}
          buttonString={proneName}
          header={proneName}
          />
          <PopUp textContent={restrainedDesc}
          buttonString={restrainedName}
          header={restrainedName}
          />
          <PopUp textContent={stunnedDesc}
          buttonString={stunnedName}
          header={stunnedName}
          />
          <PopUp textContent={unconsciousDesc}
          buttonString={unconsciousName}
          header={unconsciousName}
          />
          </div>
        </div>
        </>
    );
}

export default Conditions;