test('tobe vs toEqual', () => {
 
    expect({}).not.toBe({})
    expect({}).toEqual({})
    expect(Object.is({}, {})).toBe(false)
    expect({}==={}).toBe(false)
  })