import { MagicHeroes } from './classMagicHeroes';

export class Daemon extends MagicHeroes { /// Класс демона наследуем от MagicHeroes
  constructor(name, type) {
    super(name, type);
    this._attack = 30;
    this.defence = 35;
  }
}
