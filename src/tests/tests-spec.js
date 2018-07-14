describe('Bus reports', () => {

  let expected = "";

  beforeEach(() => {
    expected = "Bus reports";
  });

  afterEach(() => {
    expected = "";
  });

  it('says Bus reports', () => {
    expect(busReports())
        .toEqual(expected);
  });
});


function busReports() {
  return 'Bus reports!';
}