import {assertEquals} from "@std/assert";
import first from "../../solutions/december02/first.ts";
import second from "../../solutions/december02/second.ts";

const firstData = `7 6 4 2 1\n1 2 7 8 9\n9 7 6 2 1\n1 3 2 4 5\n8 6 4 4 1\n1 3 6 7 9`;
const secondData = `7 6 4 2 1\n1 2 7 8 9\n9 7 6 2 1\n1 3 2 4 5\n8 6 4 4 1\n1 3 6 7 9`;

Deno.test({
    name: "Check first 02dec",
    fn: () => {
        assertEquals(first(firstData), 2);
    }
});

Deno.test({
    name: "Check first 02dec real data",
    permissions: {read: true},
    ignore: true,
    fn: async () => {
        const data = await Deno.readTextFile("./tests/december02/data.txt");
        assertEquals(first(data), 639);
    }
});

Deno.test({
    name: "Check second 02dec",
    fn: () => {
        assertEquals(second(secondData), 4);
    }
});

Deno.test({
    name: "Check second 02dec real data",
    permissions: {read: true},
    ignore: true,
    fn: async () => {
        const data = await Deno.readTextFile("./tests/december02/data.txt");
        assertEquals(second(data), 674);
    }
});