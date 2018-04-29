function sortedListGetCount(list) {
    return list.length;
}

function SortedList() {
    return [];
}

function sortedListGetRawArray(list) {
    return Array.from(list);
}

var numsort = function (a, b) {
    return a - b;
};

function add(list,value) {
    if (list.indexOf(value) == -1) {
        list.push(value);
        list.sort(numsort);
    }
    return list;
}

function assert(message, actual, expected) {
    if(actual != expected){
        throw new Error(message);
    }

}


function sortedListSearch(list, valueToFind) {

    var minIndex = 0;
    var maxIndex = list.length - 1;
    var currentIndex;
    var currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = (minIndex + maxIndex) / 2 | 0;
        currentElement = list[currentIndex];

        if (currentElement < valueToFind) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > valueToFind) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }

    return maxIndex;
}


function main() {
    try {
        var list = SortedList();

        for (var i = 0; i < 1000; i++) {
            var value = Math.floor(Math.random() * 1000);
            add(list, value);
        }
        console.log(list);
        // assert("Validating collection count", sortedListGetCount(list), 1000);

        var valueToFind = 10;
        var actualIndex = sortedListSearch(list, valueToFind);
        console.log(actualIndex);
        var arr = sortedListGetRawArray(list);
        var expectedIndex = arr.indexOf(valueToFind);
        assert("Validating search", actualIndex, expectedIndex);

        console.log("PASS");
    }
    catch (err) {
        console.log("FAIL: " + err.message);
    }
}


main();




