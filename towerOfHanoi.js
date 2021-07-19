const resolveTowerOfHanoi = (tower1, tower2, tower3, discs) => {
  if (discs < 0) return;
  resolveTowerOfHanoi(tower1, tower3, tower2, discs - 1);
  console.log(`Move Disc- ${discs} From ${tower1} to ${tower2}`);
  resolveTowerOfHanoi(tower3, tower2, tower1, discs - 1);
};

resolveTowerOfHanoi("tower1", "tower2", "tower3", 5);
