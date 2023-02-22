const createPerson = ({ name = 'New User', skills = [] }) => {
  const person = {
    name,
    skills,
    addName(value) {
      this.name = value;
      return this;
    },
    addSkill(value) {
      this.skills = this.skills.includes(value)
        ? this.skills
        : [...this.skills, value];
      return this;
    },
    removeSkill(value) {
      this.skills = this.skills.filter((skill) => skill !== value);
      return this;
    },
  };

  return person;
};
