/* Константы */
const DEFAULT_PRORETIES = {
  FUEL: 5,
  DURABILITY: 100,
  SPEED: 10,
  TRACK_LENGTH: 200,
};

/* Елементы DOM */
const carSelect = document.querySelector('.car-select');
const oponentsSelect = document.querySelector('.oponents-select');
const compareSelect = document.querySelector('.compare');
const carCards = document.querySelectorAll('.car-select__car-type');
const compareList = document.querySelector('.popup__compare-list');

// Гражданский автомобиль
const civCar = document.querySelector('.car-select__car-type_civil');
const civCarFuel = civCar.querySelector('.car-select__stat_fuel');
const civCarConsumption = civCar.querySelector('.car-select__stat_consumption');
const civCarDurability = civCar.querySelector('.car-select__stat_durability');
const civCarSpeed = civCar.querySelector('.car-select__stat_speed');

// Спортивный автомобиль
const sportCar = document.querySelector('.car-select__car-type_sport');
const sportCarFuel = sportCar.querySelector('.car-select__stat_fuel');
const sportCarConsumption = sportCar.querySelector(
  '.car-select__stat_consumption'
);
const sportCarDurability = sportCar.querySelector(
  '.car-select__stat_durability'
);
const sportCarSpeed = sportCar.querySelector('.car-select__stat_speed');

// Военный автомобиль
const militaryCar = document.querySelector('.car-select__car-type_military');
const militaryCarFuel = militaryCar.querySelector('.car-select__stat_fuel');
const militaryCarConsumption = militaryCar.querySelector(
  '.car-select__stat_consumption'
);
const militaryCarDurability = militaryCar.querySelector(
  '.car-select__stat_durability'
);
const militaryCarSpeed = militaryCar.querySelector('.car-select__stat_speed');

// Опоненты
const oponentsForm = document.querySelector('.oponents-select__from');

// Панель убправления
const controlPanel = document.querySelector('.panel');
const powerReserveEl = controlPanel.querySelector('.panel__power-reserv');

// Дорога
const road = document.querySelector('.road');
const roadCars = road.querySelector('.road__cars');

// Попап
const popup = document.querySelector('.popup');

// Кнопки
const cardBtns = document.querySelectorAll('.car-select__add-stat');
const oponentsInput = document.querySelector('.oponents-select__input');
const oponentsBtn = document.querySelector('.oponents-select__button');
const compareBtn = document.querySelector('.compare__button');
const startBtn = controlPanel.querySelector('.panel__button_start');
const restartBtn = controlPanel.querySelector('.panel__button_restart');
const popupCloseBtn = popup.querySelector('.popup__button');

