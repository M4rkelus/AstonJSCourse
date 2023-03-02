/* Конструкторы */
/* Константы */
const DEFAULT_PRORETIES = {
  FUEL: 5,
  DURABILITY: 100,
  SPEED: 10,
  TRACK_LENGTH: 200,
};

class Car {
  constructor(name = 'Unknown Car') {
    this.name = name;
    this.fuel = 0;
    this.lowFuelConsumption = 0;
    this.durability = 0;
    this.speed = 0;
  }

  addPoint(parametr) {
    const totalPoints =
      this.fuel + this.lowFuelConsumption + this.durability + this.speed;
    if (totalPoints < 12) {
      console.log(totalPoints);
      this[parametr] += 1;
    }
    if (totalPoints === 12) {
      console.log(totalPoints);
      console.log('Превышен лимит распределяемых очков');
    }
    return this;
  }

  addOpponents(quantity) {
    const cars = [];
    for (let i = 0; i < quantity; i++) {
      cars.push(new this.constructor(`Соперник ${i + 1}`));
      cars[i]._rundomizeStats()._rundomizeStats();
    }
    return cars;
  }

  _rundomizeStats() {
    const stats = ['fuel', 'lowFuelConsumption', 'durability', 'speed'];
    const randomStat = stats[Math.floor(Math.random() * stats.length)];
    this[randomStat] += 1;
    return this;
  }

  getPowerReserve() {
    const totalFuel = this.fuel + DEFAULT_PRORETIES.FUEL;
    const powerReserve =
      totalFuel * DEFAULT_PRORETIES.TRACK_LENGTH +
      totalFuel *
        0.1 *
        DEFAULT_PRORETIES.TRACK_LENGTH *
        this.lowFuelConsumption;
    return powerReserve;
  }

  getDurability() {
    const durability =
      DEFAULT_PRORETIES.DURABILITY +
      this.durability * 0.1 * DEFAULT_PRORETIES.DURABILITY;
    return durability;
  }

  getSpeed() {
    const speed =
      DEFAULT_PRORETIES.SPEED + this.speed * 0.05 * DEFAULT_PRORETIES.SPEED;
    return speed;
  }
}

class CivilianCar extends Car {
  constructor(name = 'Гражданский автомобиль') {
    super(name);
    this.fuel = 2;
    this.lowFuelConsumption = 2;
    this.durability = 2;
    this.speed = 4;
  }
}

class SportCar extends Car {
  constructor(name = 'Спортивный автомобиль') {
    super(name);
    this.fuel = 2;
    this.lowFuelConsumption = 1;
    this.durability = 1;
    this.speed = 6;
  }
}

class MilitaryCar extends Car {
  constructor(name = 'Военный автомобиль') {
    super(name);
    this.fuel = 2;
    this.lowFuelConsumption = 2;
    this.durability = 4;
    this.speed = 2;
  }
}

/* Функции */
const findMaxValue = (arr, parametr) => {
  const max = arr.reduce((acc, item) => {
    if (item[parametr] >= acc) {
      acc = item[parametr];
    }
    return acc;
  }, 0);

  return max;
};

const compare = (carsArray) => {
  const startStatsArr = carsArray.map((item) => {
    return {
      powerReserve: item.getPowerReserve(),
      durability: item.getDurability(),
      speed: item.getSpeed(),
      name: item.name,
    };
  });

  return startStatsArr.map((item) => {
    const comparedCarsObj = {};

    Object.keys(item).forEach((key) => {
      const comparedStatsObj = {};
      const maxValue = findMaxValue(startStatsArr, key);
      const currentValue = item[key];

      if (key === 'name') {
        comparedStatsObj[key] = currentValue;
      } else if (currentValue === maxValue) {
        comparedStatsObj[key] = 100 + '%';
      } else {
        comparedStatsObj[key] =
          Math.floor((currentValue / maxValue) * 100) + '%';
      }

      comparedCarsObj[key] = comparedStatsObj[key];
    });

    return comparedCarsObj;
  });
};

const civilianCar = new CivilianCar();
const oponents = civilianCar.addOpponents(5);
console.log(compare([civilianCar, ...oponents]));
