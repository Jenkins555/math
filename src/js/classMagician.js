import { MagicHeroes } from './classMagicHeroes';

export class Magician extends MagicHeroes { /// Класс мага наследуем от MagicHeroes
  constructor(name, type) {
    super(name, type);
    this._attack = 50;
    this.defence = 15;
  }
}
