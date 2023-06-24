import React, { useEffect, useState } from 'react';

const Counter = () => {
  // logic

  let count = 0;

  const initialCount = 6;

  const [count1, setCount1] = useState(initialCount);

  const banana = {
    color: 'yellow',
    price: 1000,
    type: '열대과일',
  };

  // const count1 = useState(initialCount)[0];
  // const setCount1 = useState()[1];

  const min = 0;
  const max = 10;

  const increase = () => {
    if (count1 >= max) return;
    // count1 += 1;
    // console.log('increase', count);
    setCount1((prev) => prev + 1);
    // console.log('count1', count1);

    // const {value} = input
    // input.value

    // const color = banana.color
    // const price = banana.price
    // const type = banana.type

    const { color: colorName } = banana;
    test();

    // console.log('color', colorName);
    // console.log('price', price);
    // console.log('type', type);
  };

  const decrease = () => {
    count = count <= min ? 0 : count - 1;
  };

  useEffect(() => {
    const person = {
      name: 'somi',
      age: 20,
      gender: '',
    };

    const { name, age, gender } = person;

    // if (name === 'somi' || age === 34) {
    //   console.log('true!!');
    // }

    // if (!(name === 'somi')) {
    //   console.log('not');
    // }

    // console.log('gender', gender);
    // console.log(!!gender);
    // console.log('!!gender', !!gender);

    // default parameter

    const add = (num1, num2) => {
      if (!!num2) {
      }
      // console.log('num1', num1, 'num2', num2);
      // console.log('add', num1 + num2);
    };

    add(1, 2);

    // spread syntax
    const fruitList = ['바나나', '애플', '자몽'];
    const org = '오렌지';
    const fruitListCopy = [...fruitList, org];
    // console.log('fruitListCopy', fruitListCopy);

    const banana = {
      color: 'yellow',
      price: 1000,
      type: '열대과일',
    };

    const kiwi = {
      ...banana,
      color: 'green',
      type: '온대과일',
    };
    // console.log('kiwi', kiwi);
    // console.log('banana', banana);

    const chutzrit = {
      name: 'somi',
      message: '어렵다❌ -> 익숙하지 않다',
    };

    const chutzritCopy = {
      ...chutzrit,
      message: '세상을 바꾸는건 꿈을 꾸고 도전하는 사람들의 몫이다',
    };

    // console.log('chutzrit', chutzrit);
    // console.log('chutzritCopy', chutzritCopy);

    const isCoffee = false;

    const coffee = '☕️';
    const coke = '🥤';

    let room = isCoffee ? coffee : coke;

    if (isCoffee) {
      room = coffee;
    } else {
      room = coke;
    }

    // console.log('room', room);
  });

  const sleep = (ms) => {
    // ms시간 후 resolve함수가 실행되어 끝남
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const test = async () => {
    console.log('시작');
    await sleep(3000);
    console.log('끝');
  };

  // view
  return (
    <div>
      <h1>Counter</h1>
      <h2>{count1}</h2>
      <button type="button" className="increaseButton" onClick={increase}>
        +1
      </button>
      <button type="button" className="decreaseButton" onClick={decrease}>
        -1
      </button>
    </div>
  );
};

export default Counter;
