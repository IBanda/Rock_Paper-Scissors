import getWinner from '../utils/getWinner';

test('Paper beats Rock',()=>{
    expect(getWinner('paper','rock')).toBe('player')
})

test('Rock beats Scissors',()=>{
    expect(getWinner('scissors','rock')).toBe('house')
})

test('Scissors beats Paper',()=>{
    expect(getWinner('scissors','paper')).toBe('player');
})

test('Same weapons should draw',()=>{
    expect(getWinner('rock','rock')).toBe('draw')
})