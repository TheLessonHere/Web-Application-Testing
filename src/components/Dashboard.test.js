const strikeHandler = (strikes, strikeSetter) => {
    if (strikes === 2)
    {return strikeSetter(0);}
    else
    {return strikeSetter(strikes + 1);}
}

const strikeSetter = (num) => {
    const strikes = num;
    return strikes;
  }

describe('Dashboard.js', () => {
    describe('strikeHandler()', () => {
        it('Should increment the strike count based on the number of strikes', () => {
            expect(strikeHandler(0, strikeSetter)).toBe(1);
        })
    })
});
  