class Company {
  constructor(name, salary) {
    Company.addStaff({ name });

    this.income = (value) => {
      Company.store.staffList = Company.store.staffList.map((item) => {
        if (item.name === name) {
          item.income += value - salary;
        }
        return item;
      });
      Company.store.money += value - salary;
    };

    this.spend = (value) => {
      Company.store.staffList = Company.store.staffList.map((item) => {
        if (item.name === name) {
          item.income -= value;
        }
        return item;
      });
      Company.store.money -= value;
    };
  }

  static store = {
    staffList: [],
    countStaff: 0,
    money: 0,
  };

  static addStaff({ name, income = 0 }) {
    this.store.staffList.push({ name, income });
    this.store.countStaff++;
  }

  static getLeaders() {
    return this.store.staffList.filter(
      (item) =>
        item.income ===
        Math.max(...this.store.staffList.map((item) => item.income))
    );
  }
}
