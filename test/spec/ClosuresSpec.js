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

	describe('callJake', function () {
		it('should exist', function () {
			expect(callJake).toBeDefined();
		})
		it('should be a function', function () {
			expect(callJake).toEqual(jasmine.any(Function));
		})
		it('should return Calling Jake at 435-215-9248', function () {
			expect( callJake('435-215-9248')).toBe('Calling Jake at 435-215-9248');
		})
		it('should use the dial function', function () {
			var newCall = callFriend('Jake');
			expect(newCall('1')).toEqual(callJake('1'));
		})

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

	describe('findPotentialFriends', function() {
		it('should exist', function() {
			expect(findPotentialFriends).toEqual(jasmine.any(Function));
		})

		it('should return a function', function() {
			expect(findPotentialFriends([])).toEqual(jasmine.any(Function));
		})

		it('should return false if a given user is already a friend', function() {
			expect(findPotentialFriends(["Tom"])("Tom")).toEqual(false)
		})

		it('should return true if a given user is not a friend', function() {
			expect(findPotentialFriends(["Tom"])("Tim")).toEqual(true);
		})

		describe('Black Diamond', function() {
			it('should create an array of potential second level friends', function() {
				expect(potentialSecondLevelFriends).toEqual(jasmine.any(Array));
				expect(potentialSecondLevelFriends).toEqual(['Anne', 'Quinton'])
			})
			it('should create an array of potential friends from all users', function() {
				expect(allPotentialFriends).toEqual(jasmine.any(Array));
				expect(allPotentialFriends).toEqual(['Anne', 'Quinton', 'Katie', 'Mary'])
			})
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

		it('should call setTimeout 6 times', function() {
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


});
