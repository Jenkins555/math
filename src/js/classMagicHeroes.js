import { Character } from './classCharacter';

export class MagicHeroes extends Character { /// Магический клас , наследуем от основного
  constructor(name, type) {
    super(name, type);
    this._attack = 0;
    this._stoned = false;
  }

  get attack() { /// Определяем геттер свойства attack
    return this._attack;
  }

  set attack(cell) { /// Аргументом дальность клетки
    let dist = cell; /// Переназначение для eslint
    if (dist > 8) {
      dist = 10;
    } else if (dist < 1) { /// Поле от 1 до 8
      dist = 1;
    }
    this._attack -= (this._attack * ((dist - 1) / 10)); /// %силы атаки от дальности
    if (this._stoned === true) {
      this._attack = +((this._attack - Math.log2(dist) * 5).toFixed(0));
    }
  }

  get stoned() { /// Определяем геттер свойства stoned
    return this._stoned;
  }

  set stoned(value) { /// Меняем значение stoned
    if (value === true) {
      this._stoned = value;
    } else {
      this._stoned = false;
    }
  }
}
