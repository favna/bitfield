import ava from 'ava';
import { BitField, BitFieldObject } from '../dist';

type TestResolvable = keyof typeof TestBits.FLAGS | number | BitFieldObject | ((keyof typeof TestBits.FLAGS) | number | BitFieldObject)[]

/* eslint-disable no-bitwise */

class TestBits extends BitField<TestResolvable> {

	static FLAGS = {
		A: 1 << 0,
		B: 1 << 1,
		C: 1 << 2
	} as const;

}

/* eslint-enable no-bitwise */

ava('simple has', (test): void => {
	const testBits = new TestBits(1);

	test.true(testBits.has(1));
});
