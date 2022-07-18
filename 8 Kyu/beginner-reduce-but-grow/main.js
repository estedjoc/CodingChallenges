// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

const grow = x => x.reduce( (previousValue, currentValue) => previousValue * currentValue, 1 );

//I just realized I can use reduce to multiply through an array.... it is not just for adding up numbers