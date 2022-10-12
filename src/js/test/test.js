import { Magician } from '../classMagician';
import { Daemon } from '../classDaemon';

test('all classes', () => { /// Тест на создание экземпляра класса
  const mage = new Magician('Magican', 'Mage');
  const deamon = new Daemon('Demon', 'Deamon');
  expect(mage).toEqual({
    _attack: 50,
    _stoned: false,
    defence: 15,
    health: 100,
    name: 'Magican',
    type: 'Mage',
  });
  expect(deamon).toEqual({
    _attack: 30,
    _stoned: false,
    defence: 35,
    health: 100,
    name: 'Demon',
    type: 'Deamon',
  });
});

test('atack test', () => { /// Тест атаки без stoned
  const mage = new Magician('Magican', 'Mage');
  mage.stoned = false;
  mage.attack = 2;
  expect(mage.attack).toBe(45);
});

test('stoned test', () => { /// Тест атаки со свойством stoned
  const mage = new Magician('Magican', 'Mage');
  mage.stoned = true;
  mage.attack = 2;
  expect(mage.stoned).toBe(true);
  expect(mage.attack).toBe(40);
});

test('distanse test1', () => { /// Тест минимального значения поля
  const mage = new Magician('Magican', 'Mage');
  mage.attack = 0;
  expect(mage.attack).toBe(50);
});
test('distanse test2', () => { /// Тест максимального значения поля
  const mage = new Magician('Magican', 'Mage');
  mage.attack = 10;
  expect(mage.attack).toBe(5);
});
