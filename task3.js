const createLiker = () => {
  const likerObj = {
    rating: 0,
    like() {
      this.rating++;
      return this;
    },
    dislike() {
      this.rating--;
      return this;
    },
    val() {
      return this.rating;
    },
  };
  return likerObj;
};
