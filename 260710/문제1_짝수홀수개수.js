/*
[문제]
정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.
*/

function solution(num_list) {
	let result = [];
	let odd = [];
	let even = [];

	for (let i = 0; i < num_list.length; i++) {
		if (num_list[i] % 2 === 0) {
			even.push(num_list[i]);
		} else {
			odd.push(num_list[i]);
		}
	}
	let evenNum = even.length;
	let oddNum = odd.length;

	result = [evenNum, oddNum];

	return result;
}

/*
[다른 풀이1]
function solution(num_list) {
	let even = 0;
	let odd = 0;

	for (let i = 0; i < num_list.length; i++) {
		if (num_list[i] % 2 === 0) {
			even++;
		} else {
			odd++;
		}
	}
	return [even, odd];
}

[다른 풀이2]
function solution(num_list) {
	return [
		num_list.filter((num) => num % 2 === 0).length,
		num_list.filter((num) => num % 2 === 1).length,
	];
}
*/
