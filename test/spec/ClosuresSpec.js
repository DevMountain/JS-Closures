describe('closures', function () {

	describe('inner', function () {
		it('should exist', function () {
			expect(inner).toBeDefined();
		})
		it('should be a function', function () {
			expect(inner).toEqual(jasmine.any(Function));
		})
		it('should be the outer function', function () {
			expect(JSON.stringify(inner)).toEqual(JSON.stringify(outer()));
		})
	})

	describe('makeCall', function () {
		it('should exist', function () {
			expect(makeCall).toBeDefined();
		})
		it('should be a function', function () {
			expect(makeCall).toEqual(jasmine.any(Function));
		})
		it('should be the callFriend function', function () {
			expect(JSON.stringify(makeCall)).toEqual(JSON.stringify(callFriend()));
		})
		//it('should return Calling Jake at 435-215-9248', function () {
		//	expect( makeCall('435-215-9248')).toBe('Calling Jake at 435-215-9248');
        //
		//})
	})


	describe('makeCounter', function () {
		it('should exist', function () {
			expect(makeCounter).toBeDefined();
		})
		it('should be a function', function () {
			expect(makeCounter).toEqual(jasmine.any(Function));
		})
		it('should return a function', function () {
			expect(makeCounter()).toEqual(jasmine.any(Function));
		})
		it('should make count() increment', function () {
			var count = makeCounter();
			var first = count();
			var second = count();
			var third = count();
			expect(first).toBe(1);
			expect(second).toBe(2);
			expect(third).toBe(3);

		})
	})

describe('counterFactory', function() {
	it('should exist', function() {
		expect(counterFactory).toBeDefined();
		expect(counter).toBeDefined();
	})

	it('should be a module', function() {
		expect(counter.inc).toEqual(jasmine.any(Function));
		expect(counter.dec).toEqual(jasmine.any(Function));
	})

	it('should increment', function() {
		var c = counterFactory(5);
		expect(c.inc()).toEqual(6);
		expect(c.inc()).toEqual(7);
	})

	it('should decrement', function() {
		var c = counterFactory(5);
		expect(c.dec()).toEqual(4);
		expect(c.dec()).toEqual(3);
	})
})

describe('motivation', function() {
	var test = (function() {
		var names = [
			'Brett Caudill',
			'Jessica Hathaway',
			'Breiden Busch',
			'Brian Kemper'
		];

		var thisName = names[Math.floor(Math.random() * names.length)].split(" ");

		return {
			first: thisName[0],
			last: thisName[1]
		}
	})();

	it('should exist', function() {
		expect(motivation).toEqual(jasmine.any(Function))
	})

	it('should greet correctly', function() {
		expect(motivation(test.first, test.last)).toEqual(
			"You're doing awesome, keep it up " + test.first + " " + test.last + "."
		)
	})
})

describe('module', function() {
	it('should exist', function() {
		expect(module).toEqual(jasmine.any(Object));
	})

	it('should have a property called publicMethod', function() {
		expect(module.publicMethod).toEqual(jasmine.any(Function));
	})

	it('should invoke publicMethod to get the privateMethod', function() {
		expect(module.publicMethod()).toEqual('Hi, I\'m phillip, age 29 from Utah');
	})
})

describe('timeOutCounter', function() {
	beforeEach(function() {
		jasmine.clock().install();
		spyOn(console, 'log');
	});

	afterEach(function() {
		jasmine.clock().uninstall();
	})

	it('should exist', function() {
		expect(timeOutCounter).toEqual(jasmine.any(Function))
	})


	it('should call setTimeout 5 times', function() {

		timeOutCounter();

		jasmine.clock().tick(500);
		expect(console.log.calls.count()).toEqual(1);
		expect(console.log).toHaveBeenCalledWith(0);

		jasmine.clock().tick(1000);
		expect(console.log.calls.count()).toEqual(2);
		expect(console.log).toHaveBeenCalledWith(1);

		jasmine.clock().tick(1000);
		expect(console.log.calls.count()).toEqual(3);
		expect(console.log).toHaveBeenCalledWith(2);

		jasmine.clock().tick(1000);
		expect(console.log.calls.count()).toEqual(4);
		expect(console.log).toHaveBeenCalledWith(3);

		jasmine.clock().tick(1000);
		expect(console.log.calls.count()).toEqual(5);
		expect(console.log).toHaveBeenCalledWith(4);

		jasmine.clock().tick(1000);
		expect(console.log.calls.count()).toEqual(6);
		expect(console.log).toHaveBeenCalledWith(5);
	})
})


describe('funcArray', function () {
	it('should exist', function () {
		expect(funcArray).toBeDefined();
	})
	it('should contain exactly six elements', function () {
		expect(funcArray.length).toBe(6);
	})
	it('should return the correct values', function () {
		expect(funcArray[0]()).toBe(0);
		expect(funcArray[1]()).toBe(1);
		expect(funcArray[2]()).toBe(2);
		expect(funcArray[3]()).toBe(3);
		expect(funcArray[4]()).toBe(4);
		expect(funcArray[5]()).toBe(5);
	})
})

});