/* Конструкторы */
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
      this[parametr] += 1;
    }
    if (totalPoints === 12) {
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

const setCivCarStats = () => {
  civCarFuel.textContent = `Бензобак: ${2}`;
  civCarConsumption.textContent = `Расход топлива: ${2}`;
  civCarDurability.textContent = `Прочность: ${2}`;
  civCarSpeed.textContent = `Скорость: ${4}`;
};

const setSportCarStats = () => {
  sportCarFuel.textContent = `Бензобак: ${2}`;
  sportCarConsumption.textContent = `Расход топлива: ${1}`;
  sportCarDurability.textContent = `Прочность: ${1}`;
  sportCarSpeed.textContent = `Скорость: ${6}`;
};

const setMilitaryCarStats = () => {
  militaryCarFuel.textContent = `Бензобак: ${2}`;
  militaryCarConsumption.textContent = `Расход топлива: ${2}`;
  militaryCarDurability.textContent = `Прочность: ${4}`;
  militaryCarSpeed.textContent = `Скорость: ${2}`;
};

const buildCompareList = (carsArray) => {
  const compareListArr = compare(carsArray);

  return compareListArr.forEach((item) => {
    const tamplate = document
      .querySelector('#compare-list')
      .content.querySelector('.car')
      .cloneNode(true);
    const carElement = tamplate;
    const carName = carElement.querySelector('.car__name');
    const carPowerReserve = carElement.querySelector(
      '.car__power-reserve-value'
    );
    const carDurability = carElement.querySelector('.car__durability-value');
    const carSpeed = carElement.querySelector('.car__speed-value');

    carName.textContent = item.name;
    carPowerReserve.textContent = item.powerReserve;
    carDurability.textContent = item.durability;
    carSpeed.textContent = item.speed;

    compareList.append(carElement);
  });
};

let userCar = null;

const handleCardClick = (evt) => {
  if (userCar !== null) return;
  if (evt.target.closest('.car-select__car-type_civil')) {
    userCar = new CivilianCar();
  }
  if (evt.target.closest('.car-select__car-type_sport')) {
    userCar = new SportCar();
  }
  if (evt.target.closest('.car-select__car-type_military')) {
    userCar = new MilitaryCar();
  }

  const target = evt.currentTarget;
  carCards.forEach((card) => card.classList.remove('car-select__active'));
  target.classList.toggle('car-select__active');
  carSelect.classList.add('done');
  oponentsBtn.disabled = false;

  const carElment = document.createElement('li');
  roadCars.insertAdjacentElement('afterbegin', carElment);
  carElment.classList.add('road__car', 'road__car_user');
  carElment.textContent = userCar.name;
};

const handleCardBtnClick = (evt) => {
  if (userCar === null) return;
  const totalPoints =
    userCar.fuel +
    userCar.lowFuelConsumption +
    userCar.durability +
    userCar.speed;

  if (totalPoints === 12) {
    return alert('Вы не можете набрать больше 12 очков');
  }

  const target = evt.target;
  const carStat = target.closest('div').querySelector('.car-select__stat');
  const str = carStat.textContent;

  switch (str.slice(0, 4)) {
    case 'Бенз':
      userCar.addPoint('fuel');
      break;
    case 'Расх':
      userCar.addPoint('lowFuelConsumption');
      break;
    case 'Проч':
      userCar.addPoint('durability');
      break;
    case 'Скор':
      userCar.addPoint('speed');
      break;
  }

  carStat.textContent =
    str.slice(0, str.length - 1) + (+str.charAt(str.length - 1) + 1);
  powerReserveEl.textContent = `Запас хода: ${userCar.getPowerReserve()}`;
};

let cars = [];

const handleOponentBtnClick = (evt) => {
  evt.preventDefault();
  const inputValue = +oponentsInput.value;

  if (userCar === null || cars.length) return;
  if (!Number.isFinite(inputValue) || inputValue < 1 || inputValue > 15) {
    alert('Введите число от 1 до 15');
    oponentsForm.reset();
    return;
  }

  cars = userCar.addOpponents(oponentsInput.value);

  cars.forEach((car) => {
    const carElment = document.createElement('li');
    roadCars.insertAdjacentElement('afterbegin', carElment);
    carElment.classList.add('road__car', 'road__car_oponent');
    carElment.textContent = car.name;
  });
  oponentsBtn.disabled = true;
  oponentsSelect.classList.add('done');
};

const handleCompareBtnClick = () => {
  if (userCar === null || cars.length === 0) return;
  if (compareSelect.classList.contains('done')) {
    popup.classList.remove('popup_hidden');
    return;
  }

  buildCompareList([userCar, ...cars]);
  compareSelect.classList.add('done');
  popup.classList.remove('popup_hidden');
};

const hendlePopupClose = () => {
  popup.classList.add('popup_hidden');
};

const handleStartBtnClick = () => {
  alert('Полная версия доступна после покупки. Стоимость 1000 рублей.');
};

const handleRestartBtnClick = () => {
  location.reload();
};

/* Слушатели */
const addEventListeners = () => {
  carCards.forEach((card) => card.addEventListener('click', handleCardClick));
  cardBtns.forEach((btn) => btn.addEventListener('click', handleCardBtnClick));
  oponentsBtn.addEventListener('click', handleOponentBtnClick);
  compareBtn.addEventListener('click', handleCompareBtnClick);
  startBtn.addEventListener('click', handleStartBtnClick);
  restartBtn.addEventListener('click', handleRestartBtnClick);
  popupCloseBtn.addEventListener('click', hendlePopupClose);
};

const init = () => {
  setCivCarStats();
  setSportCarStats();
  setMilitaryCarStats();
  addEventListeners();
};

init();
